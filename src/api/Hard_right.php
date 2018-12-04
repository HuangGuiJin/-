<?php
//连接数据库
 include 'connect.php';
 
 //从数据库查询语句

 $sql=" SELECT * FROM list";
 
 //执行数据库的语句
 $res=$conn->query($sql);
// var_dump($res);

//拿到去全部数据
$reg=$res->fetch_all(MYSQL_ASSOC);
//var_dump($reg);

echo json_encode($reg,JSON_UNESCAPED_UNICODE);



?>