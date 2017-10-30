/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : hrd

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-10-24 11:30:28
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

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
INSERT INTO `pd_category` VALUES ('20', 'เก้าอี้เจ้าหน้าที่คอมพวิเตอร์', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('21', 'เก้าอี้ตัดผม', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('22', 'เก้าอี้ทำงานแบบหมุนได้', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('23', 'เก้าอี้ทำงานระดับ  7-9', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('24', 'เก้าอี้ทำงานระดับ 1-2', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('25', 'เก้าอี้ทำงานระดับ 3-6', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('26', 'เก้าอี้นวดไฟฟ้า', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('27', 'เก้าอี้นวดไฟฟ้า รุ่น LA-Z-TOUCH', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('28', 'เก้าอี้นั่งคอย  3  ที่นั่ง', '2', '71', '7110', '23');
INSERT INTO `pd_category` VALUES ('29', 'เก้าอี้บาร์หมุน', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('30', 'เก้าอี้ประชุมขนาด  16  คน', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('31', 'เก้าอี้ประชุมขนาด  12  คน', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('32', 'เก้าอี้ประชุมขนาด  18  คน', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('33', 'เก้าอี้ประชุมขนาด  20  คน', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('34', 'เก้าอี้ผู้มาติดต่อ', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('35', 'เก้าอี้พิมพ์ดีด', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('36', 'เก้าอี้ฟังคำบรรยาย', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('37', 'เก้าอี้เลคเชอร์', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('38', 'เก้าอี้สำนักงาน (ขา C)', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('39', 'เก้าอี้สำหรับเจ้าหน้าที่คอมพิวเตอร์', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('40', 'เก้าอี้หมุน ปรับระดับขึ้น - ลงได้', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('41', 'เก้าอี้เอนกประสงค์', '2', '71', '7110', '6');
INSERT INTO `pd_category` VALUES ('42', 'เคาน์เตอร์ห้องสมุด', '2', '71', '7195', '4');
INSERT INTO `pd_category` VALUES ('43', 'เคาร์เตอร์ห้องรับรอง', '2', '71', '7195', '4');
INSERT INTO `pd_category` VALUES ('44', 'ชั้นตะแกรง 3 ชั้น', '2', '71', '7110', '30');
INSERT INTO `pd_category` VALUES ('45', 'ชั้นไม้วางเอกสาร', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('46', 'ชั้นวางของ', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('47', 'ชั้นวางของ 4 ชั้น', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('48', 'ชั้นวางของยาว  3  เมตร', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('49', 'ชั้นวางทีวี ', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('50', 'ชั้นวางทีวี 21 นิ้ว', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('51', 'ชั้นวางหนังสือ  4  ชั้น', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('52', 'ชั้นวางหนังสือ  4  ชั้น  (แบบไม้)', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('53', 'ชั้นวางหนังสือพิมพ์', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('54', 'ชั้นวางหนังสือพิมพ์ (ไม้)', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('55', 'ชั้นวางเอกสาร ', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('56', 'ชั้นวางเอกสาร 3 ชั้น', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('57', 'ชั้นเอนกประสงค์ 2 หน้า 5 ชั้น', '2', '71', '7110', '16');
INSERT INTO `pd_category` VALUES ('58', 'ชุดรับแขก', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('59', 'ชุดรับแขก  (สีน้ำเงิน)', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('60', 'ชุดรับแขก (พร้อมโต๊ะกลาง)', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('61', 'ชุดรับแขก (สีเขียว)', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('62', 'ชุดรับแขก (สีบรอน)   เก้าอี้ยาว', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('63', 'ชุดรับแขก (หลุย)', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('64', 'ชุดรับแขกพร้อมโต๊ะกลาง ', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('65', 'ชุดรับแขกไม้', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('66', 'ชุดรับแขกสีน้ำตาล', '2', '71', '7110', '15');
INSERT INTO `pd_category` VALUES ('67', 'โซฟา', '2', '71', '7105', '7');
INSERT INTO `pd_category` VALUES ('68', 'ตู้ Rack', '2', '71', '7110', '17');
INSERT INTO `pd_category` VALUES ('69', 'ตู้กระจกชนิดบานเลื่อน 4 ฟุต', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('70', 'ตู้กระจกติดฝาผนัง', '2', '71', '7110', '21');
INSERT INTO `pd_category` VALUES ('71', 'ตู้กระจกบานเลื่อน  4 ฟุต (เหล็ก)', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('72', 'ตู้กระจกบานเลื่อน 2 ชั้น', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('73', 'ตู้กระจกบานเลื่อน 2 ชั้น ขนาด 4 ฟุต', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('74', 'ตู้กระจกบานเลื่อน ทึบ (เหล็ก)', '2', '71', '7125', '2');
INSERT INTO `pd_category` VALUES ('75', 'ตู้เก็บของ 4 ช่อง', '2', '71', '7110', '22');
INSERT INTO `pd_category` VALUES ('76', 'ตู้เก็บของเล่น', '2', '71', '7110', '22');
INSERT INTO `pd_category` VALUES ('77', 'ตู้เก็บวัสดุเทป - แผ่น ซีดี', '2', '71', '7125', '2');
INSERT INTO `pd_category` VALUES ('78', 'ตู้เก็บวัสดุ-อุปกรณ์', '2', '71', '7125', '2');
INSERT INTO `pd_category` VALUES ('79', 'ตู้เก็บเสื้อผ้า', '2', '71', '7110', '81');
INSERT INTO `pd_category` VALUES ('80', 'ตู้เก็บเสื้อผ้าขนาด  4  ฟุต  2  บาน', '2', '71', '7110', '18');
INSERT INTO `pd_category` VALUES ('81', 'ตู้เก็บเสื้อผ้าขนาด  4  ฟุต  3  บาน', '2', '71', '7110', '18');
INSERT INTO `pd_category` VALUES ('82', 'ตู้เก็บหนังสือ', '2', '71', '7110', '1');
INSERT INTO `pd_category` VALUES ('83', 'ตู้เก็บเอกสาร 3 ลิ้นชัก', '2', '71', '7125', '2');
INSERT INTO `pd_category` VALUES ('84', 'ตู้เก็บเอกสารชนิด  2  ตอน เชื่อมต่อกัน', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('85', 'ตู้เก็บเอกสารชนิดติดฝาผนังวางพื้น  2  ชั้น', '2', '71', '7110', '1');
INSERT INTO `pd_category` VALUES ('86', 'ตู้แขวนอลูมิเนียมสี่เหลี่ยม แบบเปิด 2 บาน', '2', '71', '7110', '32');
INSERT INTO `pd_category` VALUES ('87', 'ตู้โชว์', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('88', 'ตู้โชว์กระจก 4 ชั้น', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('89', 'ตู้ดรรชนี  15  ลิ้นชัก', '2', '71', '7110', '22');
INSERT INTO `pd_category` VALUES ('90', 'ตู้ติดผนังวางพื้น - วางบน', '2', '71', '7125', '1');
INSERT INTO `pd_category` VALUES ('91', 'ตู้นิรภัย', '2', '71', '7110', '4');
INSERT INTO `pd_category` VALUES ('92', 'ตู้บานเลื่อน 2 ชั้น 4 ฟุต', '2', '71', '7110', '17');
INSERT INTO `pd_category` VALUES ('93', 'ตู้ไม้  3  ชั้น', '2', '71', '7110', '28');
INSERT INTO `pd_category` VALUES ('94', 'ตู้ไม้ 4 ชั้น', '2', '71', '7110', '27');
INSERT INTO `pd_category` VALUES ('95', 'ตู้รางเลื่อนได้', '2', '71', '7110', '25');
INSERT INTO `pd_category` VALUES ('96', 'ตู้ล็อคเกอร์ 18 ประตู', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('97', 'ตู้ลิ้นชัก 15 ลิ้นชัก', '2', '71', '7110', '12');
INSERT INTO `pd_category` VALUES ('98', 'ตู้วางโทรทัศน์  (ใหญ่)', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('99', 'ตู้วางเอกสาร ', '2', '71', '7110', '1');
INSERT INTO `pd_category` VALUES ('100', 'ตู้สำหรับจัดเก็บเครื่องคอมพิวเตอร์และอุปกรณ์', '2', '71', '7125', '2');
INSERT INTO `pd_category` VALUES ('101', 'ตู้เสื้อผ้า', '2', '71', '7110', '18');
INSERT INTO `pd_category` VALUES ('102', 'ตู้เสื้อผ้า (8 ประตู)', '2', '71', '7110', '18');
INSERT INTO `pd_category` VALUES ('103', 'ตู้ใส่แฟ้ม 2 ชั้น', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('104', 'ตู้ใส่แฟ้ม 4 ชั้น', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('105', 'ตู้ใส่อุปกรณ์เครื่องเสียง', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('106', 'ตู้ใส่เอกสารติดผนังวางพื้น 2 ชั้น', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('107', 'ตู้หนังสือ (ตู้ไม้กระจก 3 ชั้น)', '2', '71', '7110', '1');
INSERT INTO `pd_category` VALUES ('108', 'ตู้เหล็ก 15 ลิ้นชัก', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('109', 'ตู้เหล็ก 2 บานเปิด', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('110', 'ตู้เหล็ก ชนิด 4 ลิ้นชัก', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('111', 'ตู้เหล็กเก็บเอกสาร ชนิด 4 ลิ้นชัก', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('112', 'ตู้เหล็กชนิด  15  ลิ้นชัก', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('113', 'ตู้เหล็กชนิด  2  บาน', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('114', 'ตู้เหล็กบานเลื่อน ขนาด 4 ฟุต 2 ชั้น', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('115', 'ตู้เหล็กบานเลื่อนทึบ (เหล็ก)', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('116', 'เตียงพร้อมที่นอน', '2', '71', '7105', '3');
INSERT INTO `pd_category` VALUES ('117', 'โต๊ะกระจก', '2', '71', '7110', '14');
INSERT INTO `pd_category` VALUES ('118', 'โต๊ะกลม', '2', '71', '7110', '9');
INSERT INTO `pd_category` VALUES ('119', 'โต๊ะเครื่องแป้ง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('120', 'โต๊ะญี่ปุ่น', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('121', 'โต๊ะทำงานเข้ามุมชุดโค้ง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('122', 'โต๊ะทำงานพร้อมเก้าอี้ระดับ 1-2', '2', '71', '7110', '25');
INSERT INTO `pd_category` VALUES ('123', 'โต๊ะทำงานระดับ 1-2  ', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('124', 'โต๊ะทำงานระดับ 1-3', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('125', 'โต๊ะทำงานระดับ 3-6', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('126', 'โต๊ะทำงานระดับ 3-7', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('127', 'โต๊ะทำงานระดับ 7-9', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('128', 'โต๊ะทำงานระดับ 3-8', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('129', 'โต๊ะประชุม 10 ที่นั่ง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('130', 'โต๊ะประชุม ขนาด 6 ที่นั่ง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('131', 'โต๊ะประชุม(1x2)', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('132', 'โต๊ะประชุมขนาด  12  คน', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('133', 'โต๊ะประชุมขนาด  18  คน', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('134', 'โต๊ะประชุมขนาด  20  คน', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('135', 'โต๊ะประชุมขนาด 16 คน (โต๊ะเข้ามุม)', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('136', 'โต๊ะประชุมขนาด 6 ที่นั่ง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('137', 'โต๊ะปิงปอง', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('138', 'โต๊ะผู้บริหาร', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('139', 'โต๊ะพับพร้อมเก้าอี้ 4 ตัว', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('140', 'โต๊ะพับเหล็กขาสวิง 4 ฟุต', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('141', 'โต๊ะพิมพ์ดีด', '2', '71', '7110', '17');
INSERT INTO `pd_category` VALUES ('142', 'โต๊ะไม้ 5 ฟุต', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('143', 'โต๊ะวางเครื่องคอมพิวเตอร์', '2', '71', '7110', '21');
INSERT INTO `pd_category` VALUES ('144', 'โต๊ะวางเครื่องพิมพ์', '2', '71', '7110', '21');
INSERT INTO `pd_category` VALUES ('145', 'โต๊ะวางโทรทัศน์', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('146', 'โต๊ะวางโทรทัศน์ขนาด  14  นิ้ว', '2', '71', '7195', '8');
INSERT INTO `pd_category` VALUES ('147', 'โต๊ะเอนกประสงค์  (พับไม่ได้)', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('148', 'โต๊ะเอนกประสงค์ (โต๊ะอาหาร)', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('149', 'โต๊ะเอนกประสงค์ (พับได้)', '2', '71', '7110', '7');
INSERT INTO `pd_category` VALUES ('150', 'ที่นอนยางพารา (3.5 ฟุต)', '2', '71', '7105', '13');
INSERT INTO `pd_category` VALUES ('151', 'ม้าขึ้นเตียง', '2', '71', '7105', '2');
INSERT INTO `pd_category` VALUES ('152', 'ล็อกเก็บยา   4  ชั้น  (เป็นไม้)', '2', '71', '7110', '2');
INSERT INTO `pd_category` VALUES ('153', 'ล็อกเก็บยา  3  ชั้น', '2', '71', '7110', '2');
