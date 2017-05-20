<?php
header('Content-Type: application/json');
$conn=mysqli_connect('127.0.0.1','root','','iassystem','3306');
$sql='SET NAMES UTF8';
mysqli_query($conn,$sql);
$sql='SELECT * FROM pumps';
$result=mysqli_query($conn,$sql);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($list);



