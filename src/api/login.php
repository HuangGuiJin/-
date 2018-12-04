<?php
	//编码设置
	header("content-type:text/html; charset=utf-8");
	
	//连接数据库
	include 'connect.php';
	
	//三目运算:前端不传数据的时候，也不会出错
	$phone = isset($_POST['userphone']) ? $_POST['userphone'] : '' ;//前端不传数据过来就为空，有数据传过来就用前端数据
	$psw = isset($_POST['password']) ? $_POST['password'] : '' ;
	//echo $name;
	
	//查询语句（查询之前要连接数据库）
	$sql = "select * from user_info where user_phone='$phone' and user_pass='$psw'";//user_name是数据库里面的字段名
	//执行语句
	$res = 	$conn->query($sql);
//	var_dump($res);
	$row=$res->fetch_all(MYSQLI_ASSOC);
//	echo $res->num_rows;
	if($res->num_rows>0){//num_rows>0代表有数据
	  echo json_encode($row,JSON_UNESCAPED_UNICODE);
	}else{
		echo '-1';
	}
?>