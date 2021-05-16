const professores = require("../models/professores.model");
const response = require("../helpers/response.helper");
const regex = require("../helpers/regex.helper");

exports.Obter = function (req, res, next) {
    professores.Selecionar().then(function(resultados) {
        return res.send(200, resultados);
    });
    return next();
};

exports.Cadastrar = function(req, res, next) {
    if (req.body.codigo && req.body.nome) {
        const { codigo, nome } = req.body;
        if (regex.testeProfessorCodigo(codigo) && regex.testeProfessorNome(nome)) {
            professores.Inserir(codigo, nome).then(function(erro) {
                if (erro) {
                    return response.Enviar(res, req, 400, "BadRequest");
                }
                return response.Enviar(res, req, 201, "Created");
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest");
    return next();
};

exports.Remover = function(req, res, next) {
    if (req.params.codigo) {
        const { codigo } = req.params;
        if (regex.testeProfessorCodigo(codigo)) {
            professores.Deletar(codigo).then(function(erro) {
                if (erro) {
                    return response.Enviar(res, req, 400, "BadRequest");
                }
                return response.Enviar(res, req, 200, "Ok");
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest");
    return next();
};
