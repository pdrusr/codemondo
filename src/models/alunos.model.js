const pool = require("../utils/conexao.util");

exports.Inserir = async function(codigo, nome, cidade, turma) {
    const comando = "INSERT INTO alunos(codigo, nome, cidade, turma) VALUES($1, $2, $3, $4);";  
    try {
        await pool.query(comando, [codigo, nome, cidade, turma]);
    }
    catch (erro) {
        return erro;
    }
};

exports.Selecionar = async function() {
    const comando = "SELECT * FROM alunos;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.SelecionarPorEstado = async function() {
    const comando = "SELECT * FROM alunos WHERE estado;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.SelecionarPorCodigo = async function(codigo) {
    const comando = "SELECT * FROM alunos WHERE codigo = $1;";
    const resultados = await pool.query(comando, [codigo]);
    return resultados.rows;
};

exports.SelecionarPorTurma = async function(codigo) {
    const comando = "SELECT * FROM alunos WHERE turma = $1;";
    const resultados = await pool.query(comando, [codigo]);
    return resultados.rows;
};

exports.AtualizarTarefas = async function(codigo, tarefas) {
    const comando = "UPDATE alunos SET tarefas = $2 WHERE codigo = $1;";
    try {
        await pool.query(comando, [codigo, tarefas]);
    }
    catch (erro) {
        return erro;
    }
};

exports.AtualizarEstado = async function(codigo) {
    const comando = "UPDATE alunos SET estado = FALSE WHERE codigo = $1;";
    try {
        await pool.query(comando, [codigo]);
    }
    catch (erro) {
        return erro;
    }
};