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

 Date: 29/01/2018 15:06:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for notify
-- ----------------------------
DROP TABLE IF EXISTS `notify`;
CREATE TABLE `notify`  (
  `notify_id` int(1) NOT NULL AUTO_INCREMENT,
  `notify_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `notify_tokenkey` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`notify_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of notify
-- ----------------------------
INSERT INTO `notify` VALUES (1, 'hrd', NULL);
INSERT INTO `notify` VALUES (2, 'sscar', NULL);
INSERT INTO `notify` VALUES (3, 'ssconf', NULL);
INSERT INTO `notify` VALUES (4, 'maintenance', NULL);

SET FOREIGN_KEY_CHECKS = 1;
