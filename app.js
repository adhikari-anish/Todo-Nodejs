const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

const todos = require("./routes/todos");

const port = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  console.log("hereee");
  res.redirect("/todos");
});

app.use("/todos/", todos);

app.listen(port, console.log(`server listening on port ${port}`));
