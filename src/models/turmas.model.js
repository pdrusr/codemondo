const pool = require("../utils/conexao.util");

exports.Inserir = async function(codigo, fase, semana, horario, professor) {
    const comando = "INSERT INTO turmas(codigo,fase,semana,horario,professor) VALUES($1, $2, $3, $4, $5);";
    try {
        await pool.query(comando, [codigo, fase, semana, horario, professor]);
    }
    catch (erro) {
        return erro;
    }
};

exports.Selecionar = async function() {
    const comando = "SELECT * FROM turmas;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.SelecionarPorEstado = async function() {
    const comando = "SELECT * FROM turmas WHERE estado;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.SelecionarPorCodigo = async function(codigo) {
    const comando = "SELECT * FROM turmas WHERE codigo = $1;";
    const resultados = await pool.query(comando, [codigo]);
    return resultados.rows;
};

exports.AtualizarEstado = async function(codigo) {
    const comando = "UPDATE turmas SET estado = FALSE WHERE codigo = $1;";
    try {
        await pool.query(comando, [codigo]);
    }
    catch (erro) {
        return erro;
    }
};