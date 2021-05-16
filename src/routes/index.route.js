const aluno = require("../controllers/aluno.controller");
const fase = require("../controllers/fase.controller");
const painel = require("../controllers/painel.controller");
const professor = require("../controllers/professor.controller");
const turma = require("../controllers/turma.controller");
const verificar = require("../middlewares/verificar.middleware");

module.exports = function(server) {

    server.post("/api/painel", painel.Logar);

    server.get("/api/professor", professor.Obter);
    server.post("/api/professor", verificar.Token, professor.Cadastrar);
    server.del("/api/professor/:codigo", verificar.Token, professor.Remover);

    server.get("/api/fase", fase.Obter);
    server.post("/api/fase",verificar.Token, fase.Cadastrar);
    server.del("/api/fase/:codigo", verificar.Token, fase.Remover);

    
    server.get("/api/turma", turma.Obter);
    server.get("/api/turma/ativo", turma.ObterAtivo);
    server.get("/api/turma/:codigo", turma.ObterPorCodigo);
    server.post("/api/turma", verificar.Token, turma.Cadastrar);
    server.del("/api/turma/:codigo", verificar.Token, turma.Remover);
    
    server.get("/api/aluno", aluno.Obter);
    server.get("/api/aluno/ativo", aluno.ObterAtivo);
    server.get("/api/aluno/:codigo", aluno.ObterPorCodigo);
    server.get("/api/aluno/turma/:codigo", aluno.ObterPorTurma);
    server.post("/api/aluno", verificar.Token, aluno.Cadastrar);
    server.patch("/api/aluno/tarefas", verificar.Token, aluno.Atualizar);
    server.del("/api/aluno/:codigo", verificar.Token, aluno.Remover);
};