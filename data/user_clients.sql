CREATE TABLE `user_clients` (
  `userId` varchar(36) NOT NULL,
  `clientId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO `user_clients` (`userId`, `clientId`)
VALUES
	('060cdbc5-4986-47dd-8764-5db05b26167d',1),
	('47102956-68ae-458f-8599-db9586fef37b',2),
	('4e58e142-69fc-46e1-b6b5-e9f549f6aa0a',1),
	('4e58e142-69fc-46e1-b6b5-e9f549f6aa0a',2),
	('acd8488e-8410-4cd0-9179-ba03c2ef559b',1),
	('acd8488e-8410-4cd0-9179-ba03c2ef559b',2),
	('acd8488e-8410-4cd0-9179-ba03c2ef559b',3);
