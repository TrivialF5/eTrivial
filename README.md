# eTrivial

Accompaniment of the board game in a mobile version, made in Vue3, digitizing the questions to keep them always updated through the Trivial API.

In the following link you can see or test the project:

# https://etrivial.netlify.app/

# For project installation:

### 1. Install node.js & npm package

The first step is to install Node.js & NPM (Node Package Manager) to your computer.

You can check to see if they’re already installed by going to the Terminal/Command prompt window in your computer and running a couple of commands.

To check the installed version of node js,

`node -v`

To check the npm, run the following command.

` npm -v`

JavaScript

If they’re not installed you’ll get the “command not found” message or something similar when running node and npm version check commands.

In that case, you will need to install them.

So, head over to the [Node.js Website](https://nodejs.org/en "Node.js Website") in your browser – you can see two versions and I would recommend using LTS which is the more stable version and it also says recommended for most users.

Click the LTS button which then starts downloading the Node.js package file on the computer. 

Double click the package file to install it which will bring up the installer window. You can pretty much install like you would other applications.

As you can see from the introduction tab, I’m not only installing node.js but also npm – so we do not need to install them separately.

Hit Continue, Continue,

Then Agree and install, which will ask for the admin password. Once the password is entered, it’ll take a few seconds to complete the installation process.

The next step is to install Vue.js.

### 2. Install Vue.js(3)

To create a build-tool-enabled Vue project on your machine, run the following command in your command line (without the > sign):

`> npm init vue@latest`

This command will install and execute create-vue, the official Vue project scaffolding tool. You will be presented with prompts for a number of optional features such as TypeScript and testing support:

` Project name: … <your-project-name>`

`✔ Add TypeScript? … No / Yes`

`✔ Add JSX Support? … No / Yes`

`✔ Add Vue Router for Single Page Application development? … No / Yes`

`✔ Add Pinia for state management? … No / Yes`

`✔ Add Vitest for Unit testing? … No / Yes`

`✔ Add Cypress for both Unit and End-to-End testing? … No / Yes`

`✔ Add ESLint for code quality? … No / Yes`

`✔ Add Prettier for code formatting? … No / Yes`

`Scaffolding project in ./<your-project-name>...
Done.`

If you are unsure about an option, simply choose No by hitting enter for now. Once the project is created, follow the instructions to install dependencies and start the dev server:

` cd <your-project-name>`

`> npm install`

`> npm run dev`

### 3. Install Tailwind

 -Installation of Tailwind is needed for the correct visualization of the web.

`npm install -D tailwindcss`
`npx tailwindcss init`

 - Configure the template paths

Add the paths to all of the template files in tailwind.config.js file.

- Add the Tailwind directives to the CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file
`@tailwind base;`
`@tailwind components;`
`@tailwind utilities;`

 - Start the Tailwind CLI build process

Run the CLI tool to scan the template files for classes and build the CSS.

For more information click [here](https://tailwindcss.com/docs/installation).

### 4.  GET API requests with Axios

you will need the link for the trivial API: 

https://opentdb.com/api_config.php

and get the API request with Axios:

```javascript
<script>
import axios from "axios";
export default {
  created() {
    axios.get("https://opentdb.com/api_config.php").then((result) => {
      console.log(result.data);
    })
  }
};
</script>

```





### Developer team
- [Scarlet ](https://github.com/skyrosa "Scarlet ")
- [Ales](https://github.com/aleswebgit "Ales")
- [Álex ](https://github.com/ginkgob "Álex ")
- [Dani](https://github.com/LvL090 "Daniel calvo")

### What's next?
- In this verson you can view which awnsers are incorrect and which one is the correct. It's not working in Safari browser. We're working on that for the next generation of our app.


THANKS

To Factory F5 and our promotion partners <3
