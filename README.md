# turn2x site development documentation

## 📝 What is this project about?

- This is the source code of the site https://turn2x.com, it is a static site built using Gatsby (https://www.gatsbyjs.com/), it is hosted in GitHub Pages and it is deployed automatically when updating the 'main' branch due to a github actions workflow.

## 🤔 What do you need to work and push to this project?

- Git (v2.25.1 or higher)
- Node.js (v18.13.0 or higher)
- A GitHub account with write access to this repository, and have a public SSH key associated to your account.

- 🚧 **IMPORTANT!** The public repo that contains the website build for https://turn2x.com is https://github.com/turn2xcom/turn2xcom.github.io . You should never make changes there, only in this repo.

## 🛠️ How do I start working on this project?

- Clone this repo
- Run `npm install` to install all the dependencies
- Run `npm start` to start the development server
- Open `http://localhost:8000` in your browser to see the site running

- 🚧 **IMPORTANT!** Do not make any changes in the `main` branch, you should always work in the `dev` branch or any other branch that you create for a specific feature or bug fix. Never push to `main` if you don't want to deploy.

## 🚀 How do I deploy the site?

- Simply update the main branch with your changes and push it to the remote repository. The site will be automatically deployed to GitHub Pages through a github workflow (the workflow yml file is located in ./.github/workflows/deploy.yml).
