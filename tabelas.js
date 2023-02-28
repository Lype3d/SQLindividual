/*postgres=# create database resilia;
CREATE DATABASE
postgres=# \c resilia
You are now connected to database "resilia" as user "postgres".
resilia=# \d resilia
Did not find any relation named "resilia".
resilia=# create table resilia(
resilia(# id_resilia serial primary key,
resilia(# campus varchar(20) not null
resilia(# );
CREATE TABLE
resilia=# create table Cursos(
resilia(# id_curso serial primary key,
resilia(# nome varchar(20) not null,
resilia(# coordenador varchar(20) not null
resilia(# );
CREATE TABLE
resilia=# create table Turmas(
resilia(# id_turmas serial primary key,
resilia(# qtd_alunos int
resilia(# );
CREATE TABLE
resilia=# create table Alunos(
resilia(# id_alunos serial primary key,
resilia(# nome varchar(30) not null,
resilia(# idade int not null,
resilia(# rg varchar(11) not null
resilia(# );
CREATE TABLE
resilia=# \d
                   List of relations
 Schema |          Name          |   Type   |  Owner
--------+------------------------+----------+----------
 public | alunos                 | table    | postgres
 public | alunos_id_alunos_seq   | sequence | postgres
 public | cursos                 | table    | postgres
 public | cursos_id_curso_seq    | sequence | postgres
 public | resilia                | table    | postgres
 public | resilia_id_resilia_seq | sequence | postgres
 public | turmas                 | table    | postgres
 public | turmas_id_turmas_seq   | sequence | postgres
(8 rows)
resilia=# \d alunos
                                        Table "public.alunos"
  Column   |         Type          | Collation | Nullable |                  Default
-----------+-----------------------+-----------+----------+-------------------------------------------
 id_alunos | integer               |           | not null | nextval('alunos_id_alunos_seq'::regclass)
 nome      | character varying(30) |           | not null |
 idade     | integer               |           | not null |
 rg        | character varying(11) |           | not null |
Indexes:
    "alunos_pkey" PRIMARY KEY, btree (id_alunos)
resilia=# \d resilia
                                         Table "public.resilia"
   Column   |         Type          | Collation | Nullable |                   Default
------------+-----------------------+-----------+----------+---------------------------------------------
 id_resilia | integer               |           | not null | nextval('resilia_id_resilia_seq'::regclass)
 campus     | character varying(20) |           | not null |
Indexes:
    "resilia_pkey" PRIMARY KEY, btree (id_resilia)
resilia=# \d cursos
                                         Table "public.cursos"
   Column    |         Type          | Collation | Nullable |                 Default
-------------+-----------------------+-----------+----------+------------------------------------------
 id_curso    | integer               |           | not null | nextval('cursos_id_curso_seq'::regclass)
 nome        | character varying(20) |           | not null |
 coordenador | character varying(20) |           | not null |
Indexes:
    "cursos_pkey" PRIMARY KEY, btree (id_curso)
resilia=# \d turmas
                                  Table "public.turmas"
   Column   |  Type   | Collation | Nullable |                  Default
------------+---------+-----------+----------+-------------------------------------------
 id_turmas  | integer |           | not null | nextval('turmas_id_turmas_seq'::regclass)
 qtd_alunos | integer |           |          |
Indexes:
    "turmas_pkey" PRIMARY KEY, btree (id_turmas)*/
