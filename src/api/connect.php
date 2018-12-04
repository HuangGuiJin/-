<?php
	//连接数据库接口
	
	//配置信息
	$servername = "localhost";//本地数据库
	$username = "root";//用户名
	$password = "";//用户密码
	$dbname = "zol";//要连接的数据库名称
	
	//创建连接，实例化
	$conn = new mysqli($servername,$username,$password,$dbname);
	//var_dump($conn);
	
	//检测连接是否成功
	if($conn->connect_error){
		//如果失败并打印失败原因
		die("连接失败:" . $conn->connect_error);
	}
	//如果成功
//	echo "连接成功";
	
	//查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
?>