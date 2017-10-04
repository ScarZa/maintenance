/*
 Navicat Premium Data Transfer

 Source Server         : scarz
 Source Server Type    : MySQL
 Source Server Version : 100113
 Source Host           : localhost:3306
 Source Schema         : hrd

 Target Server Type    : MySQL
 Target Server Version : 100113
 File Encoding         : 65001

 Date: 04/10/2017 09:19:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mn_change_part
-- ----------------------------
DROP TABLE IF EXISTS `mn_change_part`;
CREATE TABLE `mn_change_part`  (
  `change_pard_id` int(9) NOT NULL AUTO_INCREMENT,
  `part_id` int(3) NOT NULL,
  `part_price` int(5) NOT NULL,
  `change_date` datetime(0) DEFAULT NULL,
  PRIMARY KEY (`change_pard_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for mn_maintenance
-- ----------------------------
DROP TABLE IF EXISTS `mn_maintenance`;
CREATE TABLE `mn_maintenance`  (
  `maintenance_id` int(9) NOT NULL AUTO_INCREMENT,
  `pd_id` int(7) NOT NULL,
  `date_repair` datetime(0) NOT NULL,
  `date_repaircp` datetime(0) DEFAULT NULL,
  `symptom` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `howrepair` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `repairer` int(7) DEFAULT NULL,
  `informre_repair` int(7) NOT NULL,
  `dateinform` datetime(0) NOT NULL,
  `repair_time` int(3) DEFAULT NULL,
  `cause_nrepair` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `repaiv_status` int(1) DEFAULT NULL,
  `chanqe_part_id` int(9) DEFAULT NULL,
  PRIMARY KEY (`maintenance_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for mn_parts
-- ----------------------------
DROP TABLE IF EXISTS `mn_parts`;
CREATE TABLE `mn_parts`  (
  `part_id` int(3) NOT NULL AUTO_INCREMENT,
  `part_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`part_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for pd_category
-- ----------------------------
DROP TABLE IF EXISTS `pd_category`;
CREATE TABLE `pd_category`  (
  `category_id` int(2) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `group_id` int(2) NOT NULL,
  `category_no` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_category
-- ----------------------------
INSERT INTO `pd_category` VALUES (1, 'เครื่องไมโครคอมพิวเตอร์', 10, '7140-001-0001');
INSERT INTO `pd_category` VALUES (2, 'เครื่องถ่ายทอดสัญญาณจากคอมพิวเตอร์', 10, '6730-007-0001');
INSERT INTO `pd_category` VALUES (3, 'โมเด็ม', 10, '7140-004-0001');
INSERT INTO `pd_category` VALUES (4, 'เครื่องพิมพ์คอมพิวเตอร์ (เลเซอร์)', 10, '7140-002-0001');
INSERT INTO `pd_category` VALUES (5, 'เครื่องพิมพ์คอมพิวเตอร์ (แบบเข็ม) ', 10, '7140-002-0002');
INSERT INTO `pd_category` VALUES (6, 'เครื่องพิมฑ์คอมพิวเตอร์ (แบบพ่น)', 10, '7140-002-0003');
INSERT INTO `pd_category` VALUES (7, 'เครื่องสแกนเนอร์', 10, '7440-010-0001');
INSERT INTO `pd_category` VALUES (8, 'เครื่องควบคุมและสำรองไฟ', 10, '7140-003-0001');
INSERT INTO `pd_category` VALUES (9, 'เครื่องเขียน ซีดี', 10, '7450-001-0001');
INSERT INTO `pd_category` VALUES (10, 'ระบบซอฟแวร์พัฒนาระบบสารนเทศ', 10, '7740-010-0001');
INSERT INTO `pd_category` VALUES (11, 'เครื่องอ่านบาร์โค้ตมือถือ', 10, '7410-003-0001');
INSERT INTO `pd_category` VALUES (12, 'จอภาพ LCDขนาด 17 นิ้ว', 10, '7140-001-0002');
INSERT INTO `pd_category` VALUES (13, 'เครื่องสแกนลายนิ้วมือ', 10, '7440-002-0001');
INSERT INTO `pd_category` VALUES (14, 'จอคอมพิวเตอร์', 10, '6730-002-0001');
INSERT INTO `pd_category` VALUES (15, 'เครื่องพิมพ์multifunct ชนิดเลเซอร์/ชนิด LED', 10, '7140-002-0004');
INSERT INTO `pd_category` VALUES (16, 'เครื่องพิมพ์กระดาษต่อเนื่องชนิดความร้อน', 10, '7140-002-0005');
INSERT INTO `pd_category` VALUES (17, 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ค', 10, '7440-002-0001');
INSERT INTO `pd_category` VALUES (18, 'เครื่องพิมพ์multifunctแบบฉีดหมึก<inkjet>', 10, '7140-002-0006');
INSERT INTO `pd_category` VALUES (19, 'ชนิดพกพา ipad', 10, '7440-001-0003');
INSERT INTO `pd_category` VALUES (20, 'เครื่องควบคุมและสำรองไฟ', 10, '7440-003-0001');
INSERT INTO `pd_category` VALUES (21, 'เครื่องพิมพ์multifunction ชนิดเลเซอร์/LED', 10, '7140-002-0004');
INSERT INTO `pd_category` VALUES (22, 'ตู้สำหรับจักเก็บเครื่องคอมพิวเตอร์', 10, '7125-002-0003');
INSERT INTO `pd_category` VALUES (23, 'เครื่องพิมพ์บาร์โค้ด', 10, '7140-002-0007');
INSERT INTO `pd_category` VALUES (24, 'เครื่องพิมพ์บาร์โค้ด', 10, '7140-002-0007');

-- ----------------------------
-- Table structure for pd_group
-- ----------------------------
DROP TABLE IF EXISTS `pd_group`;
CREATE TABLE `pd_group`  (
  `group_id` int(3) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `group_age` int(3) DEFAULT NULL,
  PRIMARY KEY (`group_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_group
-- ----------------------------
INSERT INTO `pd_group` VALUES (1, 'สิ่งปลูกสร้าง', 25);
INSERT INTO `pd_group` VALUES (2, 'ครุภัณฑ์สำนักงาน', 12);
INSERT INTO `pd_group` VALUES (3, 'ครุภัณฑ์ยานพาหนะ', 30);
INSERT INTO `pd_group` VALUES (4, 'ครุภัณฑ์ไฟฟ้า', 20);
INSERT INTO `pd_group` VALUES (5, 'ครุภัณฑ์โฆษณา', 10);
INSERT INTO `pd_group` VALUES (6, 'ครุภัณฑ์การเกษตร', 10);
INSERT INTO `pd_group` VALUES (7, 'ครุภัณฑ์โรงงาน', 10);
INSERT INTO `pd_group` VALUES (8, 'ครุภัณฑ์ก่อสร้าง', 10);
INSERT INTO `pd_group` VALUES (9, 'ครุภัณฑ์วิทยาศาสตร์', 15);
INSERT INTO `pd_group` VALUES (10, 'ครุภัณฑ์คอมพิวเตอร์', 5);
INSERT INTO `pd_group` VALUES (11, 'ครุภัณฑ์งานบ้าน', 5);
INSERT INTO `pd_group` VALUES (12, 'ครุภัณฑ์กีฬา', 5);
INSERT INTO `pd_group` VALUES (13, 'ครุภัณฑืดนตรี', 5);
INSERT INTO `pd_group` VALUES (14, 'ถนน', 20);

-- ----------------------------
-- Table structure for pd_place
-- ----------------------------
DROP TABLE IF EXISTS `pd_place`;
CREATE TABLE `pd_place`  (
  `placeid` int(3) NOT NULL AUTO_INCREMENT,
  `pd_id` int(7) NOT NULL,
  `depId` int(2) DEFAULT NULL,
  `lnstalldate` datetime(0) DEFAULT NULL,
  `movingdate` datetime(0) DEFAULT NULL,
  `rp_person` int(7) DEFAULT NULL,
  `note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`placeid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for pd_product
-- ----------------------------
DROP TABLE IF EXISTS `pd_product`;
CREATE TABLE `pd_product`  (
  `pd_id` int(7) NOT NULL AUTO_INCREMENT,
  `head_no` int(6) NOT NULL,
  `number` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `size` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `com_id` int(7) NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `montype_id` int(2) NOT NULL,
  `yearbuy` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `mon_id` int(2) NOT NULL,
  `ct_number` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `group_id` int(2) NOT NULL,
  `category_id` int(2) NOT NULL,
  `date_stinsur` datetime(0) DEFAULT NULL,
  `regis_date` datetime(0) NOT NULL,
  `nbmoth_insur` int(3) DEFAULT NULL,
  `serial` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`pd_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for pd_status
-- ----------------------------
DROP TABLE IF EXISTS `pd_status`;
CREATE TABLE `pd_status`  (
  `pd_status_id` int(1) NOT NULL AUTO_INCREMENT,
  `pd_status` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`pd_status_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_status
-- ----------------------------
INSERT INTO `pd_status` VALUES (1, 'ปรกติ');
INSERT INTO `pd_status` VALUES (2, 'ส่งคืนพัสดุ(ใช้งานได้)');
INSERT INTO `pd_status` VALUES (3, 'ส่งคืนพัสดุ(ชำรุด)');
INSERT INTO `pd_status` VALUES (4, 'รอจำหน่าย');
INSERT INTO `pd_status` VALUES (5, 'จำหน่าย');

-- ----------------------------
-- Table structure for se_money_type
-- ----------------------------
DROP TABLE IF EXISTS `se_money_type`;
CREATE TABLE `se_money_type`  (
  `mon_id` int(2) NOT NULL AUTO_INCREMENT,
  `mon_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`mon_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of se_money_type
-- ----------------------------
INSERT INTO `se_money_type` VALUES (1, 'ตกลงราคา');
INSERT INTO `se_money_type` VALUES (2, 'e-market');

-- ----------------------------
-- Table structure for trainingmoney
-- ----------------------------
DROP TABLE IF EXISTS `trainingmoney`;
CREATE TABLE `trainingmoney`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of trainingmoney
-- ----------------------------
INSERT INTO `trainingmoney` VALUES (1, 'เงินบำรุง');
INSERT INTO `trainingmoney` VALUES (2, 'เงินงบประมาณ');
INSERT INTO `trainingmoney` VALUES (3, 'บริจาค');
INSERT INTO `trainingmoney` VALUES (4, 'งบลงทุน');
INSERT INTO `trainingmoney` VALUES (5, 'เงินนอกงบประมาณ');
INSERT INTO `trainingmoney` VALUES (6, 'ไม่ทราบ');

SET FOREIGN_KEY_CHECKS = 1;
