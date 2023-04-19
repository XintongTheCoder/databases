CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    id INT,
    msg TEXT,
    roomname VARCHAR(255),
    campus VARCHAR(255),
    created_at VARCHAR(255),
    github_handle VARCHAR(255),
    updated_at VARCHAR(255),
    user_id INT
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT,
  username VARCHAR(255)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

