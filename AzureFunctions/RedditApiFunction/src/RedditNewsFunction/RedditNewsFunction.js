const { app } = require('@azure/functions');
const https = require('https');

module.exports = app.http('RedditNewsTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        // Obtener el nombre del subreddit de la query string o del body
        const subreddit = request.query.get('subreddit') || await request.text() || null;

        if (!subreddit) {
            return {
                status: 400,
                body: 'Please provide a subreddit name in the query string or in the request body'
            };
        }

        const url = `https://www.reddit.com/r/${subreddit}/new.json?sort=new&limit=1`;

        return new Promise((resolve, reject) => {
            https.get(url, { headers: { 'User-Agent': 'AzureFunctionsApp/1.0' } }, (res) => {
                let data = '';

                // Un trozo de datos ha sido recibido.
                res.on('data', (chunk) => {
                    data += chunk;
                });

                // Toda la respuesta ha sido recibida.
                res.on('end', () => {
                    if (res.statusCode === 200) {
                        const redditData = JSON.parse(data);
                        if (redditData && redditData.data && redditData.data.children.length > 0) {
                            console.log(redditData.data)
                            resolve({
                                status: 200,
                                body: redditData.data.children[0].data
                            });
                        } else {
                            resolve({
                                status: 404,
                                body: 'No posts found'
                            });
                        }
                    } else {
                        resolve({
                            status: res.statusCode,
                            body: res.statusMessage
                        });
                    }
                });
            }).on('error', (e) => {
                reject({
                    status: 500,
                    body: e.message
                });
            });
        });
    }
});