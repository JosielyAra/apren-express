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

app.get("/user", (req, res) => {
  res.json({
    username: "Cameron",
    latname: "Boice",
  });
});

app.post("/about", (req, res) => {
  res.send("PETICION POST");
});
app.put("/contact", (req, res) => {
  res.send("PETICION SEND");
});

app.delete("/test", (req, res) => {
  res.send("PETICION DELETE");
});

app.listen(5000, () => {
  console.log("Server on port 5000");
});
