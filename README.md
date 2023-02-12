# О вебсайте

[![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.spec.whatwg.org/multipage/)
[![JS](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

> Зайдите в каждый из папок в репозиторий, чтобы узнать что как работает, я расписал там всё от А до Я для новичков, или просто заинтересованных людей, это не профессиональный проект, это лишь сайт одного человека, на*** вас пошлю если услышу критику от диванных прогеров, не для вас я свой код выкладываю в Гитхаб

Для начала работы вам нужны минимальные знания о том, как работают веб сервера, как обрабатываются запросы и должны быть знакомы с фреймворком [NodeJS](https://nodejs.org) и библиотекой для разработки серверов [ExpressJS](https://expressjs.com)

> Node.js® is an open-source, cross-platform JavaScript runtime environment.

> Fast, unopinionated, minimalist web framework for *Node.js*
<br/>
<br/>
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# Теперь к делу

> Сайт является открытым и имеет открытый исходный код, вы в праве изменять составляющие сайта как хотите и распростронять их, но продавать исходные коды.

Сперва понадобится клонировать репозиторий на ваш сервер

```
git clone https://github.com/alyxmp4/alyxmp4.ml
```
> Естественно, вам нужна система контроля версиями [Git](https://gitlab.com), гуглите, если не знаете что это

> Потом, зайдя в клонированный репозиторий нужно установить нужные зависимости используя менеджер пакетов

```bash
cd alyxmp4.ml
npm install // или yarn add pkg.json
```

Да, тебе нужен менеджер пакетов [NPM](https://npmjsmcom) и он обычно всегда идёт вместе с [NodeJS](https://nodejs.org), но я же не знаю что там у вас в сервере может твориться, верно?)

Теперь можно запустить сервер
```bash
DEBUG=alyxmp4.ml:* npm start // for linux/MacOSX
set DEBUG=alyxmp4.ml:* & npm start // for Windows
```

или воспользоваться nodemon

> nodemon is npm module which is very useful while developing NodeJS projects, it restarts app every time it will notices that files have changed, so you don't need to restart app by yourself
> простыми словами, чел, это просто перезагружает файлы каждый раз, как ты изменил файлы, очень полезная вещь в разработке

```bash
npm install -g nodemon
DEBUG=alyxmp4.ml:* nodemom bin/www
```

теперь заходим на `http://localhost:3000` или `http://127.0.0.1:3000` (это одно и то же) и увидеть ваш сайт :)

# Деплоинг на хостинг

Я использовал [Vercel](https://vercel.com) как хостинг и [Freenom](https://www.freenom.com/en/index.html?lang=en) для регистрации домена
> Простыми словами, хостинг нужен для того, чтобы размещать ваши проекты/сайте в облако, чтобы тот работал круглосуточно и туда могли заходить люди используя домен, домен же нужен для удобства, вы можете увидеть сайт введя IP адрес сервера, это будет огромный набор цифр типо 137.26.96.286 ну или же вы можете привязать домен к серверу и всегда получать доступ через например alyxmp4.ml, введя это в браузере

Я использовал [Serverless Functions ](https://vercel.com/docs/concepts/functions/serverless-functions) от Верселя, чтобы захостить приложение

Теперь настроим vercel.json

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

Теперь можно создать [Github Репозиторий](https://github.com/new) и залить туда все файлы 

```bash
git init -b main
git add . && git commit -m "initial commit"
git push origin (BRANCH)*
git remote add origin (URL)**
git push origin (BRANCH)*
``` 
-- Вас попросят войти в Git, тогда используете CLI (command line interface), [подробнее здесь](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html) --


\* сюда имя вашей ветки в репозиторий
<br/>
\** сюда ссылку на ваш репозиторий

Теперь просто заходите на сайт Верселя, логинитесь, деплоите ваше приложения с Гитхаба и всё теперь встало на свои места

* На этом всё. Благодарю за внимание!
