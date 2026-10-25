const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const pagePath = path.join(__dirname, "index.html");
const page = fs.readFileSync(pagePath);

const server = http.createServer((request, response) => {
  if (request.method !== "GET" || (request.url !== "/" && request.url !== "/index.html")) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(page);
});

server.listen(4116, "0.0.0.0", () => {
  console.log("ok");
});
