-- DELETES "uci_project2_group4" database --
DROP DATABASE IF EXISTS uci_project2_group4;
-- Creates "uci_project2_group4" database --
CREATE DATABASE uci_project2_group4;


-- Connects to (opens) "uci_project2_group4" database... --
\c uci_project2_group4;


-- DELETES "users" table --
DROP TABLE IF EXISTS users;
-- Creates "users" table --
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data into "users" table --
INSERT INTO
    users (username, password, first_name, last_name, email)
VALUES
    ('blee', 'mypass123', 'Brian', 'Petros', 'bleepetros@gmail.com'),
    ('jdoe', 'pass455', 'John', 'Doe', 'em@aol.com'),
    ('ufox', 'gdg4123', 'Uname', 'Fox', 'em@yahoo.com'),
    ('kbye', 'vnxf4684', 'Kim', 'Bye', 'em@future.com'),
    ('bpetro', 'Idon''tknow123', 'Brian', 'Petros', 'brianpetros@gmail.com');

-- SELECT * FROM "users" table --
-- SELECT * FROM
--     users;
-- List columns in "users" table --
\d+ users


-- DELETES "user_search" table --
DROP TABLE IF EXISTS user_search;
-- Creates "user_search" table --
CREATE TABLE user_search (
    id SERIAL PRIMARY KEY,
    foriegn_key INTEGER NOT NULL,
    search_term VARCHAR(255) NOT NULL,
    search_results VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data into "user_search" table --


-- List columns in "user_search" table --
\d+ user_search


-- DELETES "user_favs" table --
DROP TABLE IF EXISTS user_favs;
-- Creates "user_favs" table --
CREATE TABLE user_favs (
    id SERIAL PRIMARY KEY,
    foriegn_key INTEGER NOT NULL,
    fav_code VARCHAR(255) NOT NULL,
    fav_title VARCHAR(255) NOT NULL,
    fav_description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data into "user_favs" table --


-- List columns in "user_favs" table --
\d+ user_favs


-- Lists all tables in the "uci_project2_group4" database --
\dt+


-- Closes the connection to the "uci_project2_group4" database --
\c postgres;
