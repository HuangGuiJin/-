<?php
	//接口：接收登录用户信息，刷新登录面板
	
	//编码设置
	header("content-type:text/html; charset=utf-8");
	
	//连接数据库
	include 'connect.php';
	
	//三目运算:前端不传数据的时候，也不会出错
	$uid = isset($_POST['userid']) ? $_POST['userid'] : '' ;
//	$uid='7';
	$sql = "select * from user_info where user_id='$uid'";
	//执行语句
	$res = 	$conn->query($sql);
//	echo $res->num_rows;
	
	if($res->num_rows>0){//num_rows>0代表有数据
		//有这个用户存在时
		$row=$res->fetch_all(MYSQLI_ASSOC);
		echo json_encode($row,JSON_UNESCAPED_UNICODE);
	}
	
?>