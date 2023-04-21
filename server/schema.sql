CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    msg TEXT,
    roomname VARCHAR(20),
    campus VARCHAR(255),
    created_at VARCHAR(100),
    github_handle VARCHAR(40),
    updated_at VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(40)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

