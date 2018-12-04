<?php
////查询数据库，获取去前端的接口；
//连接数据库
   include 'connect.php';

//接收参数
$id=isset($_GET['id']) ? $_GET['id'] : '1';

//echo $id;

//SELECT *FROM goodlist;查询数据库语句
$sql="SELECT * FROM goodlist WHERE gid = $id";
//////echo $sql;
//////执行语句
$reg=$conn->query($sql);
////var_dump($reg);
//////获取里面的结果集，拿到数据
$res=$reg->fetch_all(MYSQLI_ASSOC);
////var_dump($res);
//////拿到是一个数组，转成字符串,并传给前端
////
echo json_encode($res,JSON_UNESCAPED_UNICODE);
//?>