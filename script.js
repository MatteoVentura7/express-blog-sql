const express = require("express");
const app = express();
const port = 3000;

// ROUTER
const postRouter = require("./routers/postRouter");
const employersRouter = require("./routers/employersRouter");

// Importazione midddleware

const validatorFound = require("./middlewares/validatorFound");
const validatorError = require("./middlewares/validatorError");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server del mio Blog");
});

// Registro le rotte

app.use("/post", postRouter);
app.use("/employers", employersRouter);

// middleware che gestisce gli errori 404
app.use(validatorFound);
// middleware che gestisce gli errori interni del server
app.use(validatorError);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
