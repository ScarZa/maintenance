/*
 Navicat Premium Data Transfer

 Source Server         : ScarZ
 Source Server Type    : MySQL
 Source Server Version : 100113
 Source Host           : localhost:3306
 Source Schema         : hrd

 Target Server Type    : MySQL
 Target Server Version : 100113
 File Encoding         : 65001

 Date: 09/03/2018 15:45:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dev_history
-- ----------------------------
DROP TABLE IF EXISTS `dev_history`;
CREATE TABLE `dev_history`  (
  `dev_id` int(7) NOT NULL AUTO_INCREMENT,
  `module_id` int(7) NOT NULL,
  `dev_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dev_date` date NOT NULL,
  `developer` int(7) NOT NULL,
  `dev_stime` time(0) DEFAULT NULL,
  `dev_etime` time(0) DEFAULT NULL,
  `repair_id` int(7) DEFAULT NULL,
  PRIMARY KEY (`dev_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for dev_module
-- ----------------------------
DROP TABLE IF EXISTS `dev_module`;
CREATE TABLE `dev_module`  (
  `module_id` int(7) NOT NULL AUTO_INCREMENT,
  `pg_id` int(7) NOT NULL,
  `module_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`module_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for dev_program
-- ----------------------------
DROP TABLE IF EXISTS `dev_program`;
CREATE TABLE `dev_program`  (
  `pg_id` int(7) NOT NULL AUTO_INCREMENT,
  `pg_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dev_begin` date DEFAULT NULL,
  PRIMARY KEY (`pg_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
