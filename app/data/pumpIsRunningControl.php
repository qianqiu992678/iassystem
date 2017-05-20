<?php
//header('Content-Type: application/json');
@$pumpName=$_REQUEST['pumpName'] or die('{"code":202,"msg":"pumpName required"}');
@$isRunning=$_REQUEST['isRunning'] or die('{"code":202,"msg":"isRunning required"}');
$conn=mysqli_connect('127.0.0.1','root','','iassystem','3306');
$sql='SET NAMES UTF8';
echo "$pumpName";
echo "$isRunning";
mysqli_query($conn,$sql);
$sql="UPDATE pumps SET isRunning='$isRunning' WHERE pumpName='$pumpName'";
$result=mysqli_query($conn,$sql);
var_dump($result);