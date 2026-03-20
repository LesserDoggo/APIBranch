const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Leo alterou a mensagem por aqui 19032026");
});


app.listen(3005, () => {
  console.log("Servidor on");
});