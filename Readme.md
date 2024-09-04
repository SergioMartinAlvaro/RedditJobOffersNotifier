# Reddit API Function and Logic Apps

This project contains an Azure Function and Logic Apps to interact with the Reddit API and process Reddit posts.

## Project Structure

- AzureFunctions/ 
    - RedditApiFunction/ 
        - .funcignore 
        - .gitignore 
        - .vscode/ 
        - extensions.json 
        - launch.json 
        - settings.json 
        - tasks.json 
        - host.json 
        - local.settings.json 
        - package.json 
        - src/ 
            - functions/ 
                - RedditNewsFunction.js 
                - index.js 
                - RedditNewsFunction/ 
                    - function.json 
                    - RedditNewsFunction.js 
- LogicApps/ 
    - GetRedditPostsApp/ 
        - workflow.json 
    - MailApp/ 
        - workflow.json 
- Readme.md


### Azure Functions

The `RedditApiFunction` directory contains an Azure Function that interacts with the Reddit API.

- **[`src/functions/RedditNewsFunction.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2Fsrc%2Ffunctions%2FRedditNewsFunction.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\AzureFunctions\RedditApiFunction\src\functions\RedditNewsFunction.js")**: Contains the main function logic for fetching Reddit news.
- **[`src/index.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2Fsrc%2Findex.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\AzureFunctions\RedditApiFunction\src\index.js")**: Sets up the Azure Function app.
- **[`src/RedditNewsFunction/function.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2Fsrc%2FRedditNewsFunction%2Ffunction.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\AzureFunctions\RedditApiFunction\src\RedditNewsFunction\function.json")**: Configuration for the RedditNewsFunction.

#### Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Start the function locally:

    ```sh
    npm start
    ```

#### Configuration

- **[`host.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2Fhost.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\AzureFunctions\RedditApiFunction\host.json")**: Global configuration for all functions.
- **[`local.settings.json`](command:_github.copilot.openSymbolFromReferences?%5B%22local.settings.json%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csmartin%5C%5CDesktop%5C%5CPROYECTOS%5C%5CRedditHiringAdvisor%5C%5CAzureFunctions%5C%5CRedditApiFunction%5C%5C.funcignore%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2F.funcignore%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2F.funcignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A7%2C%22character%22%3A0%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Csmartin%5C%5CDesktop%5C%5CPROYECTOS%5C%5CRedditHiringAdvisor%5C%5CAzureFunctions%5C%5CRedditApiFunction%5C%5C.gitignore%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2F.gitignore%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FAzureFunctions%2FRedditApiFunction%2F.gitignore%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A93%2C%22character%22%3A0%7D%7D%5D%5D "Go to definition")**: Local settings for the function app.
- **`.vscode/`**: Contains VS Code settings and tasks for debugging and deployment.

### Logic Apps

The [`LogicApps`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FLogicApps%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\LogicApps") directory contains two Logic Apps:

- **`GetRedditPostsApp`**: Fetches Reddit posts and processes them.
- **`MailApp`**: Sends emails based on the processed Reddit posts.

#### Workflow Configuration

- **[`GetRedditPostsApp/workflow.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FLogicApps%2FGetRedditPostsApp%2Fworkflow.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\LogicApps\GetRedditPostsApp\workflow.json")**: Defines the workflow for fetching and processing Reddit posts.
- **[`MailApp/workflow.json`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fsmartin%2FDesktop%2FPROYECTOS%2FRedditHiringAdvisor%2FLogicApps%2FGetRedditPostsApp%2Fworkflow.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\smartin\Desktop\PROYECTOS\RedditHiringAdvisor\LogicApps\GetRedditPostsApp\workflow.json")**: Defines the workflow for sending emails.

## Dependencies

- **@azure/functions**: Azure Functions SDK.
- **@azure/identity**: Azure Identity library.
- **@azure/keyvault-secrets**: Azure Key Vault Secrets client.
- **axios**: Promise-based HTTP client.
- **node-fetch**: Node.js library for making HTTP requests.
- **snoowrap**: A JavaScript wrapper for the Reddit API.

## License

This project is licensed under the MIT License.