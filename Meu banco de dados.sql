CREATE TABLE [Cursos] (
  [curso_id] int,
  [turmas_id] int,
  [nome_curso] nvarchar(255),
  [professor_id] int,
  [disciplina] nvarchar(255),
  [tempo_de_duracao] nvarchar(255),
  [preco] nvarchar(255),
  PRIMARY KEY ([curso_id], [turmas_id])
)
GO

CREATE TABLE [Turmas] (
  [turma_id] int,
  [aluno_id] int,
  [professor_id] int,
  [turno] nvarchar(255)
)
GO

CREATE TABLE [Professores] (
  [professor_id] int PRIMARY KEY,
  [nome] nvarchar(255),
  [email] nvarchar(255),
  [cpf] varchar(11),
  [telefone] varchar(11)
)
GO

CREATE TABLE [curso_aluno] (
  [curso_id] int,
  [aluno_id] int,
  [frequencia] nvarchar(255),
  [data_de_inicio] date
)
GO

CREATE TABLE [Alunos] (
  [aluno_id] int PRIMARY KEY,
  [nome] nvarchar(255),
  [data_de_nascimento] date,
  [email] nvarchar(255),
  [cpf] varchar(11),
  [telefone] varchar(11)
)
GO

ALTER TABLE [Turmas] ADD FOREIGN KEY ([turma_id]) REFERENCES [Cursos] ([turmas_id])
GO

ALTER TABLE [Turmas] ADD FOREIGN KEY ([professor_id]) REFERENCES [Professores] ([professor_id])
GO

ALTER TABLE [Cursos] ADD FOREIGN KEY ([professor_id]) REFERENCES [Professores] ([professor_id])
GO

ALTER TABLE [curso_aluno] ADD FOREIGN KEY ([curso_id]) REFERENCES [Cursos] ([curso_id])
GO

ALTER TABLE [curso_aluno] ADD FOREIGN KEY ([curso_id]) REFERENCES [Alunos] ([aluno_id])
GO

ALTER TABLE [Turmas] ADD FOREIGN KEY ([aluno_id]) REFERENCES [Alunos] ([aluno_id])
GO
