SET NAMES UTF8;
DROP DATABASE IF EXISTS iassystem;
CREATE DATABASE iassystem CHARSET=UTF8;
USE iassystem;
#舱室信息表
#tankId  舱室名字  舱室类型  总高  总容积  当前液位  当前容积
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
(NULL,'TK34(SB)','freshwater','11','200','5.5','100');
#泵浦信息表
#pumpId  泵名字  全速  当前速度  额定功率
CREATE TABLE pumps(
    pumpId INT PRIMARY KEY AUTO_INCREMENT,
    pumpName VARCHAR(32),
    fullSpeed INT,
    ratedPower INT,
    isRemote BOOLEAN,
    isRunning BOOLEAN,
    currentSpeed INT
);
INSERT INTO pumps VALUES
(NULL,'ballastdrillPump','1800','50',true,false,'900'),
(NULL,'freshwaterPump','1800','50',true,false,'800'),
(NULL,'fueloilPump','1800','50',true,false,'700');
##所有报警表
CREATE TABLE alarms(
    alarmId INT PRIMARY KEY AUTO_INCREMENT,
    alarmName VARCHAR(32),
    alarmClass VARCHAR(8),
    isActived BOOLEAN,
    systemLocate VARCHAR(32)
);
INSERT INTO alarms VALUES
(NULL,'bilge_001','LAH',1,'bilgeSystem'),
(NULL,'bilge_002','LAH',1,'bilgeSystem'),
(NULL,'bilge_003','LAH',0,'bilgeSystem'),
(NULL,'bilge_004','LAH',0,'bilgeSystem'),
(NULL,'bilge_005','LAH',1,'bilgeSystem'),
(NULL,'bilge_006','LAH',1,'bilgeSystem'),
(NULL,'bilge_007','LAH',0,'bilgeSystem'),
(NULL,'bilge_008','LAH',0,'bilgeSystem'),
(NULL,'bilge_009','LAH',1,'bilgeSystem'),
(NULL,'bilge_010','LAH',1,'bilgeSystem'),
(NULL,'bilge_011','LAH',0,'bilgeSystem'),
(NULL,'bilge_012','LAH',0,'bilgeSystem'),
(NULL,'bilge_013','LAH',1,'bilgeSystem'),
(NULL,'bilge_014','LAH',1,'bilgeSystem'),
(NULL,'bilge_015','LAH',0,'bilgeSystem'),
(NULL,'bilge_016','LAH',0,'bilgeSystem'),
(NULL,'bilge_017','LAH',1,'bilgeSystem'),
(NULL,'bilge_018','LAH',1,'bilgeSystem'),
(NULL,'bilge_019','LAH',0,'bilgeSystem'),
(NULL,'bilge_020','LAH',0,'bilgeSystem'),
(NULL,'bilge_021','LAH',1,'bilgeSystem'),
(NULL,'bilge_022','LAH',1,'bilgeSystem'),
(NULL,'bilge_023','LAH',0,'bilgeSystem'),
(NULL,'bilge_024','LAH',0,'bilgeSystem'),
(NULL,'bilge_025','LAH',1,'bilgeSystem'),
(NULL,'bilge_026','LAH',1,'bilgeSystem'),
(NULL,'bilge_027','LAH',0,'bilgeSystem'),
(NULL,'bilge_028','LAH',0,'bilgeSystem'),
(NULL,'bilge_029','LAH',1,'bilgeSystem'),
(NULL,'bilge_030','LAH',1,'bilgeSystem'),
(NULL,'bilge_031','LAH',0,'bilgeSystem');

