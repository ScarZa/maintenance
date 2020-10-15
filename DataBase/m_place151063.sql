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

 Date: 15/10/2020 15:41:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_place
-- ----------------------------
DROP TABLE IF EXISTS `m_place`;
CREATE TABLE `m_place`  (
  `place_id` int(2) NOT NULL AUTO_INCREMENT,
  `place_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`place_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_place
-- ----------------------------
INSERT INTO `m_place` VALUES (1, 'อาคารอำนวยการ');
INSERT INTO `m_place` VALUES (2, 'อาคาร 5 ชั้น');
INSERT INTO `m_place` VALUES (3, 'ตึกราชาวดี');
INSERT INTO `m_place` VALUES (4, 'อาคารโภชนาการ');
INSERT INTO `m_place` VALUES (5, 'บริเวณบ้านพัก');
INSERT INTO `m_place` VALUES (6, 'บริเวณภายในโรงพยาบาล');
INSERT INTO `m_place` VALUES (7, 'อาคารอื่นๆ');

SET FOREIGN_KEY_CHECKS = 1;
