
CREATE TABLE `orders` (
  `id` varchar(36) NOT NULL,
  `userId` varchar(36) NOT NULL,
  `productId` varchar(36) NOT NULL,
  `amount` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `created` (`created`),
  CONSTRAINT `orderUser` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderProduct` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `orders` (`id`, `userId`, `productId`, `amount`, `created`)
VALUES
	('2e10b962-4845-43ec-9756-4de621587a6f','acd8488e-8410-4cd0-9179-ba03c2ef559b','1b9d3bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',14,'2020-09-22 06:48:14'),
	('78581aad-d038-4bc3-a554-36cec4e51829','acd8488e-8410-4cd0-9179-ba03c2ef559b','3b9d6bcd-bbfd-4b2d-4b5d-ab8dfbbd4bed',2,'2020-09-22 06:48:00'),
	('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d','acd8488e-8410-4cd0-9179-ba03c2ef559b','7b9d6bcd-bbfd-4b2d-9b2d-ab8dfbbd4bed',7,'2020-09-22 02:40:45'),
	('cad7b2a1-8141-440c-8c24-04b8f7cdab0c','acd8488e-8410-4cd0-9179-ba03c2ef559b','4b9d6bcd-bbfd-4b2d-9b3d-ab8dfbbd4bed',13,'2020-09-22 06:48:06');

