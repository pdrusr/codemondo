const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.Obter = function(usuario) {
    const payload = { user: usuario };
    const header = { expiresIn: "1h" };
    return jwt.sign(payload, process.env.PAINEL_JWTKEY, header);
};