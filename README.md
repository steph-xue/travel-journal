# Travel Journal Project
The travel journal project is a static web application built using the front-end JavaScript library, React. The travel journal displays various travel destinations and I have visited in the past. Each destination displays a photo, description with fun facts about the location, travel dates, location city and country, as well as a link to it's Google Maps URL.

Can access on: https://travel-journal-sx.netlify.app/

![Travel Journal](./images/travel-journal.png?raw=true "Travel Journal")
<br></br>

## Languages & Frameworks
- The react info project was created using React, a front-end JavaScript web libary
  - React uses JSX, which is an XML-like extension to the JavaScript language that lets you write HTML-like markup inside a JavaScript file
- Vite was also used as a build tool to create the web application
  - Vite is a local development server that has support for frameworks like React and Vue.js, and programming languages like JavaScript and TypeScript 

## How to Run Locally
- Install the latest version of node.js (JavaScript runtime server)
- Install the latest version of npm (JavaScript package manager)
- Install the latest version of vite which can be done by typing in the command line 'npm install -D vite'
- The web application can be run on your local server by typing in the command line 'npm run dev'

## How to Deploy
- To build out the application for deployment use “npm run build”
- To test out the preview before deploying the application use “npm run preview”
- Deploy the application on your server of choice:
  - Netlify using the command line
    - Install the Netlify CLI using “npm install -g netlify-cli”
    - Create a new site in Netlify using “ntl init”
    - Deploy to a unique preview URL using “ntl deploy”
    - The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag to deploy the site into production “ntl deploy --prod”
  - Netlify using github
    - Import the project to netlify
    - Choose the branch, output directory, and set up environment variables if applicable and click deploy

