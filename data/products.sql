CREATE TABLE `products` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(36) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(225) DEFAULT NULL,
  `img` varchar(225) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `productUser` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `products` (`id`, `userId`, `title`, `description`, `img`, `created`)
VALUES
	('1b9d3bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','rkst',NULL,NULL,'2020-09-22 02:53:35'),
	('2b9d6b4d-bbfd-4b2d-9b5d-ab8dfbbd4bed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','atwfp',NULL,NULL,'2020-09-22 02:53:35'),
	('3b9d6bcd-bbfd-4b2d-4b5d-ab8dfbbd4bed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','fdqwfp',NULL,NULL,'2020-09-21 04:29:01'),
	('4b9d6bcd-bbfd-4b2d-9b3d-ab8dfbbd4bed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','aataf',NULL,NULL,'2020-09-22 02:53:35'),
	('5b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed','060cdbc5-4986-47dd-8764-5db05b26167d','qwfpqwfpqpq',NULL,NULL,'2020-09-22 02:53:35'),
	('6b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd42ed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','afta',NULL,NULL,'2020-09-21 04:29:01'),
	('7b9d6bcd-bbfd-4b2d-9b2d-ab8dfbbd4bed','4e58e142-69fc-46e1-b6b5-e9f549f6aa0a','rst',NULL,NULL,'2020-09-21 04:26:24'),
	('8b9d6bcd-bbfd-4b1d-9b5d-ab8dfbbd4bed','060cdbc5-4986-47dd-8764-5db05b26167d','adahf44',NULL,NULL,'2020-09-21 04:08:09');

