<?php
	

	$mima=$_GET['mima'];

	//连接数据库
	include 'connect.php';//相当于复制connect.php的文件内容过这里
	//写查询语句 ：
//	if($mima == 'sell'){
//		$sql="SELECT * FROM goods ORDER BY sell";
//	}
	if($mima == 1){
		$sql="SELECT * FROM goodlist ORDER BY price";
	}
	if($mima == 2){
		$sql="SELECT * FROM goodlist ORDER BY price DESC";
	}
	
	//执行语句：得到结果集
	$res=$conn->query($sql);
	
	//获取内容部分
	$data=$res->fetch_all(MYSQLI_ASSOC);//获取内容部分
	
	echo json_encode($data,JSON_UNESCAPED_UNICODE);
	
	$res->close();//关掉结果集

	$conn->close();//断开连接
?>