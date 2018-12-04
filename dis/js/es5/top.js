'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var zcmycenterbd = document.getElementById('zc-my-center-bd');
	//	console.log(zcmycenterbd);
	var zcquick = document.getElementById("zc-quick");
	var span = zcquick.children[0];
	//  console.log(span);
	//	var isok=true;
	var zcquickmenu1 = document.getElementById("zc-quick-menu1");
	//   console.log(zcquickmenu1);
	zcquick.onmouseover = function () {
		zcmycenterbd.style.display = 'block';
		span.className = 'zc-up';
		zcquickmenu1.style.background = '#FFFFFF';
	};
	zcquick.onmouseout = function () {
		zcmycenterbd.style.display = 'none';
		span.className = 'zc-down';
		zcquickmenu1.style.background = '#F5F5F5';
	};

	var zcmobile = document.getElementById("zc-mobile");
	var zcmobile2 = document.getElementById('zc-mobile2');
	var zcmobiledown = document.querySelector('.zc-mobiledown');
	//	console.log(zcmobiledown);
	zcmobile.onmouseover = function () {
		zcmobile2.style.display = "block";
		zcmobile.style.background = '#FFFFFF';
		zcmobiledown.className = 'zc-mobileup';
	};
	zcmobile.onmouseout = function () {
		zcmobile2.style.display = "none";
		zcmobile.style.background = '#F5F5F5';
		zcmobiledown.className = 'zc-mobiledown';
	};

	var lianxikefu = document.querySelector('.lianxikefu');
	var lianxikefudown = document.querySelector('.lianxikefudown');
	//    console.log(lianxikefudown);
	var lianxikefutel = document.querySelector('.lianxikefu-tel');

	lianxikefu.onmouseover = function () {
		lianxikefutel.style.display = 'block';
		lianxikefu.style.background = '#FFFFFF';
		lianxikefudown.className = 'lianxikefuup';
	};
	lianxikefu.onmouseout = function () {
		lianxikefutel.style.display = 'none';
		lianxikefu.style.background = '#F5F5F5';
		lianxikefudown.className = 'lianxikefudown';
	};
	//    var topnavnav3=document.querySelector('.top_nav_nav3up');
	var topnavul = document.querySelector('.top_nav_ul');
	var topnavnav3 = document.querySelector('.top_nav_nav3');
	var topnavnav3up = document.querySelector('.top_nav_nav3up');
	//      console.log(topnavnav3);

	topnavnav3.onmousemove = function () {
		topnavul.style.display = "block";
		topnavnav3up.className = 'top_nav_nav3down';
	};
	topnavnav3.onmouseout = function () {
		topnavul.style.display = "none";
		topnavnav3up.className = 'top_nav_nav3up';
	};
});

$(function () {
	$('.non_ul21').mouseover(function () {
		$('.non_ul3').css('display', 'block');
	});
	$('.non_ul21').mouseout(function () {
		$('.non_ul3').css('display', 'none');
	});
});
$(function () {
	$('.non_ul22').mouseover(function () {
		$('.non_ul3a').css('display', 'block');
	});
	$('.non_ul22').mouseout(function () {
		$('.non_ul3a').css('display', 'none');
	});
});
$(function () {
	$('.non_ul23').mouseover(function () {
		$('.non_ul3b').css('display', 'block');
	});
	$('.non_ul23').mouseout(function () {
		$('.non_ul3b').css('display', 'none');
	});
});
$(function () {
	$('.non_ul24').mouseover(function () {
		$('.non_ul3c').css('display', 'block');
	});
	$('.non_ul24').mouseout(function () {
		$('.non_ul3c').css('display', 'none');
	});
});
$(function () {
	$('.non_ul25').mouseover(function () {
		$('.non_ul3d').css('display', 'block');
	});
	$('.non_ul25').mouseout(function () {
		$('.non_ul3d').css('display', 'none');
	});
});
$(function () {
	$('.non_ul26').mouseover(function () {
		$('.non_ul3e').css('display', 'block');
	});
	$('.non_ul26').mouseout(function () {
		$('.non_ul3e').css('display', 'none');
	});
});

$('.non_classify').hover(function () {
	$('.non_ul2').stop().slideToggle();
});