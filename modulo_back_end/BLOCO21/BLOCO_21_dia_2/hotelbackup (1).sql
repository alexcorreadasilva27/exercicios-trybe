-- MySQL dump 10.13  Distrib 8.0.27, for Linux (x86_64)
--
-- Host: localhost    Database: hotel
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.21.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `Books`
--

LOCK TABLES `Books` WRITE;
/*!40000 ALTER TABLE `Books` DISABLE KEYS */;
INSERT INTO `Books` VALUES (1,'War and Peace','Leo Tolstoy'),(2,'The Brothers Karamazov','Fyodor Dostoyevsky'),(3,'Paradise Lost','John Milton'),(4,'Crime and Punishment','Fyodor Dostoyevsky'),(5,'Cousin Bette','Honore de Balzac'),(6,'Refactorign','Martin Fowler'),(7,'The Complete Software Developer’s Career Guide ','John Sonmez');
/*!40000 ALTER TABLE `Books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Books_Lent`
--

LOCK TABLES `Books_Lent` WRITE;
/*!40000 ALTER TABLE `Books_Lent` DISABLE KEYS */;
INSERT INTO `Books_Lent` VALUES (1,1,2,'2020-02-05 00:00:00',NULL,0),(2,2,2,'2020-02-05 16:17:39','2021-10-22 17:35:59',1),(3,3,2,'2020-02-05 16:17:39',NULL,0),(4,2,2,'2020-02-05 16:17:39','2021-10-22 17:35:59',1),(5,4,2,'2020-02-05 16:17:39','2021-10-22 17:35:59',1),(6,5,2,'2020-02-05 16:17:39',NULL,0),(7,4,2,'2020-02-05 16:17:39','2021-10-22 17:35:59',1);
/*!40000 ALTER TABLE `Books_Lent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `CarSales`
--

LOCK TABLES `CarSales` WRITE;
/*!40000 ALTER TABLE `CarSales` DISABLE KEYS */;
INSERT INTO `CarSales` VALUES (1,2),(2,2),(3,1),(4,4),(5,4);
/*!40000 ALTER TABLE `CarSales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Cars`
--

LOCK TABLES `Cars` WRITE;
/*!40000 ALTER TABLE `Cars` DISABLE KEYS */;
INSERT INTO `Cars` VALUES (1,'Audi',52642),(2,'Mercedes',57127),(3,'Skoda',9000),(4,'Volvo',29000),(5,'Bentley',350000),(6,'Citroen',21000),(7,'Hummer',41400),(8,'Volkswagen',21600);
/*!40000 ALTER TABLE `Cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Customers`
--

LOCK TABLES `Customers` WRITE;
/*!40000 ALTER TABLE `Customers` DISABLE KEYS */;
INSERT INTO `Customers` VALUES (1,'Paul Novak'),(2,'Terry Neils'),(3,'Jack Fonda'),(4,'Tom Willis');
/*!40000 ALTER TABLE `Customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Reservations`
--

LOCK TABLES `Reservations` WRITE;
/*!40000 ALTER TABLE `Reservations` DISABLE KEYS */;
INSERT INTO `Reservations` VALUES (1,1,'2009-11-22'),(2,2,'2009-11-28'),(3,2,'2009-11-29'),(4,1,'2009-11-29'),(5,3,'2009-12-02');
/*!40000 ALTER TABLE `Reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'hotel'
--

--
-- Dumping routines for database 'hotel'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-27 16:13:51
