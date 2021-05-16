const pool = require("../utils/conexao.util");

exports.Inserir = async function(codigo, curso) {
    const comando = "INSERT INTO fases(codigo, curso) VALUES($1, $2);";  
    try {
        await pool.query(comando, [codigo, curso]);
    }
    catch (erro) {
        return erro;
    }
};

exports.Selecionar = async function() {
    const comando = "SELECT * FROM fases;";
    const resultados = await pool.query(comando);
    return resultados.rows;
};

exports.Deletar = async function(codigo) {
    const comando = "DELETE FROM fases WHERE codigo = $1;";
    try {
       const resultado = await pool.query(comando, [codigo]);
       return resultado.rowCount > 0 ? null : resultado;
    }
    catch (erro) {
        return erro;
    }
};