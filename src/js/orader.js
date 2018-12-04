
//封装数据渲染
function fn(arr){
	  var res=arr.map(function(item){
     	//字符串模板
			     	return `<li class="Hard_li" data-id="${item.id}">
							<img src="../img/${item.img}"/>
							<a href="">'${item.name}'</a>
							<p>${item.price}</p>
							<p>${item.num}</p>
							<p>${item.shop}</p>
						</li>`
			     	
			     }).join('');
			     $('.Hard_ul1').html(res);

	
}








$(function(){

$('#default_good').click(function(){
//	console.log(22);
	
		var mima=1;
//		console.log(33)
		$.ajax({
			type:"get",
			url:"../api/click.php",
			async:true,
			data:{
				'mima':1	
			},
			success:function(str){
//				console.log(str);
             var arr=JSON.parse(str);
//           console.log(arr);
              fn(arr);
			}	
});
		
});

$('#default_good2').click(function(){
	
		var mima=2;
//		console.log(33)
		$.ajax({
			type:"get",
			url:"../api/click.php",
			async:true,
			data:{
				'mima':2	
			},
			success:function(str){
//				console.log(str);
             var arr=JSON.parse(str);
//           console.log(arr);
              fn(arr);
			}	
});
		
});










});