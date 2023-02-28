/*
resilia=# insert into resilia(campus) values ('Irajá');
INSERT 0 1
resilia=# insert into resilia (campus) values ('Bonsucesso');
INSERT 0 1
resilia=# select * from resilia;
 id_resilia |   campus
------------+------------
          1 | Irajá
          2 | Bonsucesso
(2 rows)
resilia=# insert into turmas (qtd_alunos) values ('26');
INSERT 0 1
resilia=# insert into turmas (qtd_alunos) values ('45');
INSERT 0 1
resilia=# select * from turmas;
 id_turmas | qtd_alunos
-----------+------------
         1 |         26
         2 |         45
(2 rows)
resilia=# insert into alunos (nome, idade, rg) values ('Devair Martins', '29', '112223334');
INSERT 0 1
resilia=# insert into alunos (nome, idade, rg) values ('Isabela Alves', '26', '556667778');
INSERT 0 1
resilia=# select * from alunos;
 id_alunos |      nome        | idade |    rg
-----------+------------------+-------+-----------
         1 | Filipe Rodrigues |    26 | 112223334
         2 | Daniella Siqueira|    26 | 556667778
(2 rows)
resilia=# insert into cursos (nome, coordenador) values ('programação', 'Wagner');
INSERT 0 1
resilia=# insert into cursos (nome, coordenador) values ('ADM', 'Yuri');
INSERT 0 1
resilia=# select * from cursos;
 id_curso |    nome     | coordenador
----------+-------------+-------------
        1 | programação | Wagner
        2 | ADM         | Yuri
(2 rows)
*/
