// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");

const server = jsonServer.create();

// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

// Comment out to allow write operations
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);

const JSON_SERVER_PORT = 3005;

server.listen(JSON_SERVER_PORT, () => {
  console.log(
    `JSON Server is running on: http://localhost:${JSON_SERVER_PORT}`
  );
});

// Export the Server API
module.exports = server;
