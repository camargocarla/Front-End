-- Active: 1687634503231@@127.0.0.1@3306

CREATE DATABASE projeto DEFAULT CHARACTER SET = 'utf8mb4';

USE projeto;

CREATE TABLE
    pessoas(
        codigo INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(30),
        idade INT
    );

INSERT INTO pessoas (nome,idade) VALUES ('Alice', 33);

INSERT INTO
    pessoas (nome, idade)
VALUES ('Carla', 28), ('Ariane', 30), ('Danilo', 29), ('Henrique', 25);

SELECT * FROM pessoas;

SELECT nome, idade FROM pessoas;

SELECT nome, idade FROM pessoas ORDER BY nome DESC;

UPDATE pessoas SET nome = 'Caroline' WHERE codigo = 1;

DELETE FROM pessoas where codigo = 1;

DROP TABLE pessoas;