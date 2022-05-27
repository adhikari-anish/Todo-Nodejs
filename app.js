const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const path = require('path');

const app = express();

const todos = require("./routes/todos");

const apiTodos = require("./api/routes/todos");

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
  res.locals.moment = moment;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/todos");
});

app.use("/todos/", todos);

app.use("/api/v1/todos", apiTodos);

app.listen(port, console.log(`server listening on port ${port}`));
