$(document).ready(function() {
	var get_uid = getCookie('user_id');
	//console.log(get_uid);
	
	$.ajax({
		type:"post",
		url:"../api/cart.php",
		async:true,
		data:{
			'ins':'select_datas',
			'userid':get_uid
		},
		success:function(str){
			//console.log(str)
			var data = JSON.parse(str);
			//console.log(data);
			for (var i=0; i<data.length; i++) {
				//console.log(data[i].goods_id)
				var goods_id = data[i].goods_id;
//				console.log(goods_id);
				$.ajax({
					type:"post",
					url:"../api/cart.php",
					async:true,
					data:{
						'ins':'select_datas2',
						'goodsid':goods_id
					},
					success:function(str){
						//console.log(str);
						var data2 = JSON.parse(str);
						//console.log(data2);
						mycarts(data2);
					}
				});
			}
			
			//数据渲染
			function mycarts(data2) {
				var html = '';
				for(var i = 0; i < data2.length; i++) {
					html+=`
						<div class="bigcart_li1">
							<div class="bigcart_small">
								<input id="check" class="check" type="checkbox" value="" />
							    <img src="../img/${data2[i].img}" style="width:40px;height:50px"/>
							    <h3 style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">${data2[i].name}</h3>
							    <p>颜色：黑色</p>
							    <p>套装：官方标配</p>
							    
							</div>
							
							<div class="bigcart_price">
								 <span class="price">${data2[i].price}</span>
							</div>
							<div class="bigcart_num">
								<span class="cutnum" style="cursor: pointer;">-</span><input type="text" name="" id="" value="1"  class="nownum"/><span  class="addnum" style="cursor: pointer;">+</span>
							</div>
							<div class="bigcart_subtotal">
								<span class="subtotal">${data2[i].price}</span>
							</div>
							<div class="bigcart_del">
								<a href="javascript:;">移入收藏夹</a><br />
							    <a href="javascript:;" class="del">删除</a>
							</div>
						
						</div>
					`;
				}
				$('.bigcart').append(html);
				
			}

			
		}
	});
	
});




	/*
	  需求：
	   加数量
	   减数量
	  小计
	  全选
	  总价
	 */


//事件委托
var arr = [];//存被选中的复选框下标

   //加数量
   
   
$('.bigcart').on('click','.addnum',function(){
//	console.log(333);
   var val=$(this).prev().val();
    val++;
    //设置一个数量范围
    if(val>=10){
    	val=10;
    }
//  console.log(val);
    $(this).prev().val(val);
	subTotal($(this));
	
	
});


//减数量
   
$('.bigcart').on('click','.cutnum',function(){
	var val=$(this).next().val();
	 val--;
	 if(val<=0){
	 	val=0;
	 	
	 }
	 $(this).next().val(val);
	subTotal($(this));

});
   
   
//小计；

function subTotal(now) { 
		var num = now.parent().find('input').val(); //数量
//       console.log(num);
		var price = now.parent().prev().children().html();
//		  console.log(price);
		price = $.trim(price); //工具方法：去除前后空格
//		price = price.substring(0);
				console.log(price);
		var all = (num * price).toFixed(2); //保留两个小数，小计：数量*单价
		now.parent().next().html('￥&nbsp;' + all);
       updateNum();
}



//删除当行

$('.bigcart').on('click','.del', function() {
	var mes = confirm('您确定要删除该行吗？');
	if(mes) {
		$(this).parent().parent().remove();
		//接口3：删除数据库的某行
		$.ajax({
			type:"post",
			url:"../api/cart.php",
			async:true,
			
		});

	}
	update(); //最后一行是否显示判断
	updateNum();
});



//更新状态

function update() {
	if($('.addnum').size() == 0) {
		//意味着没有商品数据了
		$('.bigcart').css('display', 'none');
	}
}


//全选


var isok = true;
$('.bigcart').on('click','.bigcheck',function(){
	console.log(121);
	if(isok) {
		//全选 attr()只能帮到普通属性  id class title ;prop()添加有行为的属性：一般用在单选和复选框
		$(this).prop('checked', 'checked'); //设置
//		console.log($(this));
		$(this).parent().parent().find('.check').prop('checked', 'checked');

	} else {
		//不选
		$(this).find('input').removeAttr('checked');
//		console.log($(this));
		$(this).parent().parent().find('.check').removeAttr('checked');
	}
	isok = !isok;
	updateNum();
});


