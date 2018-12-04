//验证用户民是否存在于数据库
$('#ipone').keyup(function() {
	var ipone = $('#ipone').val();
	//	 console.log(ipone);
	var reg = /^1[3567]\d{9}$/;
	var isok = false;

	$.ajax({
		type: "post", //传输方式
		url: "../api/checkuser.php", //接口url
		async: true, //异步
		data: { //要传输的数据
			'userphone': ipone
		},
		success: function(str) { //成功的回调
			//console.log(str);

			if(str == 'yes' && ipone != '') {
				//如果可以注册，把开关置成true
				isok = true;
				$('#warn-ipone').html('*该用户名可以注册').css('color', 'green');
				if(!reg.test(ipone)) {
					$('#warn-ipone').html('*号码格式错误').css('color', 'red');
				}
			} else {
				isok = false;
				$('#warn-ipone').html('*该用户名已经存在且用户名不能为空').css('color', 'red');
			}
		}
	});

});

//正则验证密码是否正确输入
//2~8位数

$('#password').keyup(function() {

	var pass = /^[a-zA-Z]\d[0-9]{6}$/;
	var mima = $('#password').val();

	if(pass.test(mima)) {
		$('#warn-password').html('输入正确').css('color', 'green');

	} else {

		$('#warn-password').html('输入有误').css('color', 'red');
	}

});

//确认密码  正确

$('#confirm').keyup(function() {
	var num = $('#password').val();
	var num2 = $('#confirm').val();
	if(num === num2) {
		$('#warn-confirm').html('密码正确').css('color', 'green');

	} else {
		$('#warn-confirm').html('密码错误').css('color', 'red');

	}

});

//获取文本框的值，当都为true时，点击注册，跳转登录页面,封装！
function register(){
	var phone = $('#ipone').val();
	var paw = $('#password').val();
	var num2 = $('#confirm').val();
	
	var isok = true;

	if(isok) {
		if(phone && paw && paw==num2) {
			$.ajax({
				type: "post",
				url: "../api/register.php",
				async: true,
				data: {
					'phone': phone,
					'password': paw
				},
				success: function(str) {
                  //console.log(str);
                  if(str=='yes'){
                  	  alert('注册成功');
                  	  window.location.href="login.html";
                  }else{
                  	  alert('注册失败');
                  }

				}

			});

		}else{
			alert('两次输入密码不相同');
		}

	}
}



//点击注册跳转到登录页面

$('#register_button').click(function() {
	register();
	

});

//按回车，进行跳转页面

$(document).keydown(function(ev){
	if(ev.keyCode==13){
//		console.log(22);
       register();
	}
	
});




//验证码功能

var oTex = document.querySelector('#verification2'); //表单
var oSpan = document.querySelector('#warn-verification2'); //span
var oBtn = document.querySelector('#register_button'); //按钮
var yan=document.querySelector('#yanzhengma');
console.log(yan);
//1、点击span可以生成随机数替换自身的内容
oSpan.onclick = function() {
	//给span绑定事件
	console.log(222);
	oSpan.innerHTML = randomNum();
}

//封装一个函数生成随机数
function randomNum() {
	var num = '';
	for(var i = 0; i < 4; i++) {
		num = num + parseInt(Math.random() * 10); //0-9之间的随机数
		console.log(num);
	}
	console.log(num);
	return num;
}

//点击的时候判断输入的信息和随机数是否一致
oBtn.onclick = function() {
	var inputinf = oTex.value; //获取表单内容
	var rannum = oSpan.innerHTML; //获取span的随机数
	if(inputinf == rannum) {
		//					alert('登陆成功');
		yan.style.innerHTML='验证码正确'
	} else {
		alert('验证码不正确');
	}

}