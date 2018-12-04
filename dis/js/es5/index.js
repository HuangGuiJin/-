"use strict";

function update() {
	//刷新面板的状态，根据用户的登陆状态而定的。
	//如果是登陆的：显示退出面板，隐藏注册和登陆面板
	//如果是退出的：显示注册和登陆面板，隐藏退出面板
	var user_id = getCookie('user_id');
	//console.log(user_id);
	if (user_id) {
		$.ajax({
			type: "post",
			url: "./api/index.php",
			async: true,
			data: {
				'userid': user_id
			},
			success: function success(str) {
				//console.log(str);
				var data = JSON.parse(str);
				//console.log(data);
				for (var i = 0; i < data.length; i++) {
					var name = data[i].user_phone;
					//console.log(name)
					if (user_id) {
						//登陆状态
						$('.zc-login-info2').html('您好，' + name);
						$('.zc-login-info3 a').html('退出');
					}
				}
			}
		});
	}
}

update();

//退出----------
$('.zc-login-info3 a').click(function () {
	//	console.log(123)
	if (this.innerHTML == '免费注册') {
		window.location.href = "../html/register.html";
	} else {
		setCookie('user_id', '', -1, "/");
		//	console.log(user_id);
		window.location.reload(); //刷新当前页面
	}
});

document.addEventListener('DOMContentLoaded', function () {
	$(function () {
		/*
   smallimg   // 小图
   bigimg  //点击放大的图片
   mask   //黑色遮罩
   */
		var obj = new zoom('mask', 'bigimg', 'smallimg');
		obj.init();
	});
});

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

//轮播图
$(function () {
	$(document).ready(function () {
		$('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false
		});
	});
});

//倒计时
var fourthOfJuly = new Date("July 4, 2028 12:00:00").getTime();

// countdown

var timer = setInterval(function () {

	// get today's date
	var today = new Date().getTime();

	// get the difference
	var diff = fourthOfJuly - today;

	// math
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	var minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
	var seconds = Math.floor(diff % (1000 * 60) / 1000);

	// display
	// console.log(document.querySelector(".timer"))

	document.querySelector(".timer").innerHTML = "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>天</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>时</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>分</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>秒</div> \
</div>";
}, 1000);