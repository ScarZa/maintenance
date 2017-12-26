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

 Date: 26/12/2017 15:39:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_acc_part
-- ----------------------------
DROP TABLE IF EXISTS `m_acc_part`;
CREATE TABLE `m_acc_part`  (
  `accp_id` int(4) NOT NULL AUTO_INCREMENT,
  `accp_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`accp_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_acc_part
-- ----------------------------
INSERT INTO `m_acc_part` VALUES (1, 'harddisk');
INSERT INTO `m_acc_part` VALUES (2, 'ram');
INSERT INTO `m_acc_part` VALUES (3, 'bios battery');
INSERT INTO `m_acc_part` VALUES (4, 'power supply');
INSERT INTO `m_acc_part` VALUES (5, 'mainboard');
INSERT INTO `m_acc_part` VALUES (6, 'CPU');
INSERT INTO `m_acc_part` VALUES (7, 'mouse');
INSERT INTO `m_acc_part` VALUES (8, 'keyboard');
INSERT INTO `m_acc_part` VALUES (9, 'UPS battery');

-- ----------------------------
-- Table structure for m_accessories
-- ----------------------------
DROP TABLE IF EXISTS `m_accessories`;
CREATE TABLE `m_accessories`  (
  `acc_id` int(7) NOT NULL AUTO_INCREMENT,
  `repair_id` int(7) NOT NULL,
  `acc_part` int(4) NOT NULL,
  `acc_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `acc_price` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`acc_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_repair_pd
-- ----------------------------
DROP TABLE IF EXISTS `m_repair_pd`;
CREATE TABLE `m_repair_pd`  (
  `repair_id` int(7) NOT NULL AUTO_INCREMENT,
  `informer` int(7) NOT NULL,
  `repair_date` datetime(0) NOT NULL,
  `record_date` datetime(0) NOT NULL,
  `pd_id` int(7) DEFAULT NULL,
  `vital` int(1) NOT NULL,
  `repair_status` int(1) NOT NULL,
  `symptom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `repairer` int(7) DEFAULT NULL,
  `receiver` int(7) DEFAULT NULL,
  `receive_date` datetime(0) DEFAULT NULL,
  `result` int(1) DEFAULT NULL,
  `accessories` int(1) DEFAULT NULL,
  `send_repair` int(1) DEFAULT NULL,
  `strepair_date` date DEFAULT NULL,
  `enrepair_dare` date DEFAULT NULL,
  `rece_pd` int(7) DEFAULT NULL,
  `rece_pd_date` datetime(0) DEFAULT NULL,
  `cause` int(4) DEFAULT NULL,
  `repair_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `result_recorder` int(7) DEFAULT NULL,
  `result_recdate` datetime(0) DEFAULT NULL,
  `end_process` int(1) DEFAULT 0,
  PRIMARY KEY (`repair_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_sendrep
-- ----------------------------
DROP TABLE IF EXISTS `m_sendrep`;
CREATE TABLE `m_sendrep`  (
  `send_id` int(7) NOT NULL AUTO_INCREMENT,
  `repair_id` int(7) NOT NULL,
  `comp_id` int(7) NOT NULL,
  `send_date` date NOT NULL,
  `repair_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `send_price` decimal(10, 2) DEFAULT NULL,
  `resend_date` date DEFAULT NULL,
  `resend_status` int(1) DEFAULT 0,
  PRIMARY KEY (`send_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_symmptom_category
-- ----------------------------
DROP TABLE IF EXISTS `m_symmptom_category`;
CREATE TABLE `m_symmptom_category`  (
  `symmptom_cid` int(5) NOT NULL AUTO_INCREMENT,
  `symmptom_gid` int(3) NOT NULL,
  `symmptom_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`symmptom_cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_symmptom_category
-- ----------------------------
INSERT INTO `m_symmptom_category` VALUES (1, 1, 'comp : harddisk error');
INSERT INTO `m_symmptom_category` VALUES (2, 1, 'comp : ram error');
INSERT INTO `m_symmptom_category` VALUES (3, 1, 'comp : mainboard error');
INSERT INTO `m_symmptom_category` VALUES (4, 1, 'comp : supply error');
INSERT INTO `m_symmptom_category` VALUES (5, 2, 'Hosxp error');
INSERT INTO `m_symmptom_category` VALUES (6, 2, 'Program HRD&SS error');
INSERT INTO `m_symmptom_category` VALUES (7, 2, 'Windows error');
INSERT INTO `m_symmptom_category` VALUES (8, 2, 'driver error');
INSERT INTO `m_symmptom_category` VALUES (9, 2, 'virus');
INSERT INTO `m_symmptom_category` VALUES (10, 3, 'user ใช้งานไม่เป็น');

-- ----------------------------
-- Table structure for m_symptom_group
-- ----------------------------
DROP TABLE IF EXISTS `m_symptom_group`;
CREATE TABLE `m_symptom_group`  (
  `symp_gid` int(3) NOT NULL AUTO_INCREMENT,
  `symp_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`symp_gid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_symptom_group
-- ----------------------------
INSERT INTO `m_symptom_group` VALUES (1, 'อุปกรณ์ (hardware)');
INSERT INTO `m_symptom_group` VALUES (2, 'โปรแกรม (software)');
INSERT INTO `m_symptom_group` VALUES (3, 'ผู้ใช้ (peopleware)');

SET FOREIGN_KEY_CHECKS = 1;
