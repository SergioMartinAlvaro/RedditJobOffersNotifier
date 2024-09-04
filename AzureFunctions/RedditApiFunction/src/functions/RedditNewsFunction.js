const { app } = require("@azure/functions");
const snoowrap = require("snoowrap");
const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

// Función para convertir ReadableStream a cadena
async function streamToString(stream) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let result = '';
  let done, value;
  while ({ done, value } = await reader.read(), !done) {
    result += decoder.decode(value, { stream: true });
  }
  result += decoder.decode();
  return result;
}

app.http("RedditNewsTrigger", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log('Azure Function RedditNewsTrigger iniciada.');

    try {
      // Verificar que el encabezado Content-Type sea application/json
      /*if (request.headers['content-type'] !== 'application/json') {
        context.log.error('El Content-Type debe ser application/json.');
        context.res = {
          status: 400,
          body: "Content-Type debe ser application/json."
        };
        return;
      }
*/
      // Leer el cuerpo de la solicitud
      let requestBody;
      if (request.body.getReader) {
        const bodyString = await streamToString(request.body);
        requestBody = JSON.parse(bodyString);
      } else {
        requestBody = request.body;
      }
      
      context.log('Request body:', JSON.stringify(requestBody));

      if (!requestBody || Object.keys(requestBody).length === 0) {
        context.log.error('Request body is empty');
        return {
          status: 400,
          body: "Request body is empty."
        };
      }

      // Inicializar el cliente de Azure Key Vault
      const credential = new DefaultAzureCredential();
      const vaultName = process.env.VaultName;
      const url = process.env.RedditApiUrl;
      const client = new SecretClient(url, credential);

      // Obtener credenciales de la API de Reddit desde Key Vault
      const clientId = await client.getSecret("clientId");
      const clientSecret = await client.getSecret("clientSecret");
      const refreshToken = await client.getSecret("refreshToken");

      // Inicializar snoowrap con las credenciales obtenidas
      const reddit = new snoowrap({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        clientId: clientId.value,
        clientSecret: clientSecret.value,
        refreshToken: refreshToken.value
      });

      // Obtener las publicaciones principales de un subreddit
      const subreddit = requestBody.subreddit || 'news';
      const topPosts = await reddit.getSubreddit(subreddit).getTop({limit: 10 });

      // Preparar la respuesta
      const searchKeywords = requestBody.searchKeywords || ['keyword1', 'keyword2', 'keyword3']; 
      const response = topPosts
        .filter(post => searchKeywords.some(keyword => post.title.toLowerCase().includes(keyword.toLowerCase())))
        .map(post => ({
          title: post.title,
          url: post.url,
          score: post.score
        }));

      context.log('Response:', JSON.stringify(response));

      // Enviar la respuesta
      context.res = {
        status: 200,
        body: JSON.stringify(response)
      };
      return {
        status: 200,
        body: JSON.stringify(response)
      }
    } catch (error) {
      context.log.error('Error:', error.message);
      return {
        status: 500,
        body: { error: error.message }
      };
    }
  }
});