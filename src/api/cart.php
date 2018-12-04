<?php

header("content-type:text/html;charset=utf-8");

$ins = isset($_POST['ins']) ? $_POST['ins'] : '';

if ($ins == 'insert_data') {
	insert_data();
}

if ($ins == 'select_datas') {
	select_datas();
}

if ($ins == 'select_datas2') {
	select_datas2();
}

if ($ins == 'deldatas') {
	deldatas();
}

function insert_data() {
	//连接数据库
	include 'connect.php';

	//接收参数
	$u_id = isset($_POST['userid']) ? $_POST['userid'] : '';
	$g_id = isset($_POST['goodsid']) ? $_POST['goodsid'] : '';

	//写插入语句	insert into <表名> [(<字段名1>[,..<字段名n > ])] values ( 值1 )[, (值n )];
	$sql = "insert into cart_inf(user_id,goods_id) values('$u_id','$g_id')";
	//执行查询语句
	$res = $conn -> query($sql);

	if ($res) {
		echo '插入成功';
	}

	//关闭数据库连接
	$conn -> close();
}

function select_datas() {
	//连接数据库
	include 'connect.php';

	//接收参数
	$u_id = isset($_POST['userid']) ? $_POST['userid'] : '';
	$g_id = isset($_POST['goodsid']) ? $_POST['goodsid'] : '';

	$sql = "select * from cart_inf where user_id='$u_id'";
	//执行查询语句
	$res = $conn -> query($sql);

	$row = $res -> fetch_all(MYSQLI_ASSOC);

	echo json_encode($row, JSON_UNESCAPED_UNICODE);

	//关闭数据库连接
	$conn -> close();
}

function select_datas2() {
	//连接数据库
	include 'connect.php';

	//接收参数
	$u_id = isset($_POST['userid']) ? $_POST['userid'] : '';
	$g_id = isset($_POST['goodsid']) ? $_POST['goodsid'] : '';

	$sql = "select * from goodlist where gid='$g_id'";
	//执行查询语句
	$res = $conn -> query($sql);

	$row = $res -> fetch_all(MYSQLI_ASSOC);

	echo json_encode($row, JSON_UNESCAPED_UNICODE);

	//关闭数据库连接
	$conn -> close();
}

function deldatas() {
	//删除数据
	//连接数据库

	include 'connect.php';
	//接收参数
	$id = $_POST['id'];
	//		$id=2;
	//写删除语句
	$sql = "delete from cart_inf where goods_id='$id'";

	//执行查询语句
	$res = $conn -> query($sql);

	if ($res) {
		echo '删除成功';
	}

	//关闭连接数据库

	$conn -> close();
	//关闭数据库的链接
}
?>