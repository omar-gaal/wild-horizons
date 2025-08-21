import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.end("Hello from the server !");
});

server.listen(PORT, () => console.log(`server running on, ${PORT}`));

// https://scrimba.com/learn-nodejs-c00ho9qqh6/~07du
