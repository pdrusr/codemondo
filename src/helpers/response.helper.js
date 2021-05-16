exports.Enviar = function(res, req, codigo, mensagem) {
    return res.send(codigo, {
        "data/hora": new Date().toISOString(),
        "codigo": codigo,
        "mensagem": mensagem,
        "caminho": req.getPath()
    });
};

exports.EnviarJWT = function(res, req, token) {
    return res.send(202, {
        "data/hora": new Date().toISOString(),
        "codigo": 202,
        "mensagem": "Accepted",
        "token": token,
        "caminho": req.getPath()
    });
};