const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("What's up cohort?");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end("404");
});

server.listen(3000);
