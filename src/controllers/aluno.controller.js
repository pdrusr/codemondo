const alunos = require("../models/alunos.model");
const response = require("../helpers/response.helper");
const regex = require("../helpers/regex.helper");
const tarefasHelper = require("../helpers/tarefas.helper");

exports.Obter = function (req, res, next) {
    alunos.Selecionar().then(function(resultados) {
        return res.send(200, resultados);
    });
    return next();
};

exports.ObterAtivo = function (req, res, next) {
    alunos.SelecionarPorEstado().then(function(resultados) {
        return res.send(200, resultados);
    });
    return next();
};

exports.ObterPorCodigo = function (req, res, next) {
    if (req.params.codigo) {
        const { codigo } = req.params;
        if (regex.testeAlunoCodigo(codigo)) {
            alunos.SelecionarPorEstado().then(function(resultados) {
                return res.send(200, resultados);
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest");
    return next();
};

exports.ObterPorTurma = function (req, res, next) {
    if (req.params.codigo) {
        const { codigo } = req.params;
        if (regex.testeTurmaCodigo(codigo)) {
            alunos.SelecionarPorEstado().then(function(resultados) {
                return res.send(200, resultados);
            });
            return next();
        }
    }
    response.Enviar(res, req, 400, "BadRequest");
    return next();
};

exports.Cadastrar = function(req, res, next) {
    if (req.body.codigo && req.body.nome && req.body.cidade && req.body.turma) {
        const { codigo, nome, cidade, turma } = req.body;
        if (regex.testeAluno(codigo, nome, cidade, turma)) {
            alunos.Inserir(codigo, nome, cidade, turma).then(function(erro) {
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

exports.Atualizar = function(req, res, next) {
    if (req.body.codigo && req.body.tarefas) {
        const { codigo, tarefas } = req.body;
        if (regex.testeAlunoCodigo(codigo) && tarefasHelper(tarefas)) {
            alunos.AtualizarTarefas(codigo, tarefas).then(function(erro) {
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

exports.Remover = function(req, res, next) {
    if (req.params.codigo) {
        const { codigo } = req.params;
        if (regex.testeAlunoCodigo(codigo)) {
            alunos.AtualizarEstado(codigo).then(function(erro) {
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