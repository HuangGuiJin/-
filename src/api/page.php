<?php
//连接数据库
 include 'connect.php';

 //接收参数
$page=isset($_GET['page']) ? $_GET['page'] : '1';
$qty=isset($_GET['qty']) ? $_GET['qty'] : '20';

//echo $qty;

//计算下标,每页显示多少条内容
$index=($page-1)*$qty;

//查询语句
$sql="SELECT * FROM goodlist LIMIT $index,$qty";

//执行语句
$reg=$conn->query($sql);
//var_dump($reg);
//拿到结果集,获取数据
$res=$reg->fetch_all(MYSQL_ASSOC);
//var_dump($res);

//再查询全部语句
$sql2="SELECT * FROM goodlist";

//执行语句
$reg2=$conn->query($sql2);
//var_dump($reg2);
//拿到结果集，num_rows，记录总条数；
$row=$reg2->num_rows;
//var_dump($row);//24条

//把上面的结果数据，做成关联数组，传给前端

$goodlist=array(
    'total'=>$row,//总条数
    'datalist'=>$res,//查询到的数据；
    'page'=>$page,
	'qty'=>$qty

);

//var_dump($goodlist);
//转字符串，防止转义中文给前端
echo json_encode($goodlist,JSON_UNESCAPED_UNICODE);


$reg->close();//关掉结果集
$reg2->close();//关掉结果集
$conn->close();//关掉总结果集



?>