//复选框被勾选
$('.bigcart').on('click','.check', function() {
updateNum();
//console.log(22);
	if(arr.length == $(this).size()) { //控制是否全选勾上
		//证明全被勾选
//		 console.log(22);
		$(this).parent().parent().parent().find('.bigcheck').prop('checked', 'checked');
		isok = false;
	} else {
		$(this).parent().parent().parent().find('.bigcheck').removeAttr('checked');
		isok = true;
//    console.log(223);
	}


});


//总数量和总价格改变：封装成函数
	
function updateNum() {
	//空数组：存被勾选的行的下标
	arr.length = 0;
	var le = $('.check').size(); //复选框的总个数
//	  console.log(le);
	for(var i = 0; i < le; i++) {
		if($('.check').eq(i).prop('checked')) {
			//意味着这一行被勾选
			arr.push(i);
		}
	}

//			console.log(arr);

	//统计被勾选的行对应的数量，累加放到底部对应位置
	//统计被勾选的行对应的小计，累加放到底部对应位置
	var num = 0; //总数量
	var totalPrice = 0; //存总价
	for(var i = 0; i < arr.length; i++) {
		num += $('.nownum').eq(arr[i]).val() * 1;
//		console.log(num); 1,2,3
		var price = $('.subtotal').eq(arr[i]).text(); //￥ 199.98
//		console.log(price);
		price = $.trim(price); //去掉前后空格
		price = (price.substring(0) * 1); //199.98
//		console.log(price);
		totalPrice += price;
	}
//
			console.log(totalPrice);
//
//	$('#allnum').html('已选 ' + num + ' 件商品');
//
//	//		console.log(totalPrice.toFixed(2));
	$('.total_zong').html('总计（不含运费）：￥ ' + totalPrice.toFixed(2));

}







//全删
$('.batch').on('click','.allbatch',function() {
//console.log(929);
	updateNum();
	var mes = confirm('您确定要删除全部吗？');
	if(mes) {
		for(var i = arr.length - 1; i >= 0; i--) { //找到对应的行，删除
//			  console.log(arr);
//			console.log('$11')
			$('.bigcart>div').eq(arr[i]+2).remove();
			//接口3：删除数据库订单表多条数据
		}
	}
//			console.log(arr); //0 1 2
	update();
});

//手动输入价格
$('.bigcart').on('blur', '.nownum', function() {
//	console.log(1)
	subTotal($(this)); //小计变化
	updateNum(); //刷新总数量和总价格
});



//顶部下拉菜单

	document.addEventListener('DOMContentLoaded',function(){
	var zcmycenterbd=document.getElementById('zc-my-center-bd')
//	console.log(zcmycenterbd);
    var zcquick=document.getElementById("zc-quick");
    var span=zcquick.children[0];
//  console.log(span);
//	var isok=true;
    var zcquickmenu1=document.getElementById("zc-quick-menu1");
//   console.log(zcquickmenu1);
	zcquick.onmouseover=function(){
	    zcmycenterbd.style.display='block';
        span.className='zc-up'
        zcquickmenu1.style.background='#FFFFFF';
        
	}
	zcquick.onmouseout=function(){	
	    zcmycenterbd.style.display='none';
		span.className='zc-down';
		zcquickmenu1.style.background='#F5F5F5';
	}
	
	var zcmobile=document.getElementById("zc-mobile");
	var zcmobile2=document.getElementById('zc-mobile2');
	var zcmobiledown=document.querySelector('.zc-mobiledown');
//	console.log(zcmobiledown);
      zcmobile.onmouseover=function(){
      	zcmobile2.style.display="block";
      	zcmobile.style.background='#FFFFFF';
      	zcmobiledown.className='zc-mobileup';
      	
      }
      zcmobile.onmouseout=function(){
      	zcmobile2.style.display="none";
      	zcmobile.style.background='#F5F5F5';
      	zcmobiledown.className='zc-mobiledown';
      }
      
      var lianxikefu=document.querySelector('.lianxikefu');
      var lianxikefudown=document.querySelector('.lianxikefudown')
//    console.log(lianxikefudown);
      var lianxikefutel=document.querySelector('.lianxikefu-tel');
      
      lianxikefu.onmouseover = function(){
      	 lianxikefutel.style.display='block';
      	 lianxikefu.style.background='#FFFFFF';
      	 lianxikefudown.className = 'lianxikefuup';
      	 
      }
      lianxikefu.onmouseout = function(){
      	 lianxikefutel.style.display='none';
      	 lianxikefu.style.background='#F5F5F5';
      	  lianxikefudown.className = 'lianxikefudown';
      	
      }
      
     });
