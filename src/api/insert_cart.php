<?php
	//插入数据接口(存数据)
	header("content-type:text/html;charset=utf-8");
	
	//连接数据库
	include 'connect.php';
	
	//接收参数
	//$u_id = isset($_POST['userid']) ? $_POST['userid'] : '' ;
	$g_id = isset($_GET['goodsid']) ? $_GET['goodsid'] : '' ;
	
	//写插入语句	insert into <表名> [(<字段名1>[,..<字段名n > ])] values ( 值1 )[, (值n )];
	$sql = "insert into cart_inf(goods_id) values('$g_id')";
	//执行查询语句
	$res = $conn->query($sql);
	
	if($res){
		echo '插入成功';
	}
	
	//关闭数据库连接
	$conn->close();
	
?>