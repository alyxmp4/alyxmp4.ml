# website introduction

[![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/multipage/)
[![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

to get started you have to make sure that you have minimal knowledge about web development and how interned works. Website backend is based on ExpressJS framework for NodeJS, which helps us on working with non-client side and handle data, you can learn about it all in [NodeJS website/documentation](https://nodejs.org) and [ExpressJS website](https://expressjs.com)

> Node.js® is an open-source, cross-platform JavaScript runtime environment.

> Fast, unopinionated, minimalist web framework for *Node.js*
<br/>
<br/>
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# by the way, let's start

of course, feel free to change website for your own, it's open source and you're allowed to!

first of all you need to clone this repository to your Pc

```
git clone https://github.com/alyxmp4/alyxmp4.ml
```
and nah, of course you need git installed to your PC, I hope you know how to google it, right?

and then go to the directory and install all needed dependencies

```bash
cd alyxmp4.ml
npm install
```

and of course you need [NPM](https://npmjsmcom) and [NodeJS](https://nodejs.org) installed

you can easily start the server now
```bash
DEBUG=alyxmp4.ml:* npm start // for linux/MacOSX
set DEBUG=alyxmp4.ml:* & npm start // for Windows
```

or you can use nodemon instead
> nodemon is npm module which is very useful while developing NodeJS projects, it restarts app every time it will notices that files have changed, so you don't need to restart app by yourself

```bash
npm install -g nodemon
DEBUG=alyxmp4.ml:* nodemom bin/www
```

now you can go `http://localhost:3000` or `http://127.0.0.1:3000` and see my website :)

# deploying to production

I've used [Vercel](https://vercel.com) as website hosting and [Freenom](https://www.freenom.com/en/index.html?lang=en) for domain registration

I've used Vercel's [Serverless Functions ](https://vercel.com/docs/concepts/functions/serverless-functions) feature to deploy my app, now to use it you need to configure Vercel.json

```json
{
  "version": 2,
  "builds": [
    {
      "src": "app.js",
      "use": "@vercel/node"
    },
    {
      "src": "./public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "app.js"
    }
  ],
  "env": {
    "PORT": "80"
  }
}
```

so now you can [create Github Repository](https://github.com/new) and deploy all of our files to it

```bash
git init -b main
git add . && git commit -m "initial commit"
git push origin (BRANCH)*
git remote add origin (URL)**
git push origin (BRANCH)*
``` 
-- you will be asked to log into your github account via username/email and access token, read about logging into git CLI [there](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html) --


\* put your repository main branch name
<br/>
\** put your github repository url link

and then you have to log into your vercel account and make new project, after that deploy your project from GitHub repo, and just start it, everything is configured already so you don't need to worry

* That's all!! :)* thanks for attention
