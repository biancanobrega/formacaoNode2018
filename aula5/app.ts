import * as Server from "./config/servidor";
import * as Database from "./config/database";
import * as App from "./src";

console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);

//Starting Application Server
const server = Server.init();

server.listen(3000, function () {
  Database.init();
  App.init(server);
});