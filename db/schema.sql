-- DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    burger_name VARCHAR (60),
    devoured BOOLEAN
);

SELECT * FROM burgers;
