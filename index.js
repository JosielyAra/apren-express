/*const http = require("http");

const server = http.createServer((req, res) => {
  res.status = 200;
  res.setHeader("Content-Type", "text(plain)");
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server on port 3000");
});
*/

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Me");
});
app.get("/contact", (req, res) => {
    res.send("Formulario Contacto");
  });

  app.get("/test", (req, res) => {
    res.send('<h1>TEST</h1>');
  });

app.listen(5000, () => {
  console.log("Server on port 5000");
});
