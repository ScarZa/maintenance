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

 Date: 12/10/2017 16:35:28
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
  `gp_id` int(3) NOT NULL,
  `cate_type` int(4) NOT NULL,
  `cate_kind` varchar(4) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_category
-- ----------------------------
INSERT INTO `pd_category` VALUES (1, 'เครื่องคอมพิวเตอร์(แม่ข่าย)', 10, 74, 7440, '005');
INSERT INTO `pd_category` VALUES (2, 'เครื่องคอมพิวเตอร์ชนิดพกพา(i-pad)', 10, 74, 7440, '001');
INSERT INTO `pd_category` VALUES (3, 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ค(ห้องประชุม)', 10, 74, 7440, '003');
INSERT INTO `pd_category` VALUES (4, 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ค', 10, 74, 7440, '003');
INSERT INTO `pd_category` VALUES (5, 'เครื่องปริ้นชนิดความร้อน', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (6, 'เครื่องปริ้นเตอร์', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (7, 'เครื่องปริ้นเตอร์แบบเลเซอร์', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (8, 'เครื่องพิมพ์(แบบเข็ม)', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (9, 'เครื่องพิมพ์Dot Matrix Printer แบบเคร่สั้น', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (10, 'เครื่องพิมพ์Dot Matrix Printer (แบบเข็ม)', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (11, 'เครื่องพิมพ์Moltifunction ชนิดเลเซอร์', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (12, 'เครื่องพิมพ์Moltifunction /ชนิด LCD', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (13, 'เครื่องพิมพ์กระดาษต่อเนื่องชนิดความร้อน', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (14, 'เครื่องพิมพ์คอมพิวเตอร์(แบบเข็ม)', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (15, 'เครื่องพิมพ์ชนิด Dot Matrix แบบเคร่ ', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (16, 'เครื่องพิมพ์ชนิดความร้อน(พิมพ์สติกเกอร์)', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (17, 'เครื่องพิมพ์ชนิดเลเซอร์', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (18, 'เครื่องพิมพ์แบบเข็ม', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (19, 'เครื่องพิมพ์แบบฉีดหมึก', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (20, 'เครื่องพิมพ์แบบพ่น(เครื่องสแกน)', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (21, 'เครื่องพิมพ์แบบเลเซอร์ HP P1005', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (22, 'เครื่องพิมพ์เลเซอร์มัลติฟังก์ชั่น', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (23, 'เครื่องพิมพ์เลเซอร์รุ่น HP P1102', 10, 74, 7440, '020');
INSERT INTO `pd_category` VALUES (24, 'เครื่องไมโครคอมพิวเตอร์', 10, 74, 7440, '001');
INSERT INTO `pd_category` VALUES (25, 'เครื่องสแกนเนอร์', 10, 74, 7440, '026');
INSERT INTO `pd_category` VALUES (26, 'เครื่องสำรองไฟ เครื่องแม่ข่าย', 10, 74, 7440, '002');
INSERT INTO `pd_category` VALUES (27, 'เครื่องสำรองไฟและควบคุมไฟฟ้า UPS', 10, 74, 7440, '002');
INSERT INTO `pd_category` VALUES (28, 'จอคอมพิวเตอร์', 10, 74, 7440, '002');
INSERT INTO `pd_category` VALUES (29, 'จอภาพคอมพิวเตอร์ ', 10, 74, 7440, '002');

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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_place
-- ----------------------------
INSERT INTO `pd_place` VALUES (1, 1, 28, '2017-10-06 00:00:00', '2017-10-09 00:00:00', 30, 'เครื่องว่าน');
INSERT INTO `pd_place` VALUES (2, 2, 11, '2017-10-09 00:00:00', '2017-10-10 00:00:00', 35, 'ห้องเวชระเบียน');
INSERT INTO `pd_place` VALUES (3, 3, 29, '2017-10-04 00:00:00', '2017-10-06 00:00:00', 75, 'ช่าง');

-- ----------------------------
-- Table structure for pd_product
-- ----------------------------
DROP TABLE IF EXISTS `pd_product`;
CREATE TABLE `pd_product`  (
  `pd_id` int(7) NOT NULL AUTO_INCREMENT,
  `pd_number` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `head_no` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `number` int(3) DEFAULT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of pd_product
-- ----------------------------
INSERT INTO `pd_product` VALUES (1, '081858-7440-001-0001/92', '81858', 92, 1, '', 'lemel', '', 1, 15900.00, 1, '2558', 1, '123/4', 10, 0, '2017-10-04 00:00:00', '2017-10-01 00:00:00', 24, '1234567890');
INSERT INTO `pd_product` VALUES (2, '081858-7440-001-0001/56', '081858', 56, 1, 'printer brother MFC-J5910DW', ' brother', '', 2, 5600.00, 2, '2557', 1, '12/34', 10, 0, '2017-10-06 00:00:00', '2017-10-03 00:00:00', 24, '1234567890');
INSERT INTO `pd_product` VALUES (3, '081858-7440-001-0001/45', '081858', 45, 1, 'brother MFC-J5910DW', 'brother', '', 1, 5690.00, 1, '2559', 1, '34/09', 10, 4, '2017-09-08 00:00:00', '2017-09-01 00:00:00', 32, '123456789098');

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
