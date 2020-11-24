create database tarea3

create table DatosEstudiante (
id int primary key identity (1, 1),
nombre varchar(50),
carrera varchar(50)
)

insert into DatosEstudiante values ('maria', 'arquitectura')
insert into DatosEstudiante values ('samantha', 'diseño')
insert into DatosEstudiante values ('andrea', 'informatica')

select * from DatosEstudiante

create table Materias (
id int primary key identity (1, 1),
nombre varchar (50)
)

insert into Materias values ('filosofia')
insert into Materias values ('matematicas')
insert into Materias values ('historia de honduras')

select * from Materias

create table Estudiantes (
id int primary key identity (1, 1),
estudianteID int,
materiaId int,
nota float
)

insert into Estudiantes values (1, 2, 90)
insert into Estudiantes values (3, 1, 80)
insert into Estudiantes values (2, 3, 95)

select * from Estudiantes