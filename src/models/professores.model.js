const pool = require("../utils/conexao.util");

exports.Inserir = async function(codigo, nome) {
    const comando = "INSERT INTO professores(codigo, nome) VALUES($1, $2);";
    try {
        await pool.query(comando, [codigo, nome]);
    }
    catch (erro) {
        return erro;
    }
};

exports.Selecionar = async function() {
    const comando = "SELECT * FROM professores;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.Deletar = async function(codigo) {
    const comando = "DELETE FROM professores WHERE codigo = $1;";
    try {
        const resultado = await pool.query(comando, [codigo]);
        return resultado.rowCount > 0 ? null : resultado;
    }
    catch (erro) {
        return erro;
    }
};