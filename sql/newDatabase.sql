DROP DATABASE IF EXISTS db_financas;
CREATE DATABASE db_financas;
USE db_financas;
DROP TABLE IF EXISTS entrada;
CREATE TABLE entrada(
    id INT AUTO_INCREMENT,
    origem VARCHAR(255) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    data_entrada DATE NOT NULL,
    CONSTRAINT pk_entrada PRIMARY KEY(id)    
);

DROP TABLE IF EXISTS saida;
CREATE TABLE saida(
    id INT AUTO_INCREMENT,
    destino VARCHAR(255) NOT NULL,
    valor NUMERIC(10, 2) NOT NULL,
    data_saida DATE NOT NULL,
    CONSTRAINT pk_saida PRIMARY KEY(id)    
);
