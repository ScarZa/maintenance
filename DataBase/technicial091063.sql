/*
 Navicat Premium Data Transfer

 Source Server         : COM69
 Source Server Type    : MySQL
 Source Server Version : 100113
 Source Host           : localhost:3306
 Source Schema         : hrd

 Target Server Type    : MySQL
 Target Server Version : 100113
 File Encoding         : 65001

 Date: 09/10/2020 08:54:07
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_accessoriest
-- ----------------------------
DROP TABLE IF EXISTS `m_accessoriest`;
CREATE TABLE `m_accessoriest`  (
  `acc_id` int(7) NOT NULL AUTO_INCREMENT,
  `repairT_id` int(7) NOT NULL,
  `acc_part` int(4) NOT NULL,
  `acc_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `acc_price` decimal(10, 2) NOT NULL,
  PRIMARY KEY (`acc_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_repair_pdt
-- ----------------------------
DROP TABLE IF EXISTS `m_repair_pdt`;
CREATE TABLE `m_repair_pdt`  (
  `repairT_id` int(7) NOT NULL AUTO_INCREMENT,
  `informer` int(7) NOT NULL,
  `depid` int(7) NOT NULL,
  `repair_date` datetime(0) NOT NULL,
  `record_date` datetime(0) NOT NULL,
  `pd_id` int(7) DEFAULT NULL,
  `no_pdid` int(7) DEFAULT NULL,
  `request_data` int(7) DEFAULT NULL,
  `vital` int(1) NOT NULL,
  `repair_status` int(1) NOT NULL,
  `symptom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `repairer` int(7) DEFAULT NULL,
  `length` int(2) DEFAULT NULL,
  `receiver` int(7) DEFAULT NULL,
  `receive_date` datetime(0) DEFAULT NULL,
  `result` int(1) DEFAULT NULL,
  `accessories` int(1) DEFAULT NULL,
  `send_repair` int(1) DEFAULT NULL,
  `strepair_date` date DEFAULT NULL,
  `strepair_time` time(0) DEFAULT NULL,
  `enrepair_dare` date DEFAULT NULL,
  `enrepair_time` time(0) DEFAULT NULL,
  `rece_pd` int(7) DEFAULT NULL,
  `rece_pd_date` datetime(0) DEFAULT NULL,
  `cause` int(4) DEFAULT NULL,
  `repair_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `result_recorder` int(7) DEFAULT NULL,
  `result_recdate` datetime(0) DEFAULT NULL,
  `end_process` int(1) DEFAULT 0,
  PRIMARY KEY (`repairT_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for m_sendrept
-- ----------------------------
DROP TABLE IF EXISTS `m_sendrept`;
CREATE TABLE `m_sendrept`  (
  `send_id` int(7) NOT NULL AUTO_INCREMENT,
  `repairT_id` int(7) NOT NULL,
  `comp_id` int(7) NOT NULL,
  `send_date` date NOT NULL,
  `repair_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `acc_part` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `send_price` decimal(10, 2) DEFAULT NULL,
  `resend_date` date DEFAULT NULL,
  `resend_status` int(1) DEFAULT 0,
  PRIMARY KEY (`send_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for rept_history
-- ----------------------------
DROP TABLE IF EXISTS `rept_history`;
CREATE TABLE `rept_history`  (
  `rept_id` int(7) NOT NULL AUTO_INCREMENT,
  `dev_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dev_date` date NOT NULL,
  `developer` int(7) NOT NULL,
  `dev_stime` time(0) DEFAULT NULL,
  `dev_etime` time(0) DEFAULT NULL,
  `repairT_id` int(7) DEFAULT NULL,
  PRIMARY KEY (`rept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
