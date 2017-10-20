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

 Date: 19/10/2017 11:17:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `dep_Id` varchar(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `depName` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `depCode` varchar(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `main_dep` int(7) NOT NULL,
  `depId` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`depId`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 44 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES ('6000', 'ฝ่ายการแพทย์', '60', 14, 1);
INSERT INTO `department` VALUES ('', 'คลินิคเด็ก', '', 3, 41);
INSERT INTO `department` VALUES ('4000', 'สำนักคุณภาพ', '40', 11, 3);
INSERT INTO `department` VALUES ('3000', 'ฝ่ายเภสัชกรรม', '30', 8, 4);
INSERT INTO `department` VALUES ('2400', 'ฝ่ายสุขภาพจิตสารเสพติด', '24', 10, 5);
INSERT INTO `department` VALUES ('2300', 'ฝ่ายสังคมสงเคราะห์', '23', 9, 6);
INSERT INTO `department` VALUES ('2200', 'ฝ่ายพยาธิวิทยา', '22', 6, 7);
INSERT INTO `department` VALUES ('2100', 'ฝ่ายจิตเวชชุมชน', '21', 5, 8);
INSERT INTO `department` VALUES ('2000', 'ฝ่ายการพยาบาล', '20', 3, 9);
INSERT INTO `department` VALUES ('2003', 'งานผู้ป่วยใน  (หญิง) ', '20', 3, 10);
INSERT INTO `department` VALUES ('2002', 'งานผู้ป่วยใน  (ชาย1)  ', '20', 3, 11);
INSERT INTO `department` VALUES ('2001', 'งานผู้ป่วยนอก', '20', 3, 12);
INSERT INTO `department` VALUES ('1300', 'ฝ่ายพัสดุ', '13', 7, 14);
INSERT INTO `department` VALUES ('1200', 'ฝ่ายการเงินและบัญชี', '12', 2, 15);
INSERT INTO `department` VALUES ('', 'ฝ่ายบริหารทั่วไป', '', 1, 32);
INSERT INTO `department` VALUES ('1103', 'งานห้องสมุด', '11', 19, 17);
INSERT INTO `department` VALUES ('1102', 'งานโสตทัศนศึกษา', '11', 19, 18);
INSERT INTO `department` VALUES ('1101', 'งานแผนงานและประเมินผล', '11', 1, 19);
INSERT INTO `department` VALUES ('1104', 'งานเวชระเบียน', '11', 1, 20);
INSERT INTO `department` VALUES ('1007', 'งานคนสวน', '10', 1, 22);
INSERT INTO `department` VALUES ('1005', 'งานยานพาหนะ', '10', 1, 23);
INSERT INTO `department` VALUES ('1006', 'งานพนักงานทำความสะอาด', '10', 1, 24);
INSERT INTO `department` VALUES ('1004', 'ฝ่ายทรัพยากรบุคคล', '10', 18, 25);
INSERT INTO `department` VALUES ('1003', 'งานธุรการ', '10', 1, 26);
INSERT INTO `department` VALUES ('1002', 'งานซ่อมบำรุง', '10', 1, 27);
INSERT INTO `department` VALUES ('1001', 'งานคอมพิวเตอร์', '10', 1, 28);
INSERT INTO `department` VALUES ('7001', 'ฝ่ายจิตวิทยา', '70', 4, 29);
INSERT INTO `department` VALUES ('2005', 'งานผู้ป่วยใน  (ชาย2)  ', '20', 3, 30);
INSERT INTO `department` VALUES ('', 'กลุ่มงาน Excellence Center', '', 3, 33);
INSERT INTO `department` VALUES ('', 'งานเลขานุการ', '', 20, 40);
INSERT INTO `department` VALUES ('', 'จิตเวชฉุกเฉิน', '', 3, 42);
INSERT INTO `department` VALUES ('', 'งานผู้ป่วยใน (ชาย3)', '', 3, 43);

-- ----------------------------
-- Table structure for department_group
-- ----------------------------
DROP TABLE IF EXISTS `department_group`;
CREATE TABLE `department_group`  (
  `main_dep` int(2) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `dep_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`main_dep`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of department_group
-- ----------------------------
INSERT INTO `department_group` VALUES (01, 'ฝ่ายบริหารทั่วไป');
INSERT INTO `department_group` VALUES (02, 'ฝ่ายการเงินและบัญชี');
INSERT INTO `department_group` VALUES (03, 'ฝ่ายการพยาบาล');
INSERT INTO `department_group` VALUES (04, 'ฝ่ายจิตวิทยา');
INSERT INTO `department_group` VALUES (05, 'ฝ่ายจิตเวชชุมชน');
INSERT INTO `department_group` VALUES (06, 'ฝ่ายพยาธิวิทยา');
INSERT INTO `department_group` VALUES (07, 'ฝ่ายพัสดุ');
INSERT INTO `department_group` VALUES (08, 'ฝ่ายเภสัชกรรม');
INSERT INTO `department_group` VALUES (09, 'ฝ่ายสังคมสงเคราะห์');
INSERT INTO `department_group` VALUES (10, 'ฝ่ายสุขภาพจิตสารเสพติด');
INSERT INTO `department_group` VALUES (11, 'สำนักคุณภาพ');
INSERT INTO `department_group` VALUES (19, 'ฝ่ายนโยบายและแผนงาน');
INSERT INTO `department_group` VALUES (13, 'สำนักเลขานุการ');
INSERT INTO `department_group` VALUES (14, 'ฝ่ายการแพทย์');
INSERT INTO `department_group` VALUES (18, 'ฝ่ายทรัพยากรบุคคล');
INSERT INTO `department_group` VALUES (20, 'งานเลขานุการ');
INSERT INTO `department_group` VALUES (21, 'งานฟื้นฟู');

SET FOREIGN_KEY_CHECKS = 1;
