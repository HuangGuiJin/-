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
			url: "../api/index.php",
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