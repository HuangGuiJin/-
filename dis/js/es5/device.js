'use strict';

//选项卡


$(function () {
	$('.device2').find('li').hover(function () {
		$('.device2 li').attr('class', '');

		$(this).attr('class', 'active');
		$('.device2 .con').css('display', 'none');
		$('.device2 .con').eq($(this).index()).css('display', 'block');
	});
});

/*device_xia*/
$(function () {
	$(document).ready(function () {
		if (Modernizr.touch) {

			$(".device_xia2").click(function (e) {
				if (!$(this).hasClass("hover")) {
					$(this).addClass("hover");
				}
			});
		} else {

			$(".device_xia2").mouseenter(function () {
				$(this).addClass("hover");
			}).mouseleave(function () {
				$(this).removeClass("hover");
			});
		}
	});
});

//e_sports
//1
$(function () {
	$('#marquee1').Marquee({
		distance: 620, //每次移动620px
		time: 3, //延时时间3秒
		direction: 'left', //方向
		navId: '#btn', //自动添加选项卡按钮，所以下面不用写li，会自动创建节点
		btnGo: {
			left: '#left',
			right: '#right' }
	});
});

//2
$(function () {
	$('#marqueea').Marquee({
		distance: 594, //每次移动620px
		time: 2, //延时时间3秒
		direction: 'left', //方向
		navId: '#btna', //自动添加选项卡按钮，所以下面不用写li，会自动创建节点
		btnGo: {
			left: '#left',
			right: '#right' }
	});
});

//tab


$(function () {
	$('.e_sports_tab').find('li').click(function () {
		$('.e_sports_tab li').attr('class', '');

		$(this).attr('class', 'active');
		$('.e_sports_tab .e_sports_big').css('display', 'none');
		$('.e_sports_tab .e_sports_big').eq($(this).index()).css('display', 'block');
	});
});

//appliances
$(function () {
	$('#appliances_marquee2').Marquee({
		distance: 594, //每次移动620px
		time: 2, //延时时间3秒
		direction: 'left', //方向
		navId: '#appliances_btn', //自动添加选项卡按钮，所以下面不用写li，会自动创建节点
		btnGo: {
			left: '#left',
			right: '#right' }
	});
});

//appliances_right_tab1
$(function () {
	$('.appliances_right_tab1').find('li').click(function () {
		$('.appliances_right_tab1 li').attr('class', '');

		$(this).attr('class', 'active');
		$('.appliances_right_tab1 .appliances_right_under').css('display', 'none');
		$('.appliances_right_tab1 .appliances_right_under').eq($(this).index()).css('display', 'block');
	});
});

//backtop
document.addEventListener('DOMContentLoaded', function () {
	var backtop = document.getElementById('backtop_a');
	var backtopbig = document.getElementById("backtop");
	var ceiling = document.getElementById("ceiling");
	//				console.log(backtop);
	window.onscroll = function () {
		var scrollTop = window.scrollY;
		//                   console.log(scrollTop)
		//滚动滑轮到达300px的时候，出现回到顶部按钮
		if (scrollTop >= 1000) {
			backtopbig.style.display = 'block';
			ceiling.className = 'demo';
		} else {
			backtopbig.style.display = 'none';
			ceiling.className = '';
		}
	};

	//点击回到顶部
	backtop.onclick = function () {
		window.scrollTo(0, 0); //第二个参数设置垂直方向的滚动距离
	};
});

//broadside
//1
$(function () {

	$('.broadside_shu').hover(function () {
		//鼠标经过


		$('.broadside_h3').stop().animate({ 'left': 1457 }, 600);
		$('.broadside_h3').css('display', 'block');
	}, function () {
		//鼠标离开

		$('.broadside_h3').stop().animate({ 'left': 1546 }, 600);
		$('.broadside_h3').css('display', 'none');
	});
});