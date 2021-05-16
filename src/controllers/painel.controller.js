const response = require("../helpers/response.helper");
const regex = require("../helpers/regex.helper");
const bcryptHelper = require("../helpers/bcript.helper");
const jwtHelper = require("../helpers/jwt.helper");

exports.Logar = function(req, res, next) {
    if (req.body.usuario && req.body.senha) {
        const {usuario, senha} = req.body;
        if (regex.testePainel(usuario, senha)) {
            bcryptHelper.testeSenhaPainel(senha).then(function(resultado) {
                if (resultado) {
                    return response.EnviarJWT(res, req, jwtHelper.Obter(usuario));
                }
                return response.Enviar(res, req, 401, "Unauthorized");
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest");
    return next();
};