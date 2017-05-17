SET NAMES UTF8;
DROP DATABASE IF EXISTS iassystem;
CREATE DATABASE iassystem CHARSET=UTF8;
USE iassystem;
CREATE TABLE tanks(
  tankId INT PRIMARY KEY AUTO_INCREMENT,
  tankName VARCHAR(8),
  tankClass VARCHAR(8),
  fullHeight FLOAT(6,3),
  fullVolumn FLOAT(7,3),
  currentHeight FLOAT(6,3),
  currentVolumn FLOAT(7,3)
);
INSERT INTO tanks VALUES
(NULL,'TK61(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK09(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK01(PS)','Ballast/Drill','11','300','5.5','100'),
(NULL,'TK12(PS)','Ballast/Drill','11','100','5.5','100'),
(NULL,'TK13(PS)','Ballast/Drill','11','400','5.5','100'),
(NULL,'TK14(PS)','Ballast/Drill','11','300','5.5','100'),
(NULL,'TK15(PS)','Ballast/Drill','11','400','5.5','100'),
(NULL,'TK16(PS)','Ballast/Drill','11','300','5.5','100'),
(NULL,'TK17(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK24(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK25(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK20(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK19(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK18(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK21(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK26(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK27(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK31(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK32(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK35(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK62(PS)','Ballast/Drill','11','200','5.5','100'),
(NULL,'TK36(PS)','Ballast/Drill','11','200','5.5','100');
