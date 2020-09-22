CREATE TABLE `clients` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `clients` (`id`, `name`, `title`)
VALUES
	(1,'transaction_system','Transactr'),
	(2,'auditing_system','Auditr'),
	(3,'user_management_system','Registr');