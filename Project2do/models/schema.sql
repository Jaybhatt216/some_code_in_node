DROP DATABASE IF EXISTS project2do;
CREATE DATABASE project2do;

USE project2do;

DROP TABLE IF EXISTS users;

CREATE TABLE `project2do`.`users` (
  `idusers` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `acesstoken` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`));

  DROP TABLE IF EXISTS 2do;

CREATE TABLE `project2do`.`2do` (
  `idusers` INT NOT NULL,
  `to_do` VARCHAR(45) NOT NULL,
  `completed` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`));

  DROP TABLE IF EXISTS public;

CREATE TABLE `project2do`.`public` (
  `idusers` INT NOT NULL,
  `tasks` VARCHAR(45) NOT NULL,
  `projects` VARCHAR(45) NOT NULL,
  `completed` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`));

