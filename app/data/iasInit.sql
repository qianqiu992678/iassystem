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
#id,舱名，舱类型，舱高，总仓容，当前液位，当前仓容
INSERT INTO tanks VALUES
(NULL,'TK61(PS)','ballast/freshwater','11','200','5.5','100'),
(NULL,'TK09(PS)','ballast','11','200','5.5','100'),
(NULL,'TK01(PS)','ballast','11','300','5.5','100'),
(NULL,'TK12(PS)','ballast','11','100','5.5','100'),
(NULL,'TK13(PS)','ballast','11','400','5.5','100'),
(NULL,'TK14(PS)','ballast','11','300','5.5','100'),
(NULL,'TK15(PS)','ballast','11','400','5.5','100'),
(NULL,'TK16(PS)','ballast','11','300','5.5','100'),
(NULL,'TK17(PS)','ballast','11','200','5.5','100'),
(NULL,'TK24(PS)','ballast','11','200','5.5','100'),
(NULL,'TK25(PS)','ballast','11','200','5.5','100'),
(NULL,'TK20(PS)','ballast','11','200','5.5','100'),
(NULL,'TK19(PS)','ballast','11','200','5.5','100'),
(NULL,'TK18(PS)','ballast','11','200','5.5','100'),
(NULL,'TK21(PS)','ballast','11','200','5.5','100'),
(NULL,'TK26(PS)','ballast','11','200','5.5','100'),
(NULL,'TK27(PS)','ballast','11','200','5.5','100'),
(NULL,'TK31(PS)','ballast','11','200','5.5','100'),
(NULL,'TK32(PS)','ballast','11','200','5.5','100'),
(NULL,'TK35(PS)','ballast','11','200','5.5','100'),
(NULL,'TK62(PS)','ballast/freshwater','11','200','5.5','100'),
(NULL,'TK36(PS)','ballast','11','200','5.5','100'),

(NULL,'TK02(PS)','freshwater','11','200','5.5','100'),
(NULL,'TK03(SB)','freshwater','11','200','5.5','100'),
(NULL,'TK05(PS)','freshwater','11','200','5.5','100'),
(NULL,'TK06(SB)','freshwater','11','200','5.5','100'),
(NULL,'TK29(PS)','freshwater','11','200','5.5','100'),
(NULL,'TK30(SB)','freshwater','11','200','5.5','100'),
(NULL,'TK33(PS)','freshwater','11','200','5.5','100'),
(NULL,'TK34(SB)','freshwater','11','200','5.5','100'),
;
