CREATE DATABASE friendFind;
USE friendFind;


CREATE TABLE userData(
id Int( 100 ) AUTO_INCREMENT NOT NULL,
routeName VARCHAR( 255) NOT NULL,
name VARCHAR( 255 ) NOT NULL,
age Int(11) NOT NULL,
interestedIn VARCHAR( 255 ) NOT NULL,
region VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);