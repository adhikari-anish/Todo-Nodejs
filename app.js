const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const todos = require("./routes/todos");

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/todos/", todos);

app.listen(port, console.log(`server listening on port ${port}`));
