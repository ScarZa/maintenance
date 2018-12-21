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

 Date: 08/03/2018 13:18:46
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
  `pd_id` int(7) DEFAULT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of dev_module
-- ----------------------------
INSERT INTO `dev_module` VALUES (1, 2, 'ข้อมูลบุคลากร');
INSERT INTO `dev_module` VALUES (2, 2, 'ข้อมูลการลา');
INSERT INTO `dev_module` VALUES (3, 2, 'ข้อมูลไปราชการ/อบรมภายนอก');
INSERT INTO `dev_module` VALUES (4, 2, 'อบรมภายใน');
INSERT INTO `dev_module` VALUES (5, 3, 'ห้องประชุม');
INSERT INTO `dev_module` VALUES (6, 3, 'รถยนต์');
INSERT INTO `dev_module` VALUES (7, 4, 'แจ้งซ่อม');
INSERT INTO `dev_module` VALUES (8, 4, 'บันทึกการซ่อม');
INSERT INTO `dev_module` VALUES (9, 4, 'ครุภัณฑ์');
INSERT INTO `dev_module` VALUES (10, 4, 'ผู้พัฒนา(Dev.)');

-- ----------------------------
-- Table structure for dev_program
-- ----------------------------
DROP TABLE IF EXISTS `dev_program`;
CREATE TABLE `dev_program`  (
  `pg_id` int(7) NOT NULL AUTO_INCREMENT,
  `pg_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dev_begin` date DEFAULT NULL,
  PRIMARY KEY (`pg_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of dev_program
-- ----------------------------
INSERT INTO `dev_program` VALUES (1, 'Hosxp', NULL);
INSERT INTO `dev_program` VALUES (2, 'HRD System', NULL);
INSERT INTO `dev_program` VALUES (3, 'Service&Support', NULL);
INSERT INTO `dev_program` VALUES (4, 'Maintenance System', '2017-10-01');

SET FOREIGN_KEY_CHECKS = 1;
