const jwt = require("jsonwebtoken");
const response = require("../helpers/response.helper");
require("dotenv").config();

exports.Token = function(req, res, next) {
    const resultado = req.headers.Authorization;
    if (resultado) {
        const token = resultado.split(" ")[1];
        try {
            const decodificado = jwt.verify(token, process.env.PAINEL_JWTKEY); 
            req.usuario = decodificado.user;
            return next();
        }
        catch (erro) {
            return response.Enviar(res, req, 401, "Unauthorized");
        }
    }
    return response.Enviar(res, req, 403, "Forbidden");
};