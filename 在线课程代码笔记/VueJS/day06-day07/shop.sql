/*
Navicat MySQL Data Transfer

Source Server         : llr
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-03-02 17:20:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(100) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '家用电器');
INSERT INTO `category` VALUES ('2', '图书影像');
INSERT INTO `category` VALUES ('3', '手机数码');
INSERT INTO `category` VALUES ('4', '电脑办公');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(100) NOT NULL AUTO_INCREMENT,
  `category_id` int(100) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_dprice` decimal(10,2) DEFAULT NULL,
  `product_img_url` varchar(255) DEFAULT NULL,
  `product_num` int(11) DEFAULT NULL,
  `product_detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', '平板电视', '5999.00', '6699.00', 'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175557366.jpg', '99999', '平板电视详情信息');
INSERT INTO `product` VALUES ('2', '1', '冰箱', '3999.00', '4999.00', 'https://x.dscmall.cn/storage/images/201703/thumb_img/0_thumb_G_1490175463945.jpg', '66666', '冰箱产品详情信息');
INSERT INTO `product` VALUES ('3', '2', '古典音乐', '59.00', '69.00', 'https://x.dscmall.cn/storage/images/errorImg.png', '99999', '古典音乐图书详情信息');
INSERT INTO `product` VALUES ('4', '2', '摇滚说唱', '39.00', '46.00', 'https://x.dscmall.cn/storage/images/errorImg.png', '77777', '摇滚说唱详情信息');

-- ----------------------------
-- Table structure for product_image
-- ----------------------------
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image` (
  `image_id` int(100) NOT NULL AUTO_INCREMENT,
  `product_id` int(100) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_image
-- ----------------------------
INSERT INTO `product_image` VALUES ('1', '1', 'https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490175557450.jpg');
INSERT INTO `product_image` VALUES ('2', '1', 'https://x.dscmall.cn/storage/images/201703/goods_img/_P_1490175562213.jpg');
INSERT INTO `product_image` VALUES ('3', '2', 'https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536533783480.jpg');
INSERT INTO `product_image` VALUES ('4', '2', 'https://x.dscmall.cn/storage/images/201809/goods_img/0_P_1536533762384.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL,
  `pay_password` varchar(255) DEFAULT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'llr', '123456', null, '13673618137', '河南郑州', '');
INSERT INTO `user` VALUES ('2', '张三', '654321', null, null, null, null);
