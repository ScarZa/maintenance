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

 Date: 03/01/2018 15:09:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for m_no_pd
-- ----------------------------
DROP TABLE IF EXISTS `m_no_pd`;
CREATE TABLE `m_no_pd`  (
  `no_pdid` int(7) NOT NULL AUTO_INCREMENT,
  `no_pdtype` int(1) NOT NULL,
  `no_pdname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`no_pdid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of m_no_pd
-- ----------------------------
INSERT INTO `m_no_pd` VALUES (1, 1, 'เดินสายแลน');
INSERT INTO `m_no_pd` VALUES (2, 1, 'ระบบเครือข่ายมีปัญหา(network error)');
INSERT INTO `m_no_pd` VALUES (3, 1, 'ระบบHosxpมีปัญหา(Hosxp error)');
INSERT INTO `m_no_pd` VALUES (4, 2, 'ขอข้อมูล Hosxp');
INSERT INTO `m_no_pd` VALUES (5, 2, 'ขอข้อมูลในรูปแบบรายงาน/แก้ไขฟอร์ม(Hosxp)');
INSERT INTO `m_no_pd` VALUES (6, 2, 'ขอข้อมูลในรูปแบบรายงาน/แก้ไขฟอร์ม(โปรแกรมอื่นๆ)');
INSERT INTO `m_no_pd` VALUES (7, 2, 'ขอพัฒนาโปรแกรม');

SET FOREIGN_KEY_CHECKS = 1;
