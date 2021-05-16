CREATE DATABASE codemondo;
\c codemondo;

CREATE TABLE professores(
    codigo VARCHAR(16) NOT NULL,
    nome TEXT NOT NULL,
    data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_professor PRIMARY KEY (codigo),
    CONSTRAINT uq_professor UNIQUE (nome)
);

CREATE TABLE fases(
    codigo VARCHAR(16) NOT NULL,
    curso VARCHAR(16) NOT NULL,
    data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_fase PRIMARY KEY (codigo)
);

CREATE TABLE turmas(
    codigo VARCHAR(32) NOT NULL,
    fase VARCHAR(16) NOT NULL,
    semana VARCHAR(4) NOT NULL,
    horario VARCHAR(8) NOT NULL,
    professor VARCHAR(16) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_turma PRIMARY KEY (codigo),
    CONSTRAINT fk_turmafase FOREIGN KEY (fase) REFERENCES fases(codigo) ON DELETE CASCADE,
    CONSTRAINT fk_turmaprofessor FOREIGN KEY (professor) REFERENCES professores(codigo) ON DELETE CASCADE
);

CREATE TABLE alunos(
    codigo VARCHAR(16) NOT NULL,
    nome TEXT NOT NULL,
    cidade TEXT NOT NULL,
    tarefas INTEGER[16] NOT NULL DEFAULT ARRAY_FILL(0, ARRAY[16]),
    turma VARCHAR(32) NOT NULL,
    estado BOOLEAN NOT NULL DEFAULT TRUE,
    data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_aluno PRIMARY KEY (codigo),
    CONSTRAINT uq_aluno UNIQUE (nome),
    CONSTRAINT fk_alunoturma FOREIGN KEY (turma) REFERENCES turmas(codigo) ON DELETE CASCADE
);