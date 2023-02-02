
USE `dbSM` ;
DROP TABLE IF EXISTS `dbSM`.`playlist` ;



DROP TABLE IF EXISTS `dbSM`.`music` ;

CREATE TABLE IF NOT EXISTS `dbSM`.`music` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Titre` VARCHAR(45) NULL,
  `mp3_file` LONGBLOB NOT NULL,
  `Genre` VARCHAR(45) NULL,
  `Artiste` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));





INSERT INTO music (Titre, mp3_file, Genre, Artiste) VALUES 

  ("GooseBumps",'../Musique/Travis Scott - goosebumps ft. Kendrick Lamar.mp3', "Rap", "Travis Scott");
