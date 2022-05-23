const express = require("express");

const app = express();
const todos = require("./routes/todos");
const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/todos/", todos);

app.listen(port, console.log(`server listening on port ${port}`));
