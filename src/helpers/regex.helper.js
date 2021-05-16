exports.testeProfessorCodigo = function(codigo) {
    const professorCodigoRegex = new RegExp("^PROF[A-Z]{0,12}$");
    return professorCodigoRegex.test(codigo);
};

exports.testeProfessorNome = function(nome) {
    const professorNomeRegex = new RegExp("^[A-Z ]+$");
    return professorNomeRegex.test(nome);
};

exports.testeFaseCodigo = function(codigo) {
    const faseCodigoRegex = new RegExp("^FASE[A-Z0-9]{0,12}$");
    return faseCodigoRegex.test(codigo);
};

exports.testeFaseCurso = function(curso) {
    const faseCursoRegex = new RegExp("^[A-Z0-9 ]{0,16}$");
    return faseCursoRegex.test(curso);
};

exports.testeTurmaCodigo = function(codigo) {
    const turmaCodigoRegex = new RegExp("^[A-Z]+[0-9]-[A-Z]{3}-[0-9]{2}H[0-9]{2}-PROF[A-Z]+$");
    return turmaCodigoRegex.test(codigo);
};

exports.testeTurma = function(fase, semana, horario, professor) {
    const turmaFaseRegex = new RegExp("^FASE[A-Z0-9]{0,12}$");
    const turmaSemanaRegex = new RegExp("^[A-Z]{3}$");
    const turmaHorarioRegex = new RegExp("^[0-9]{2}H[0-9]{2}$");
    const turmaProfessorRegex = new RegExp("^PROF[A-Z]+$");
    return (
        turmaFaseRegex.test(fase) && 
        turmaSemanaRegex.test(semana) && 
        turmaHorarioRegex.test(horario) && 
        turmaProfessorRegex.test(professor)
    );
};

exports.testeAlunoCodigo = function(codigo) {
    const alunoCodigoRegex = new RegExp("^[A-Z]+.[A-Z]+$");
    return alunoCodigoRegex.test(codigo);
};

exports.testeAluno = function(codigo, nome, cidade, turma) {
    const alunoCodigoRegex = new RegExp("^[A-Z]+.[A-Z]+$");
    const alunoNomeRegex = new RegExp("^[A-Z ]+$");
    const alunoCidadeRegex = new RegExp("^[A-Z ]+$");
    const alunoTurmaRegex = new RegExp("^[A-Z]+[0-9]-[A-Z]{3}-[0-9]{2}H[0-9]{2}-PROF[A-Z]+$");
    return (
        alunoCodigoRegex.test(codigo) && 
        alunoNomeRegex.test(nome) && 
        alunoCidadeRegex.test(cidade) && 
        alunoTurmaRegex.test(turma)
    );
};

exports.testePainel = function(usuario, senha) {
    const painelRegex = new RegExp("^[a-zA-Z0-9@]{0,16}$");
    return painelRegex.test(usuario) && painelRegex.test(senha);
};