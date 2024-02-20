import { createServer } from "node:http";

const port = process.env.PORT || 8000;

const app = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  if (request.method === "GET" && request.url === "/") {
    return response.end(
      JSON.stringify({
        message: "server is running ok",
        name: process.env.NAME?.toString(),
      })
    );
  }
});

app.listen(port, () => {
  console.log("server is running on port 8000");
});
