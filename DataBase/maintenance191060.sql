/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : hrd

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-10-19 10:35:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `mn_change_part`
-- ----------------------------
DROP TABLE IF EXISTS `mn_change_part`;
CREATE TABLE `mn_change_part` (
  `change_pard_id` int(9) NOT NULL AUTO_INCREMENT,
  `part_id` int(3) NOT NULL,
  `part_price` int(5) NOT NULL,
  `change_date` datetime DEFAULT NULL,
  PRIMARY KEY (`change_pard_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of mn_change_part
-- ----------------------------

-- ----------------------------
-- Table structure for `mn_maintenance`
-- ----------------------------
DROP TABLE IF EXISTS `mn_maintenance`;
CREATE TABLE `mn_maintenance` (
  `maintenance_id` int(9) NOT NULL AUTO_INCREMENT,
  `pd_id` int(7) NOT NULL,
  `date_repair` datetime NOT NULL,
  `date_repaircp` datetime DEFAULT NULL,
  `symptom` varchar(255) NOT NULL,
  `howrepair` varchar(255) DEFAULT NULL,
  `repairer` int(7) DEFAULT NULL,
  `informre_repair` int(7) NOT NULL,
  `dateinform` datetime NOT NULL,
  `repair_time` int(3) DEFAULT NULL,
  `cause_nrepair` varchar(255) DEFAULT NULL,
  `repaiv_status` int(1) DEFAULT NULL,
  `chanqe_part_id` int(9) DEFAULT NULL,
  PRIMARY KEY (`maintenance_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of mn_maintenance
-- ----------------------------

-- ----------------------------
-- Table structure for `mn_parts`
-- ----------------------------
DROP TABLE IF EXISTS `mn_parts`;
CREATE TABLE `mn_parts` (
  `part_id` int(3) NOT NULL AUTO_INCREMENT,
  `part_name` varchar(255) NOT NULL,
  PRIMARY KEY (`part_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of mn_parts
-- ----------------------------

-- ----------------------------
-- Table structure for `pd_category`
-- ----------------------------
DROP TABLE IF EXISTS `pd_category`;
CREATE TABLE `pd_category` (
  `category_id` int(2) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `group_id` int(2) NOT NULL,
  `gp_id` int(3) NOT NULL,
  `cate_type` int(4) NOT NULL,
  `cate_kind` varchar(4) NOT NULL,
  PRIMARY KEY (`category_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of pd_category
-- ----------------------------
INSERT INTO `pd_category` VALUES ('1', 'Extranal Hard disc 1 TB', '10', '74', '7440', '2');
INSERT INTO `pd_category` VALUES ('2', 'เครื่องคอมพิวเตอร์ (แม่ข่าย)', '10', '74', '7440', '5');
INSERT INTO `pd_category` VALUES ('3', 'เครื่องคอมพิวเตอร์ชนิดพกพา (I-PAD)', '10', '74', '7440', '1');
INSERT INTO `pd_category` VALUES ('4', 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ก', '10', '74', '7440', '3');
INSERT INTO `pd_category` VALUES ('5', 'เครื่องปริ้นเตอร์แบบเลเซอร์', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('6', 'เครื่องพิมพ์ Dot Matrix Printer', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('7', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('8', 'เครื่องพิมพ์กระดาษต่อเนื่องชนิดความร้อน', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('9', 'เครื่องพิมพ์แบบฉีดหมึก', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('10', 'เครื่องพิมพ์ Multifunction ชนิดฉีดหมึก', '10', '74', '7440', '20');
INSERT INTO `pd_category` VALUES ('11', 'เครื่องไมโครคอมพิวเตอร์', '10', '74', '7440', '1');
INSERT INTO `pd_category` VALUES ('12', 'เครื่องสแกนเนอร์', '10', '74', '7440', '26');
INSERT INTO `pd_category` VALUES ('13', 'เครื่องสำรองไฟ เครื่องแม่ข่าย', '10', '74', '7440', '2');
INSERT INTO `pd_category` VALUES ('14', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', '10', '74', '7440', '22');
INSERT INTO `pd_category` VALUES ('15', 'เครื่องอ่านบาร์โค๊ตแบบมือถือ', '10', '74', '7441', '2');
INSERT INTO `pd_category` VALUES ('16', 'จอภาพคอมพิวเตอร์', '10', '74', '7440', '2');
INSERT INTO `pd_category` VALUES ('17', 'ชุดโปรแกรม Microsoft windows 7 Home', '10', '74', '7440', '30');
INSERT INTO `pd_category` VALUES ('18', 'โปรแกรมความเสี่ยง', '10', '74', '7440', '30');
INSERT INTO `pd_category` VALUES ('19', 'โปรแกรมจัดเก็บแฟ้มประวัติผู้ป่วยอิเล็กทรอนิกส์', '10', '74', '7440', '30');

-- ----------------------------
-- Table structure for `pd_group`
-- ----------------------------
DROP TABLE IF EXISTS `pd_group`;
CREATE TABLE `pd_group` (
  `group_id` int(3) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) NOT NULL,
  `group_age` int(3) DEFAULT NULL,
  PRIMARY KEY (`group_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of pd_group
-- ----------------------------
INSERT INTO `pd_group` VALUES ('1', 'สิ่งปลูกสร้าง', '25');
INSERT INTO `pd_group` VALUES ('2', 'ครุภัณฑ์สำนักงาน', '12');
INSERT INTO `pd_group` VALUES ('3', 'ครุภัณฑ์ยานพาหนะ', '30');
INSERT INTO `pd_group` VALUES ('4', 'ครุภัณฑ์ไฟฟ้า', '20');
INSERT INTO `pd_group` VALUES ('5', 'ครุภัณฑ์โฆษณา', '10');
INSERT INTO `pd_group` VALUES ('6', 'ครุภัณฑ์การเกษตร', '10');
INSERT INTO `pd_group` VALUES ('7', 'ครุภัณฑ์โรงงาน', '10');
INSERT INTO `pd_group` VALUES ('8', 'ครุภัณฑ์ก่อสร้าง', '10');
INSERT INTO `pd_group` VALUES ('9', 'ครุภัณฑ์วิทยาศาสตร์', '15');
INSERT INTO `pd_group` VALUES ('10', 'ครุภัณฑ์คอมพิวเตอร์', '5');
INSERT INTO `pd_group` VALUES ('11', 'ครุภัณฑ์งานบ้าน', '5');
INSERT INTO `pd_group` VALUES ('12', 'ครุภัณฑ์กีฬา', '5');
INSERT INTO `pd_group` VALUES ('13', 'ครุภัณฑืดนตรี', '5');
INSERT INTO `pd_group` VALUES ('14', 'ถนน', '20');

-- ----------------------------
-- Table structure for `pd_place`
-- ----------------------------
DROP TABLE IF EXISTS `pd_place`;
CREATE TABLE `pd_place` (
  `placeid` int(3) NOT NULL AUTO_INCREMENT,
  `pd_id` int(7) NOT NULL,
  `depId` int(2) DEFAULT NULL,
  `lnstalldate` datetime DEFAULT NULL,
  `movingdate` datetime DEFAULT NULL,
  `rp_person` int(7) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`placeid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of pd_place
-- ----------------------------
INSERT INTO `pd_place` VALUES ('1', '1', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('2', '2', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('3', '3', '32', null, null, null, 'หน.บริหาร');
INSERT INTO `pd_place` VALUES ('4', '4', '32', null, null, null, ' ห้องคอม คืนจอ');
INSERT INTO `pd_place` VALUES ('5', '5', '32', null, null, null, 'CPU พัสดุ คืนจอ');
INSERT INTO `pd_place` VALUES ('6', '6', '32', null, null, null, '(CPU36อยู่ER จอ สส) ');
INSERT INTO `pd_place` VALUES ('7', '7', '32', null, null, null, ' ธุรการ คืนจอ');
INSERT INTO `pd_place` VALUES ('8', '8', '32', null, null, null, 'หน.บริหาร');
INSERT INTO `pd_place` VALUES ('9', '9', '32', null, null, null, 'หน.บริหาร');
INSERT INTO `pd_place` VALUES ('10', '10', '32', null, null, null, 'หน.บริหาร');
INSERT INTO `pd_place` VALUES ('11', '11', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('12', '12', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('13', '13', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('14', '14', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('15', '15', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('16', '16', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('17', '17', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('18', '18', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('19', '19', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('20', '20', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('21', '21', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('22', '22', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('23', '23', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('24', '24', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('25', '25', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('26', '26', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('27', '27', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('28', '28', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('29', '29', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('30', '30', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('31', '31', '32', null, null, null, 'ธุรการ');
INSERT INTO `pd_place` VALUES ('32', '32', '32', null, null, null, 'ห้องหัวหน้าบริหาร');
INSERT INTO `pd_place` VALUES ('33', '33', '32', null, null, null, 'ธุรการ');
INSERT INTO `pd_place` VALUES ('34', '34', '32', null, null, null, '10 ธุรการ');
INSERT INTO `pd_place` VALUES ('35', '35', '32', null, null, null, '12 ธุรการ');
INSERT INTO `pd_place` VALUES ('36', '36', '32', null, null, null, 'หน.บริหาร');
INSERT INTO `pd_place` VALUES ('37', '37', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('38', '38', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('39', '39', '32', null, null, null, null);
INSERT INTO `pd_place` VALUES ('40', '40', '28', null, null, null, ' 28 ห้องคอม คืนจอ');
INSERT INTO `pd_place` VALUES ('41', '41', '28', null, null, null, null);
INSERT INTO `pd_place` VALUES ('42', '42', '28', null, null, null, null);
INSERT INTO `pd_place` VALUES ('43', '43', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('44', '44', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('45', '45', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('46', '46', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('47', '47', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('48', '48', '28', null, null, null, 'ห้องเซิฟเวอร์');
INSERT INTO `pd_place` VALUES ('49', '49', '28', null, null, null, null);
INSERT INTO `pd_place` VALUES ('50', '50', '28', null, null, null, null);
INSERT INTO `pd_place` VALUES ('51', '51', '28', null, null, null, null);
INSERT INTO `pd_place` VALUES ('52', '52', '26', null, null, null, 'หัวหน้าบริหาร');
INSERT INTO `pd_place` VALUES ('53', '53', '19', null, null, null, null);
INSERT INTO `pd_place` VALUES ('54', '54', '19', null, null, null, null);
INSERT INTO `pd_place` VALUES ('55', '55', '19', null, null, null, null);
INSERT INTO `pd_place` VALUES ('56', '56', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('57', '57', '15', null, null, null, 'ห้องชำระเงิน');
INSERT INTO `pd_place` VALUES ('58', '58', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('59', '59', '15', null, null, null, 'ห้องชำระเงิน');
INSERT INTO `pd_place` VALUES ('60', '60', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('61', '61', '15', null, null, null, 'คืนจอ');
INSERT INTO `pd_place` VALUES ('62', '62', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('63', '63', '15', null, null, null, 'ห้องเก็บเงิน');
INSERT INTO `pd_place` VALUES ('64', '64', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('65', '65', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('66', '66', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('67', '67', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('68', '68', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('69', '69', '15', null, null, null, 'สิทธิบัตร');
INSERT INTO `pd_place` VALUES ('70', '70', '15', null, null, null, 'สิทธิบัตร');
INSERT INTO `pd_place` VALUES ('71', '71', '15', null, null, null, 'สิทธิบัตร');
INSERT INTO `pd_place` VALUES ('72', '72', '15', null, null, null, 'ห้องเก็บเงิน');
INSERT INTO `pd_place` VALUES ('73', '73', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('74', '74', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('75', '75', '15', null, null, null, null);
INSERT INTO `pd_place` VALUES ('76', '76', '9', null, null, null, 'คืนจอ');
INSERT INTO `pd_place` VALUES ('77', '77', '9', null, null, null, null);
INSERT INTO `pd_place` VALUES ('78', '78', '9', null, null, null, null);
INSERT INTO `pd_place` VALUES ('79', '79', '9', null, null, null, null);
INSERT INTO `pd_place` VALUES ('80', '80', '9', null, null, null, 'ชำรุด');
INSERT INTO `pd_place` VALUES ('81', '81', '9', null, null, null, null);
INSERT INTO `pd_place` VALUES ('82', '82', '41', null, null, null, 'ธุรการ OPD');
INSERT INTO `pd_place` VALUES ('83', '83', '42', null, null, null, null);
INSERT INTO `pd_place` VALUES ('84', '84', '42', null, null, null, null);
INSERT INTO `pd_place` VALUES ('85', '85', '42', null, null, null, 'งานคอมพิวเตอร์');
INSERT INTO `pd_place` VALUES ('86', '86', '42', null, null, null, null);
INSERT INTO `pd_place` VALUES ('87', '87', '42', null, null, null, null);
INSERT INTO `pd_place` VALUES ('88', '88', '42', null, null, null, null);
INSERT INTO `pd_place` VALUES ('89', '89', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('90', '90', '8', null, null, null, 'คืนจอ');
INSERT INTO `pd_place` VALUES ('91', '91', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('92', '92', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('93', '93', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('94', '94', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('95', '95', '8', null, null, null, 'รับบริจาค ');
INSERT INTO `pd_place` VALUES ('96', '96', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('97', '97', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('98', '98', '30', null, null, null, null);
INSERT INTO `pd_place` VALUES ('99', '99', '30', null, null, null, null);
INSERT INTO `pd_place` VALUES ('100', '100', '30', null, null, null, null);
INSERT INTO `pd_place` VALUES ('101', '101', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('102', '102', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('103', '103', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('104', '104', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('105', '105', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('106', '106', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('107', '107', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('108', '108', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('109', '109', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('110', '110', '11', null, null, null, null);
INSERT INTO `pd_place` VALUES ('111', '111', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('112', '112', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('113', '113', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('114', '114', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('115', '115', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('116', '116', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('117', '117', '43', null, null, null, null);
INSERT INTO `pd_place` VALUES ('118', '118', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('119', '119', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('120', '120', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('121', '121', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('122', '122', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('123', '123', '10', null, null, null, 'ชำรุด');
INSERT INTO `pd_place` VALUES ('124', '124', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('125', '125', '10', null, null, null, null);
INSERT INTO `pd_place` VALUES ('126', '126', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('127', '127', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('128', '128', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('129', '129', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('130', '130', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('131', '131', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('132', '132', '12', null, null, null, 'หน้าห้องตรวจ');
INSERT INTO `pd_place` VALUES ('133', '133', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('134', '134', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('135', '135', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('136', '136', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('137', '137', '12', null, null, null, '20 ห้องแพทย์');
INSERT INTO `pd_place` VALUES ('138', '138', '12', null, null, null, '21จุดสัมภาษณ์, ');
INSERT INTO `pd_place` VALUES ('139', '139', '12', null, null, null, '22 จุดสัมภาษณ์, ');
INSERT INTO `pd_place` VALUES ('140', '140', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('141', '141', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('142', '142', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('143', '143', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('144', '144', '12', null, null, null, '57 เคาว์เตอร์');
INSERT INTO `pd_place` VALUES ('145', '145', '12', null, null, null, '58 เคาว์เตอร์');
INSERT INTO `pd_place` VALUES ('146', '146', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('147', '147', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('148', '148', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('149', '149', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('150', '150', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('151', '151', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('152', '152', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('153', '153', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('154', '154', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('155', '155', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('156', '156', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('157', '157', '12', null, null, null, null);
INSERT INTO `pd_place` VALUES ('158', '158', '1', null, null, null, ' ห้อง 3');
INSERT INTO `pd_place` VALUES ('159', '159', '1', null, null, null, 'ห้อง 4');
INSERT INTO `pd_place` VALUES ('160', '160', '1', null, null, null, 'ชำรุด');
INSERT INTO `pd_place` VALUES ('161', '161', '1', null, null, null, null);
INSERT INTO `pd_place` VALUES ('162', '162', '1', null, null, null, 'ห้องหมอบอย');
INSERT INTO `pd_place` VALUES ('163', '163', '1', null, null, null, null);
INSERT INTO `pd_place` VALUES ('164', '164', '1', null, null, null, null);
INSERT INTO `pd_place` VALUES ('165', '165', '1', null, null, null, null);
INSERT INTO `pd_place` VALUES ('166', '166', '1', null, null, null, 'ห้อง 4');
INSERT INTO `pd_place` VALUES ('167', '167', '1', null, null, null, 'ห้อง 2');
INSERT INTO `pd_place` VALUES ('168', '168', '1', null, null, null, 'ห้อง 1');
INSERT INTO `pd_place` VALUES ('169', '169', '1', null, null, null, 'ห้อง 3');
INSERT INTO `pd_place` VALUES ('170', '170', '1', null, null, null, 'ห้องหมอเอิ้น');
INSERT INTO `pd_place` VALUES ('171', '171', '1', null, null, null, null);
INSERT INTO `pd_place` VALUES ('172', '172', '29', null, null, null, null);
INSERT INTO `pd_place` VALUES ('173', '173', '29', null, null, null, null);
INSERT INTO `pd_place` VALUES ('174', '174', '29', null, null, null, null);
INSERT INTO `pd_place` VALUES ('175', '175', '29', null, null, null, null);
INSERT INTO `pd_place` VALUES ('176', '176', '29', null, null, null, null);
INSERT INTO `pd_place` VALUES ('177', '177', '8', null, null, null, null);
INSERT INTO `pd_place` VALUES ('178', '178', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('179', '179', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('180', '180', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('181', '181', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('182', '182', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('183', '183', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('184', '184', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('185', '185', '25', null, null, null, null);
INSERT INTO `pd_place` VALUES ('186', '186', '25', null, null, null, '14 HR');
INSERT INTO `pd_place` VALUES ('187', '187', '32', null, null, null, 'ธุรการกลาง');
INSERT INTO `pd_place` VALUES ('188', '188', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('189', '189', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('190', '190', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('191', '191', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('192', '192', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('193', '193', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('194', '194', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('195', '195', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('196', '196', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('197', '197', '20', null, null, null, 'อยู่ฝ่ายพัสดุ');
INSERT INTO `pd_place` VALUES ('198', '198', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('199', '199', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('200', '200', '20', null, null, null, 'เครื่องพี่ตั๊ก');
INSERT INTO `pd_place` VALUES ('201', '201', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('202', '202', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('203', '203', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('204', '204', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('205', '205', '20', null, null, null, null);
INSERT INTO `pd_place` VALUES ('206', '206', '18', null, null, null, null);
INSERT INTO `pd_place` VALUES ('207', '207', '18', null, null, null, null);
INSERT INTO `pd_place` VALUES ('208', '208', '18', null, null, null, null);
INSERT INTO `pd_place` VALUES ('209', '209', '18', null, null, null, null);
INSERT INTO `pd_place` VALUES ('210', '210', '18', null, null, null, null);
INSERT INTO `pd_place` VALUES ('211', '211', '17', null, null, null, null);
INSERT INTO `pd_place` VALUES ('212', '212', '17', null, null, null, null);
INSERT INTO `pd_place` VALUES ('213', '213', '7', null, null, null, null);
INSERT INTO `pd_place` VALUES ('214', '214', '7', null, null, null, null);
INSERT INTO `pd_place` VALUES ('215', '215', '7', null, null, null, null);
INSERT INTO `pd_place` VALUES ('216', '216', '7', null, null, null, null);
INSERT INTO `pd_place` VALUES ('217', '217', '7', null, null, null, null);
INSERT INTO `pd_place` VALUES ('218', '218', '14', null, null, null, 'พัสดุ');
INSERT INTO `pd_place` VALUES ('219', '219', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('220', '220', '14', null, null, null, 'พัสดุ');
INSERT INTO `pd_place` VALUES ('221', '221', '14', null, null, null, 'CPU พัสดุ คืนจอ');
INSERT INTO `pd_place` VALUES ('222', '222', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('223', '223', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('224', '224', '14', null, null, null, 'พัสดุ');
INSERT INTO `pd_place` VALUES ('225', '225', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('226', '226', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('227', '227', '14', null, null, null, null);
INSERT INTO `pd_place` VALUES ('228', '228', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('229', '229', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('230', '230', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('231', '231', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('232', '232', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('233', '233', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('234', '234', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('235', '235', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('236', '236', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('237', '237', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('238', '238', '4', null, null, null, null);
INSERT INTO `pd_place` VALUES ('239', '239', '6', null, null, null, null);
INSERT INTO `pd_place` VALUES ('240', '240', '6', null, null, null, null);
INSERT INTO `pd_place` VALUES ('241', '241', '6', null, null, null, null);
INSERT INTO `pd_place` VALUES ('242', '242', '6', null, null, null, null);
INSERT INTO `pd_place` VALUES ('243', '243', '6', null, null, null, 'ส่งซ่อมงานคอมฯ');
INSERT INTO `pd_place` VALUES ('244', '244', '5', null, null, null, 'อยู่เฉพาะจอคอม');
INSERT INTO `pd_place` VALUES ('245', '245', '5', null, null, null, null);
INSERT INTO `pd_place` VALUES ('246', '246', '5', null, null, null, null);
INSERT INTO `pd_place` VALUES ('247', '247', '5', null, null, null, null);
INSERT INTO `pd_place` VALUES ('248', '248', '5', null, null, null, 'ชำรุด ');
INSERT INTO `pd_place` VALUES ('249', '249', '5', null, null, null, null);
INSERT INTO `pd_place` VALUES ('250', '250', '3', null, null, null, null);
INSERT INTO `pd_place` VALUES ('251', '251', '3', null, null, null, null);
INSERT INTO `pd_place` VALUES ('252', '252', '3', null, null, null, null);
INSERT INTO `pd_place` VALUES ('253', '253', '3', null, null, null, null);
INSERT INTO `pd_place` VALUES ('254', '254', '40', null, null, null, 'จอชำรุด');
INSERT INTO `pd_place` VALUES ('255', '255', '40', null, null, null, 'ห้อง ผอ.');
INSERT INTO `pd_place` VALUES ('256', '256', '40', null, null, null, 'รพจ.สงขลายืมไป');
INSERT INTO `pd_place` VALUES ('257', '257', '40', null, null, null, null);

-- ----------------------------
-- Table structure for `pd_product`
-- ----------------------------
DROP TABLE IF EXISTS `pd_product`;
CREATE TABLE `pd_product` (
  `pd_id` int(7) NOT NULL AUTO_INCREMENT,
  `pd_number` varchar(30) NOT NULL,
  `head_no` varchar(10) DEFAULT NULL,
  `number` int(3) DEFAULT NULL,
  `status` int(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `com_id` int(7) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `montype_id` int(2) NOT NULL,
  `yearbuy` varchar(4) DEFAULT NULL,
  `mon_id` int(2) NOT NULL,
  `ct_number` varchar(10) NOT NULL,
  `group_id` int(2) NOT NULL,
  `category_id` int(2) NOT NULL,
  `date_stinsur` datetime DEFAULT NULL,
  `regis_date` datetime NOT NULL,
  `nbmoth_insur` int(3) DEFAULT NULL,
  `serial` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pd_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=258 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of pd_product
-- ----------------------------
INSERT INTO `pd_product` VALUES ('1', '081854-7440-001-0001/74', null, null, '1', 'เครื่องคอมพิวเตอร์ (แม่ข่าย)', null, null, '0', '0.00', '0', null, '0', '', '10', '2', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('2', '081854-7440-002-0001/1', null, null, '1', 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ก (ห้องประชุม)', null, null, '0', '0.00', '0', null, '0', '', '10', '4', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('3', '0801-56-7440-001-0126/1', null, null, '1', 'เครื่องคอมพิวเตอร์ชนิดพกพา (I-PAD)', null, null, '0', '0.00', '0', null, '0', '', '10', '3', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('4', '081846-7140-001-0001/28', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('5', '081847-7140-001-0001/33', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('6', '081849-7140-001-0001/36', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('7', '081851-7440-001-0001/42', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('8', '081858-7440-001-0001/95', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('9', '081860-7440-001-0001/106', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('10', '081860-7440-001-0001/107', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('11', '\"B\"081853-7440-010-0003/1', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('12', '\"B\"081853-7440-010-0003/2', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('13', '\"B\"081853-7440-010-0003/3', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('14', '\"B\"081853-7440-010-0003/4', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('15', '\"B\"081853-7440-010-0003/5', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('16', '\"B\"081853-7440-010-0003/6', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('17', '\"B\"081853-7440-010-0003/7', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('18', '\"B\"081853-7440-010-0003/8', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('19', '\"B\"081854-7440-010-0003/9', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('20', '\"B\"081854-7440-010-0003/10', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('21', '\"B\"081854-7440-010-0003/11', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('22', '\"B\"081854-7440-010-0003/12', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('23', '\"B\"081854-7440-010-0003/13', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('24', '\"B\"081854-7440-010-0003/14', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('25', '\"B\"081854-7440-010-0003/15', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('26', '\"B\"081854-7440-010-0003/16', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('27', '\"B\"081854-7440-010-0003/17', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('28', '\"B\"081854-7440-010-0003/18', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('29', '\"B\"081854-7440-010-0003/19', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('30', '\"B\"081854-7440-010-0003/20', null, null, '1', 'ชุดโปรแกรม Microsoft windows 7 Home', null, null, '0', '0.00', '0', null, '0', '', '10', '17', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('31', '\"B\"081856-7140-002-0003/3', null, null, '1', 'เครื่องพิมพ์แบบฉีดหมึก', null, null, '0', '0.00', '0', null, '0', '', '10', '10', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('32', '\"B\"081857-7140-002-0001/17', null, null, '1', 'เครื่องพิมพ์แบบเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('33', '081856-7140-002-0001/11', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('34', '\"B\" 081851-7440-003-0001/10', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('35', '\"B\" 081851-7440-003-0001/12', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('36', '\"B\"081857-7440-003-0001/47', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('37', '\"B\"081853-7440-010-0002/1', null, null, '1', 'โปรแกรมความเสี่ยง', null, null, '0', '0.00', '0', null, '0', '', '10', '18', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('38', '081846-7140-003-0001/19', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('39', '081846-7140-003-0001/20', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('40', '081846-7140-001-0001/28', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('41', '081851-7440-001-0001/43', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('42', '081858-7440-001-0001/92', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('43', '081853-7440-001-0001/52', null, null, '1', 'เครื่องคอมพิวเตอร์ (แม่ข่าย)', null, null, '0', '0.00', '0', null, '0', '', '10', '2', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('44', '081853-7440-001-0001/53', null, null, '1', 'เครื่องคอมพิวเตอร์ (แม่ข่าย)', null, null, '0', '0.00', '0', null, '0', '', '10', '2', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('45', '081858-7440-001-0001/98', null, null, '1', 'เครื่องคอมพิวเตอร์ (แม่ข่าย)', null, null, '0', '0.00', '0', null, '0', '', '10', '2', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('46', '081858-7140-002-0004/20', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('47', '081858-7440-003-0001/76', null, null, '1', 'เครื่องสำรองไฟ เครื่องแม่ข่าย', null, null, '0', '0.00', '0', null, '0', '', '10', '13', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('48', '\"B\"081854-7440-003-0001/34', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('49', '\"B\"081857-7440-003-0001/49', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('50', 'B081857-7440-003-0001/48', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('51', '\"B\"081854-6730-002-0001/12', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('52', '\"B\"081860-7440-003-0001/77', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('53', '081858-7140-002-0004/13', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('54', '\"B\"081857-7440-003-0001/52', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('55', '\"B\"081854-6730-002-0001/5', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('56', '\"B\"081860-7440-002-0002/2', null, null, '1', 'Extranal Hard disc 1 TB', null, null, '0', '0.00', '0', null, '0', '', '10', '1', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('57', '081854-7140-002-0004/1', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('58', '081857-7140-002-0004/11', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('59', '081858-7140-002-0004/12', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('60', '081858-7140-002-0004/21', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('61', '081845-7140-001-0001/18', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('62', '081850-7440-001-0001/40', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('63', '081851-7140-001-0001/45', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('64', '081852-7440-001-0001/48', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('65', '081858-7440-001-0001/88', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('66', '081859-7440-001-0001/100', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('67', '081859-7440-001-0001/102', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('68', '081856-7140-002-0002/16', null, null, '1', 'เครื่องพิมพ์คอมพิวเตอร์ (แบบเข็ม)', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('69', '\"B\"081857-7440-003-0001/46', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('70', '\"B\"081857-7440-003-0001/69', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('71', '\"B\"081857-7440-003-0001/70', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('72', '\"B\"081858-7440-003-0001/72', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('73', '\"B\"081860-7440-003-0001/79', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('74', '081847-7140-003-0001/22', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('75', '\"B\"081854-6730-002-0001/7', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('76', '081848-7140-001-0001/34', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('77', '081858-7140-001-0001/94', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('78', '081858-7140-001-0001/97', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('79', '081856-7140-002-0004/6', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('80', '081849-7140-คอมฯ-004', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('81', 'B081854-6730-002-0001/8', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('82', '081856-7140-002-0004/8', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('83', '081858-7440-001-0001/85', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('84', '081858-7440-001-0001/86', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('85', '0810855-7440-002-0001/2', null, null, '1', 'เครื่องคอมพิวเตอร์โน๊ตบุ๊ค', null, null, '0', '0.00', '0', null, '0', '', '10', '4', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('86', '\"B\"081858-7140-002-0001/23', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('87', '\"B\"081857-7440-003-0001/59', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('88', '\"B\"081857-7440-003-0001/60', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('89', '081853-7440-001-0001/60', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('90', '081856-7440-001-0001/82', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('91', '081860-7440-001-0001/105', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('92', '081858-7140-002-0004/15', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('93', '081859-7140-002-0004/24', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('94', '\"B\"081853-7140-002-0001/5', null, null, '1', 'เครื่องพิมพ์เลเซอร์ รุ่น HP P1102', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('95', '\"B\"081857-7140-002-0001/16', null, null, '1', 'เครื่องพิมพ์เลเซอร์ รุ่น HP P1102', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('96', '\"B\"081857-7440-003-0001/45', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('97', '\"B\"081857-7440-003-0001/54', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('98', '081858-7440-001-0001/96', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('99', '081858-7140-002-0005/3', null, null, '1', 'เครื่องปริ้นชนิดความร้อน', null, null, '0', '0.00', '0', null, '0', '', '10', '8', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('100', '081857-7140-002-0004/10', null, null, '1', 'เครื่องพิมพ์เลเซอร์ มัลติฟังก์ชั่น', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('101', '081856-7140-002-0004/3', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('102', '081854-7140-002-0005/1', null, null, '1', 'เครื่องพิมพ์กระดาษต่อเนื่องชนิดความร้อน', null, null, '0', '0.00', '0', null, '0', '', '10', '8', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('103', '081856-7440-001-0001/77', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('104', '081856-7440-001-0001/78', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('105', '\"B\"081857-7440-003-0001/67', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('106', '\"B\"081857-7440-003-0001/68', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('107', '\"B\"081858-7440-003-0001/75', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('108', '\"B\"081860-7440-003-0001/88', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('109', '7140-003-0001/4', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('110', '7140-003-0001/6', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('111', '081849-7140-001-0001/37', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('112', '081858-7140-002-0001/5', null, null, '1', 'เครื่องปริ้นเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('113', '081854-7140-002-00002/14', null, null, '1', 'เครื่องพิมพ์ Dot Matrix Printer แบบแคร่สั้น', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('114', '081849-7140-001-0001/37', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('115', '081854-7440-001-0001/71', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('116', '\"B\"081857-7440-003-0001/66', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('117', '081857-7440-003-0001/68', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('118', '\"B\"081855-7140-002-0001/14', null, null, '1', 'เครื่องปริ้นเตอร์แบบเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('119', '081853-7440-001-0001/61', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('120', '081855-7440-001-0001/75', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('121', '081856-7140-002-0005/2', null, null, '1', 'เครื่องพิมพ์กระดาษต่อเนื่องชนิดความร้อน', null, null, '0', '0.00', '0', null, '0', '', '10', '8', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('122', '081855-7140-002-0002/15', null, null, '1', 'เครื่องพิมพ์ชนิด Dot Matrix แบบแคร่', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('123', '\"B\"081855-7440-003-0001/40', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('124', '\"B\"081856-7440-003-0001/44', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('125', '081855-7440-003-0001/37', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('126', '081853-7440-001-0001/57', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('127', '081853-7440-001-0001/58', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('128', '081854-7440-001-0001/62', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('129', '081854-7440-001-0001/63', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('130', '081854-7440-001-0001/64', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('131', '081854-7440-001-0001/65', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('132', '081860-7440-001-0001/110', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('133', '081859-7140-002-0005/4', null, null, '1', 'เครื่องพิมพ์ชนิดความร้อน (พิมพ์สติ๊กเกอร์)', null, null, '0', '0.00', '0', null, '0', '', '10', '8', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('134', '\"B\"081854-7140-002-0001/8', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('135', '\"B\"081854-7140-002-0001/9', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('136', '\"B\"081858-7140-002-0001/19', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('137', '\"B\"081858-7140-002-0001/20', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('138', '\"B\"081858-7140-002-0001/21', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('139', '\"B\"081858-7140-002-0001/22', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('140', '081850-7140-002-0001-คอมฯ/1', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('141', '\"B\"081854-7440-003-0001/22', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('142', '\"B\"081854-7440-003-0001/23', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('143', '\"B\"081854-7440-003-0001/24', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('144', '\"B\"081857-7440-003-0001/57', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('145', '\"B\"081857-7440-003-0001/58', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('146', '\"B\"081858-7440-003-0001/74', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('147', '\"B\"081860-7440-003-0001/80', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('148', '\"B\"081860-7440-003-0001/81', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('149', '\"B\"081860-7440-003-0001/82', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('150', '\"B\"081860-7440-003-0001/83', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('151', '\"B\"081860-7440-003-0001/84', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('152', '\"B\"081860-7440-003-0001/85', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('153', '081846-7140-003-0001/17', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('154', '7140-003-0001/2', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('155', '7140-003-0001/8', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('156', '7140-003-0001/9', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('157', '\"B\"081854-6730-002-0001/11', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('158', '\"B\"081854-7140-002-0001/10', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('159', '\"B\"081854-7140-002-0001/13', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('160', '\"B\"081858-7140-002-0001/18', null, null, '1', 'เครื่องพิมพ์เลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('161', '\"B\"081857-7440-003-0001/50', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('162', '\"B\"081858-7440-003-0001/73', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('163', '\"B\"081860-7440-003-0001/92', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('164', '\"B\"081860-7440-003-0001/93', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('165', '\"B\"081860-7440-003-0001/94', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('166', '081854-7440-001-0001/66', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('167', '081854-7440-001-0001/67', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('168', '081854-7440-001-0001/68', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('169', '081854-7440-001-0001/69', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('170', '081858-7140-002-0004/18', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('171', '081859-7140-002-0004/24', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('172', '081852-7440-001-0001/47', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('173', '081856-7440-001-0001/79', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('174', '081856-7140-002-0004/4', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('175', '\"B\"081856-7440-003-0001/43', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('176', '\"B\"081857-7440-003-0001/71', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('177', '\"B\"081860-7440-003-0001/90', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('178', '081858-7140-002-0004/16', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('179', '081856-7440-001-0001/76', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('180', '081858-7440-001-0001/87', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('181', '081860-7440-001-0001/103', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('182', '\"B\"081860-7440-002-0002/1', null, null, '1', 'Extranal Hard disc 1 TB', null, null, '0', '0.00', '0', null, '0', '', '10', '1', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('183', '\"B\"081857-7440-003-0001/55', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('184', '\"B\"081860-7440-003-0001/86', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('185', '\"B\"081860-7440-003-0001/87', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('186', '\"B\"081858-6730-002-0001/14', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('187', '\"B\"081860-7440-003-0001/78', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('188', '081852-7440-001-0001/46', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('189', '081853-7440-001-0001/54', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('190', '081853-7440-001-0001/55', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('191', '081853-7440-001-0001/56', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('192', '081860-7440-001-0001/104', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('193', '081849-7140-002-0002/11', null, null, '1', 'เครื่องพิมพ์ Dot Matrix Printer แบบแคร่สั้น(แบบเข็ม)', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('194', '081854-7140-002-0002/13', null, null, '1', 'เครื่องพิมพ์ Dot Matrix Printer แบบแคร่สั้น(แบบเข็ม)', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('195', '081858-7140-002-0004/22', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('196', '081847-7140-002-0002/6', null, null, '1', 'เครื่องพิมพ์แบบเข็ม', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('197', '\"B\"081853-7140-002-0001/6', null, null, '1', 'เครื่องพิมพ์เลเซอร์ รุ่น HP P1102', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('198', '081858-7440-010-0001/5', null, null, '1', 'เครื่องสแกนเนอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '12', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('199', '081858-7440-010-0001/6', null, null, '1', 'เครื่องสแกนเนอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '12', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('200', '\"B\"081852-7440-003-0001/20', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('201', '\"B\"081857-7440-003-0001/63', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('202', '\"B\"081857-7440-003-0001/64', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('203', '\"B\"081857-7440-003-0001/65', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('204', '081858-7740-010-0001/2', null, null, '1', 'โปรแกรมจัดเก็บแฟ้มประวัติผู้ป่วยอิเล็กทรอนิกส์', null, null, '0', '0.00', '0', null, '0', '', '10', '19', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('205', '\"B\"081860-7440-003-0001/91', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('206', '081852-7440-001-0001/51', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('207', '081857-7140-002-0006/2', null, null, '1', 'เครื่องพิมพ์แบบฉีดหมึก', null, null, '0', '0.00', '0', null, '0', '', '10', '10', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('208', '081859-7140-002-0006/3', null, null, '1', 'เครื่องพิมพ์แบบฉีดหมึก', null, null, '0', '0.00', '0', null, '0', '', '10', '10', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('209', '081849-7440-010-0001/2', null, null, '1', 'เครื่องสแกนเนอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '12', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('210', '\"B\"081852-7440-003-0001/18', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('211', '081858-7440-001-0001/90', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('212', '081847-7410-003-0001/1', null, null, '1', 'เครื่องอ่านบาร์โค๊ตแบบมือถือ', null, null, '0', '0.00', '0', null, '0', '', '10', '15', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('213', '081852-7440-001-0001/49', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('214', '081858-7440-001-0001/93', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('215', '081858-7140-002-0004/14', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('216', '081859-7140-002-0005/5', null, null, '1', 'เครื่องพิมพ์ชนิดความร้อน (พิมพ์สติ๊กเกอร์)', null, null, '0', '0.00', '0', null, '0', '', '10', '8', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('217', '\"B\"081857-7440-003-0001/53', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('218', '081853-7140-002-00002/12', null, null, '1', 'เครื่องพิมพ์ Dot Matrix Printer แบบแคร่สั้น', null, null, '0', '0.00', '0', null, '0', '', '10', '6', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('219', '081858-7140-002-0004/17', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('220', '081859-7140-002-0004/23', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('221', '081847-7140-001-0001/33', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('222', '081849-7140-001-0001/35', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('223', '081858-7440-001-0001/89', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('224', '081859-7440-001-0001/101', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('225', '081860-7440-001-0001/111', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('226', '\"B\"081857-7440-003-0001/56', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('227', '\"B\"081854-6730-002-0001/9', null, null, '1', 'จอคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('228', '081849-7140-001-0001/38', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('229', '081850-7440-001-0001/41', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('230', '081853-7440-001-0001/59', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('231', '081854-7440-001-0001/72', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('232', '081857-7440-001-0001/84', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('233', '\"B\"081853-7140-002-0001/4', null, null, '1', 'เครื่องพิมพ์เลเซอร์ HP P1005', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('234', '081857-7140-002-0004/9', null, null, '1', 'เครื่องพิมพ์เลเซอร์ มัลติฟังก์ชั่น', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('235', '\"B\"081857-7440-003-0001/61', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('236', '\"B\"081860-7440-003-0001/89', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('237', '081847-7140-003-0001/24', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('238', '081850-7440-คอมฯ-009', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('239', '081856-7140-002-0004/5', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์ / ชนิด LCD', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('240', '081854-7440-001-0001/70', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('241', '081856-7440-001-0001/80', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('242', '\"B\"081857-7440-003-0001/62', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('243', '7140-003-0001/8', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('244', '081849-7440-001-0001/36', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('245', '081856-7440-001-0001/81', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('246', '081858-7140-002-0004/19', null, null, '1', 'เครื่องพิมพ์ Multifunction ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '7', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('247', '\"B\"081856-7440-003-0001/42', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('248', '081847-7140-003-0001/23', null, null, '1', 'เครื่องสำรองไฟและควบคุมไฟฟ้า (UPS)', null, null, '0', '0.00', '0', null, '0', '', '10', '14', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('249', '\"B\"081858-6730-002-0001/13', null, null, '1', 'จอภาพคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '16', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('250', '081852-7440-001-0001/50', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('251', '081857-7440-001-0001/83', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('252', '081860-7440-001-0001/109', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('253', '081856-7140-002-0001/12', null, null, '1', 'เครื่องพิมพ์ชนิดเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('254', '081851-7140-001-0001/44', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('255', '081859-7440-001-0001/99', null, null, '1', 'เครื่องไมโครคอมพิวเตอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '11', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('256', '081855-7140-001-0003/1', null, null, '1', 'เครื่องคอมพิวเตอร์ชนิดพกพา (I-PAD)', null, null, '0', '0.00', '0', null, '0', '', '10', '3', null, '0000-00-00 00:00:00', null, null);
INSERT INTO `pd_product` VALUES ('257', '\"B\"081857-7140-002-0001/15', null, null, '1', 'เครื่องพิมพ์แบบเลเซอร์', null, null, '0', '0.00', '0', null, '0', '', '10', '5', null, '0000-00-00 00:00:00', null, null);

-- ----------------------------
-- Table structure for `pd_status`
-- ----------------------------
DROP TABLE IF EXISTS `pd_status`;
CREATE TABLE `pd_status` (
  `pd_status_id` int(1) NOT NULL AUTO_INCREMENT,
  `pd_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pd_status_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of pd_status
-- ----------------------------
INSERT INTO `pd_status` VALUES ('1', 'ปรกติ');
INSERT INTO `pd_status` VALUES ('2', 'ส่งคืนพัสดุ(ใช้งานได้)');
INSERT INTO `pd_status` VALUES ('3', 'ส่งคืนพัสดุ(ชำรุด)');
INSERT INTO `pd_status` VALUES ('4', 'รอจำหน่าย');
INSERT INTO `pd_status` VALUES ('5', 'จำหน่าย');

-- ----------------------------
-- Table structure for `se_money_type`
-- ----------------------------
DROP TABLE IF EXISTS `se_money_type`;
CREATE TABLE `se_money_type` (
  `mon_id` int(2) NOT NULL AUTO_INCREMENT,
  `mon_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`mon_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of se_money_type
-- ----------------------------
INSERT INTO `se_money_type` VALUES ('1', 'ตกลงราคา');
INSERT INTO `se_money_type` VALUES ('2', 'e-market');

-- ----------------------------
-- Table structure for `trainingmoney`
-- ----------------------------
DROP TABLE IF EXISTS `trainingmoney`;
CREATE TABLE `trainingmoney` (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of trainingmoney
-- ----------------------------
INSERT INTO `trainingmoney` VALUES ('1', 'เงินบำรุง');
INSERT INTO `trainingmoney` VALUES ('2', 'เงินงบประมาณ');
INSERT INTO `trainingmoney` VALUES ('3', 'บริจาค');
INSERT INTO `trainingmoney` VALUES ('4', 'งบลงทุน');
INSERT INTO `trainingmoney` VALUES ('5', 'เงินนอกงบประมาณ');
INSERT INTO `trainingmoney` VALUES ('6', 'ไม่ทราบ');
