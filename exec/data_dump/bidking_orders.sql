-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: i9a706.p.ssafy.io    Database: bidking
-- ------------------------------------------------------
-- Server version	8.0.34-0ubuntu0.20.04.1

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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_state` varchar(20) NOT NULL DEFAULT 'PAYMENT_WAITING',
  `auction_room_id` bigint NOT NULL,
  `delivery_id` bigint DEFAULT NULL,
  `orderer_id` bigint DEFAULT NULL,
  `seller_id` bigint NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `idx__order_state__orderer_id__seller_id` (`order_state`,`orderer_id`,`seller_id`),
  KEY `FKpf3gn22995wyw7s004f19prkn` (`auction_room_id`),
  KEY `FKtkrur7wg4d8ax0pwgo0vmy20c` (`delivery_id`),
  KEY `FKn7utyv8a953cnex3o1dhh9gg5` (`orderer_id`),
  KEY `FKkdvqh9s0gac322c4gtabpq8r8` (`seller_id`),
  CONSTRAINT `FKkdvqh9s0gac322c4gtabpq8r8` FOREIGN KEY (`seller_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKn7utyv8a953cnex3o1dhh9gg5` FOREIGN KEY (`orderer_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `FKpf3gn22995wyw7s004f19prkn` FOREIGN KEY (`auction_room_id`) REFERENCES `auction_room` (`auction_room_id`),
  CONSTRAINT `FKtkrur7wg4d8ax0pwgo0vmy20c` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`delivery_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2023-08-17 05:44:05','2023-08-17 05:44:05','PAYMENT_WAITING',1,NULL,3,2),(2,'2023-08-17 05:44:05','2023-08-17 05:44:05','PAYMENT_WAITING',1,NULL,4,2),(3,'2023-08-17 05:44:05','2023-08-17 05:44:05','PAYMENT_WAITING',1,NULL,1,2),(5,'2023-08-17 05:50:37','2023-08-17 05:50:37','PAYMENT_WAITING',2,NULL,3,4),(6,'2023-08-17 05:50:37','2023-08-17 05:50:37','ORDER_FAILED',2,NULL,NULL,4),(7,'2023-08-17 05:50:37','2023-08-17 05:50:37','PAYMENT_WAITING',2,NULL,3,4),(8,'2023-08-17 06:08:25','2023-08-17 06:08:25','ORDER_FAILED',3,NULL,NULL,1),(9,'2023-08-17 06:08:25','2023-08-17 06:08:25','ORDER_FAILED',3,NULL,NULL,1),(10,'2023-08-17 06:10:58','2023-08-17 06:10:58','ORDER_FAILED',7,NULL,NULL,5),(13,'2023-08-17 06:21:44','2023-08-17 06:21:44','PAYMENT_WAITING',4,NULL,2,3),(14,'2023-08-17 06:21:44','2023-08-17 06:21:44','PAYMENT_WAITING',4,NULL,6,3),(16,'2023-08-17 06:44:10','2023-08-17 06:44:10','PAYMENT_WAITING',8,NULL,5,4),(17,'2023-08-17 06:44:10','2023-08-17 06:44:10','PAYMENT_WAITING',8,NULL,5,4),(19,'2023-08-17 07:43:27','2023-08-17 07:43:27','ORDER_FAILED',9,NULL,NULL,1),(20,'2023-08-17 07:43:27','2023-08-17 07:43:27','ORDER_FAILED',9,NULL,NULL,1),(21,'2023-08-17 07:45:01','2023-08-17 07:45:01','ORDER_FAILED',10,NULL,NULL,1),(22,'2023-08-17 09:16:09','2023-08-17 09:16:09','ORDER_FAILED',12,NULL,NULL,4),(23,'2023-08-17 10:35:44','2023-08-17 10:35:44','PAYMENT_WAITING',14,NULL,5,4),(24,'2023-08-17 10:35:44','2023-08-17 10:35:44','ORDER_FAILED',14,NULL,NULL,4),(25,'2023-08-17 10:35:44','2023-08-17 10:35:44','ORDER_FAILED',14,NULL,NULL,4),(26,'2023-08-17 14:28:13','2023-08-17 14:28:13','ORDER_FAILED',18,NULL,NULL,4),(27,'2023-08-17 14:28:13','2023-08-17 14:28:13','ORDER_FAILED',18,NULL,NULL,4),(28,'2023-08-17 14:28:13','2023-08-17 14:28:13','ORDER_FAILED',18,NULL,NULL,4),(29,'2023-08-17 17:27:41','2023-08-17 17:27:41','PAYMENT_WAITING',20,NULL,3,2),(30,'2023-08-17 17:27:41','2023-08-17 17:27:41','ORDER_FAILED',20,NULL,NULL,2),(32,'2023-08-17 17:33:28','2023-08-17 17:33:28','PAYMENT_WAITING',21,NULL,3,2),(33,'2023-08-17 17:33:28','2023-08-17 17:33:28','ORDER_FAILED',21,NULL,NULL,2),(34,'2023-08-17 17:33:28','2023-08-17 17:33:28','PAYMENT_WAITING',21,NULL,3,2),(36,'2023-08-17 18:13:02','2023-08-17 18:13:02','ORDER_FAILED',6,NULL,NULL,2),(37,'2023-08-17 18:13:02','2023-08-17 18:13:02','ORDER_FAILED',6,NULL,NULL,2),(38,'2023-08-17 18:13:02','2023-08-17 18:13:02','ORDER_FAILED',6,NULL,NULL,2),(39,'2023-08-17 18:17:35','2023-08-17 18:17:35','ORDER_FAILED',22,NULL,NULL,2),(40,'2023-08-17 18:18:57','2023-08-17 18:18:57','ORDER_FAILED',23,NULL,NULL,2),(41,'2023-08-17 18:21:26','2023-08-17 18:21:26','ORDER_FAILED',24,NULL,NULL,2),(42,'2023-08-17 18:35:49','2023-08-17 18:35:49','PAYMENT_WAITING',25,NULL,5,2),(43,'2023-08-17 18:35:49','2023-08-17 18:35:49','PAYMENT_WAITING',25,NULL,3,2),(44,'2023-08-17 18:35:49','2023-08-17 18:35:49','PAYMENT_WAITING',25,NULL,5,2),(45,'2023-08-17 18:35:49','2023-08-17 18:35:49','ORDER_FAILED',25,NULL,NULL,2),(47,'2023-08-17 18:48:08','2023-08-17 18:48:08','PAYMENT_WAITING',26,NULL,5,2),(48,'2023-08-17 18:48:08','2023-08-17 18:48:08','PAYMENT_WAITING',26,NULL,3,2),(49,'2023-08-17 18:48:08','2023-08-17 18:48:08','PAYMENT_WAITING',26,NULL,3,2),(50,'2023-08-17 18:48:08','2023-08-17 18:48:08','ORDER_FAILED',26,NULL,NULL,2),(52,'2023-08-17 19:04:04','2023-08-17 19:04:04','PAYMENT_WAITING',27,NULL,8,9),(53,'2023-08-17 19:04:04','2023-08-17 19:04:04','PAYMENT_WAITING',27,NULL,8,9),(54,'2023-08-17 19:04:04','2023-08-17 19:04:04','PAYMENT_WAITING',27,NULL,10,9),(55,'2023-08-17 19:04:04','2023-08-17 19:04:04','ORDER_FAILED',27,NULL,NULL,9),(57,'2023-08-18 00:11:53','2023-08-18 00:11:53','PAYMENT_WAITING',28,NULL,4,2),(58,'2023-08-18 00:11:53','2023-08-18 00:11:53','PAYMENT_WAITING',28,NULL,4,2),(59,'2023-08-18 00:11:53','2023-08-18 00:11:53','ORDER_FAILED',28,NULL,NULL,2),(60,'2023-08-18 00:11:53','2023-08-18 00:11:53','PAYMENT_WAITING',28,NULL,4,2),(61,'2023-08-18 00:36:52','2023-08-18 00:36:52','PAYMENT_WAITING',29,NULL,4,2),(62,'2023-08-18 00:36:52','2023-08-18 00:36:52','PAYMENT_WAITING',29,NULL,4,2),(63,'2023-08-18 00:36:52','2023-08-18 00:36:52','PAYMENT_WAITING',29,NULL,4,2),(64,'2023-08-18 00:36:52','2023-08-18 00:36:52','ORDER_FAILED',29,NULL,NULL,2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 11:46:21
