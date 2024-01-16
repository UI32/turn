# turn2x site development documentation

## 📝 What is this project about?

- This is the source code of the site https://turn2x.com, it is a static site built using Gatsby (https://www.gatsbyjs.com/), it is hosted in GitHub Pages and it is deployed using a custom bash script. 


## 🤔 What do you need to work and push to this project? 

- Git (v2.25.1 or higher)
- Node.js (v18.13.0 or higher)
- A GitHub account with write access to this repository, and have a public SSH key associated to your account.

- 🚧 **IMPORTANT!** If you want to deploy the site you will need also write access to this other repo: https://github.com/turn2xcom/turn2xcom.github.io (this is the repo that contains the static files that are served by the domain https://turn2x.com)


## 🛠️ How do I start working on this project?

- Clone this repo
- Run `npm install` to install all the dependencies
- Run `npm start` to start the development server
- Open `http://localhost:8000` in your browser to see the site running

- 🚧 **IMPORTANT!** Do not make any changes in the `main` branch, you should always work in the `dev` branch or any other branch that you create for a specific feature or bug fix. The `main` branch should only be updated after deployments (The deployment script will automatically update the `main` branch).


## 🚀 How do I deploy the site?

- Allways try to deploy from the `dev` branch, if you are working on a feature or bug fix, you can create a new branch from `dev` and work there, then merge your changes to `dev` and deploy from there.

- If you have are working on a **Mac** or a **Linux** operating system, you can simply run `npm run deploy` to run the deployment script (it is located at `./scripts/deploy.sh`,in this folder). This script will build the site and push the static files to the deployment repo and update the 'main' branch of this repo.

- 🚧 **CAUTION!** After running this script you will be in the `main` branch of this repo, you might want to switch back to the `dev` branch to continue working.

- If you are using **Windows**, you can try to run the same script using Git Bash (https://gitforwindows.org/), if it does not work you can manually copy the files from the `./public` folder to the root folder of the deployment repo and push the changes, that will automatically trigger an update of the published site version.

- 🚧 **IMPORTANT!** If you are deploying from Windows you might need to change the line endings of the files in the `./scripts` folder to LF (instead of CRLF) to avoid errors when running the script. You can do this using VS Code (https://code.visualstudio.com/) and clicking on the CRLF button at the bottom right corner of the editor window. 
