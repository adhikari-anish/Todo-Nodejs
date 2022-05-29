# ToDo-Nodejs

Todo app built using NodeJs, Express, Ejs and MySQL.

## Pre-requisites
* Node = 14
* Node Package Manager (NPM) = 6
* MySQL = 8.0.29

## Install
* ToDo-Nodejs can be cloned from github repository as follows:
```
git clone git@github.com:adhikari-anish/Todo-Nodejs.git
```
* Change directory to project folder
```
cd ToDo-Nodejs
```
* Install all the dependencies listed in package.json
```
npm install
```

## Run
* Make a new file named .env, copy the content of .env.example to it and update the file with necessary database configuration.

* Run migrations
```
npm run create:todos:table
```

* Seed the database with fake datas
```
npm run seed:todos:table
```

* Run server
```
npm start
```

* Open in browser
```
http://localhost:8000
```
