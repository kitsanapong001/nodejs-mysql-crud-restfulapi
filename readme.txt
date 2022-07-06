ติดตั้ง nodejs โดยโหลดที่หน้าเว็บไซด์

npm install express body-parser nodemon mysql2 cors

CREATE TABLE IF NOT EXISTS `users` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  firstname varchar(255),
	lastname varchar(255),
	phonenumber varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;