CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `firstName` varchar(255),
  `lastName` varchar(255) DEFAULT NULL,
  `lastActive` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `users` (`id`, `firstName`, `lastName`, `lastActive`, `created`)
VALUES
	('060cdbc5-4986-47dd-8764-5db05b26167d','Bob',NULL,'2020-09-22 08:27:34','2020-09-22 08:27:34'),
	('47102956-68ae-458f-8599-db9586fef37b','Jimmy',NULL,'2020-09-22 08:27:34','2020-09-22 08:27:34'),
	('4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','Sam',NULL,'2020-09-22 08:27:34','2020-09-22 08:27:34'),
	('acd8488e-8410-4cd0-9179-ba03c2ef559b','Matt','Skinner','2020-09-22 08:27:34','2020-09-22 08:27:34');

