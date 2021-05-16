const restify = require("restify");
const routes = require("./routes/index.route");
const erros = require("./routes/erros.route");
require("dotenv").config();
const port = process.env.PORT || 3000;

const server = restify.createServer({
    name: process.env.NAME,
    version: process.env.VERSION
});

server.use(restify.plugins.jsonBodyParser());

routes(server);
erros(server);

server.listen(port, function() {
    console.log("CODEMONDO EM FUNCIONAMENTO");
});