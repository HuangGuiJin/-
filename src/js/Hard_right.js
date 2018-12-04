document.addEventListener('DOMContentLoaded',function(){
	

var list=document.querySelector('.Hard_ul2');
$.ajax({
	type:"get",
	url:"../api/Hard_right.php",
	async:true,
	data:{
		'id':1,
		'img':'list_img/goodlist.jpg',
		'name':'Raer 炼狱蝰蛇穿越火线潜伏者特别版鼠标 ',
		'price':'￥299.00',
		'num':'销量数 199',
		'shop':'甲骨龙旗舰店'
		
	},
	   success:function(str){
//	   	console.log(str);
        //数据渲染
        var arr=JSON.parse(str);
//      console.log(arr);
        var res=arr.map(function(item){
        	return `<li>
				<img src="../img/${item.img}"/>
				<a href="">${item.name}</a>
				<p>${item.price}</p>
				<p>${item.num}</p>
				<p>${item.shop}</p>
	 	        </li>`
        	
        }).join('');
        
	   	  list.innerHTML=res;
	   }
});


});