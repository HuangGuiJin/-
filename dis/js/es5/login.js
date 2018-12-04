'use strict';

//选项卡
$('.login_right').find('h4').click(function () {
	$('.login_right h4').attr('class', '');

	$(this).attr('class', 'active');
	$('.login_right .login_username').css('display', 'none');
	$('.login_right .login_username').eq($(this).index()).css('display', 'block');
});

//登录验证

var isok = false;

function login() {
	//3
	//console.log(112);
	var usn = $('#login_usernamea').val();
	var pas = $('#login_usernameb').val();

	$.ajax({
		type: "post",
		url: "../api/login.php",
		async: true,
		data: {
			'userphone': usn,
			'password': pas
		},
		success: function success(str) {
			//4
			//			console.log(str);
			var data2 = JSON.parse(str);
			//			console.log(data2);
			var uid = data2[0].user_id;
			//			console.log(uid)

			if (str == -1) {
				alert('登录失败，用户名或密码不正确！');
			} else {

				if (isok) {
					// 5
					// 十天免登陆
					var now = new Date();
					now.setDate(now.getDate() + 7); //设置一个月的某一天数

					Cookie.set('name', usn, {
						'expires': now,
						path: '/'
					}); //设置name，存cookie里面
					Cookie.set('password', pas, {
						'expires': now,
						path: '/'
					}); //设置password，存cookie里面
					alert('七天免登陆');
				} else {
					// 直接登录
					alert('登录成功');
					setCookie('user_id', uid, 1, '/');
				}
				//alert('登录成功');
				window.location.href = '../liu.html';
			}
		}

	});
}

//点击登录
//2
$('#login_button').click(function () {
	login();
	$('#login_usernamea').val('');
	$('#login_usernameb').val('');
});

//回车登录
$(document).keydown(function (ev) {
	//按enter键，进行登录
	if (ev.keyCode == 13) {
		login();
	}
});
//存数据;

// 如果要十天免登陆
// 第一 输入账号和密码
// 第二 勾选十天免登陆按钮
// 第三 点击登录按钮
//  1
$('#retain').click(function () {
	isok = true;
});
//取cookie，取出保存内容，显示在表单中