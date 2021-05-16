const turmas = require("../models/turmas.model");
const response = require("../helpers/response.helper");
const regex = require("../helpers/regex.helper");

exports.Obter = function (req, res, next) {
    turmas.Selecionar().then(function(resultados) {
        return res.send(200, resultados);
    });
    return next();
};

exports.ObterAtivo = function (req, res, next) {
    turmas.SelecionarPorEstado().then(function(resultados) {
        return res.send(200, resultados);
    });
    return next();
};

exports.ObterPorCodigo = function (req, res, next) {
    if (req.params.codigo) {
        const { codigo } = req.params;
        if (regex.testeTurmaCodigo(codigo)) {
            turmas.SelecionarPorCodigo(codigo).then(function(resultados) {
                return res.send(200, resultados);
            });
            return next();
        }
    }
    resposta(res, req, 400, "BadRequest");
    return next();
};

exports.Cadastrar = function(req, res, next) {
    if (req.body.fase && req.body.semana && req.body.horario && req.body.professor) {
        const { fase, semana, horario, professor } = req.body;
        if (regex.testeTurma(fase, semana, horario, professor)) {
            const codigo = `${fase}-${semana}-${horario}-${professor}`;
            turmas.Inserir(codigo, fase, semana, horario, professor).then(function(erro) {
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
        if (regex.testeTurmaCodigo(codigo)) {
            turmas.AtualizarEstado(codigo).then(function(erro) {
                if (erro) {
                    return response.Enviar(res, req, 400, "BadRequest2");
                }
                return response.Enviar(res, req, 200, "Ok");
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest1");
    return next();
};