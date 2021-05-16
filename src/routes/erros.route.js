const response = require("../helpers/response.helper");

module.exports = function(server) {

    server.on("NotFound", function(req, res, err, cb) {
        response.Enviar(res, req, 404, "NotFound");
        return cb();
    });

    server.on("MethodNotAllowed", function(req, res, err, cb) {
        response.Enviar(res, req, 405, "MethodNotAllowed");
        return cb();
    });

};