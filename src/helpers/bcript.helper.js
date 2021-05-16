const bcrypt = require("bcrypt");
require("dotenv").config();

exports.testeSenhaPainel = async function(senha) {
    try {
        const resultado = await bcrypt.compare(senha, process.env.PAINEL_PASSWORD);
        return resultado;
    }
    catch (erro) {
        return false;
    }
};