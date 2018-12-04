'use strict';

//下拉菜单,merchant_pei
document.addEventListener('DOMContentLoaded', function () {
	var merchantdiv = document.querySelector('.merchant_div');
	var merchanti = document.querySelector('.merchant_div_down');
	var merchantul1 = document.querySelector('.merchant_ul1');
	var spanr = document.getElementById("spanr");
	//	 console.log(spanr)

	merchantdiv.onmouseover = function () {
		merchantul1.style.display = 'block';
		merchanti.className = 'merchant_div_up';
	};
	merchantdiv.onmouseout = function () {
		merchantul1.style.display = 'none';
		merchanti.className = 'merchant_div_down';
	};
	spanr.onclick = function () {
		merchantul1.style.display = 'none';
	};
});

//商品分类
document.addEventListener('DOMContentLoaded', function () {
	//	var storejiaa =document.querySelector('.store_jiaa');
	////  console.log(storejiaa)
	//  var storejia =document.querySelector('.store_jia');
	//   console.log(storejia);
	var isok = true;

	$('.store_jia').click(function () {
		if (isok) {
			$('.store_pp').slideDown();
			$('.store_jia').removeClass('store_jian');
			$('.store_jia').addClass('store_jiaa');
		} else {
			$('.store_pp').slideUp();
			$('.store_jia').removeClass('store_jiaa');
			$('.store_jia').addClass('store_jian');
		}
		isok = !isok;
	});
});

//<!--biggtu-->
//	

document.addEventListener('DOMContentLoaded', function () {
	var biggtui = document.querySelector('.biggtu_i');
	var biggtuli = document.querySelector('.biggtu_li');
	var biggtuimg = document.querySelector('.biggtu_img');

	biggtuli.onmouseover = function () {
		biggtuimg.style.display = 'block';
		biggtui.className = 'biggtu_i';
	};

	biggtuli.onmouseout = function () {
		biggtuimg.style.display = 'none';
		biggtui.className = 'biggtu_ia';
	};
});

document.addEventListener('DOMContentLoaded', function () {

	$('.biggtu_tab').find('li').click(function () {
		$('.biggtu_tab li').attr('class', '');

		$(this).attr('class', 'active');
		$('.biggtu_datu').css('display', 'none');
		$('.biggtu_datu').eq($(this).index()).css('display', 'block');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	//滚动滑轮到达300px的时候，出现回到顶部按钮。点击可以快速回到顶部

	window.onload = function () {
		var backband = document.getElementById('backband');
		var biggtutab = document.querySelector('.biggtu_tab');
		//				console.log(biggtutab);
		var cm = document.querySelector('.cmd');
		window.onscroll = function () {
			var scrollTop = window.scrollY;

			//滚动滑轮到达300px的时候，出现回到顶部按钮
			if (scrollTop >= 1000) {
				backband.style.display = 'block';
				cm.className = 'meka';
			} else {
				backband.style.display = 'none';
				cm.className = '';
			}
		};

		//点击回到顶部
		backband.onclick = function () {
			window.scrollTo(0, 0); //第二个参数设置垂直方向的滚动距离
		};
	};
});

// 加入购物车
$('.add_cart').click(function () {
	var goods_id = location.search;
	goods_id = goods_id.split('=')[1];
	//	console.log(goods_id);
	setCookie('goods_id', goods_id, '/');
	var user_id = getCookie('user_id');

	$.ajax({
		type: "post",
		url: "../api/cart.php",
		async: true,
		data: {
			'ins': 'insert_data',
			'userid': user_id,
			'goodsid': goods_id
		},
		success: function success(str) {
			//console.log(str);
			alert('添加成功');
		}
	});
});

//详情页购买数量：加减号;

//减号

$('.merchant_min').click(function () {
	//	console.log(433);
	var val = $(this).next().val();
	//	 console.log(val);
	val--;
	if (val <= 0) {
		val = 0;
	}
	$(this).next().val(val);
});

//加号

$('.more').click(function () {
	//	 console.log(999);
	var val = $(this).prev().val();
	val++;
	if (val >= 10) {
		val = 10;
	}
	$(this).prev().val(val);
});

//加入购物车的特效

document.addEventListener('DOMContentLoaded', function () {

	$('.add_cart').on('click', function () {
		var cart = $('.shopping-cart');

		//	console.log(cart);
		var imgtodrag = $(this);
		//	console.log(imgtodrag);
		if (imgtodrag) {
			var imgclone = imgtodrag.clone().offset({
				top: imgtodrag.offset().top,
				left: imgtodrag.offset().left
			}).css({
				'opacity': '0.5',
				'position': 'absolute',
				'height': '50px',
				'width': '50px',
				'z-index': '100000'
			}).appendTo($('body')).animate({
				'top': cart.offset().top + 20,
				'left': cart.offset().left + 20,
				'width': 75,
				'height': 75
			}, 1000, 'easeInOutExpo');
			//		setTimeout(function () {
			//			cart.effect('shake', { times: 2 }, 200);
			//		}, 1500);
			imgclone.animate({
				'width': 0,
				'height': 0
			}, function () {
				$(this).detach();
			});
		}
	});
});