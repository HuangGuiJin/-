'use strict';

document.addEventListener('DOMContentLoaded', function () {
	var list2 = document.querySelector('.Hard_ul1');
	var aLis = list2.getElementsByTagName('li');
	var page = document.getElementById("page");
	//  console.log(page);
	var prev = document.querySelector('.prev');
	var next = document.querySelector('.next');
	//  console.log(next);
	var now = 1;
	var rows = 0;

	//  封住数据渲染
	function demo(arrlist) {
		var sum = arrlist.datalist.map(function (item) {
			return '<li class="Hard_li" data-id="' + item.gid + '">\n\t\t\t\t<img src="../img/' + item.img + '"/>\n\t\t\t\t<a href="">\'' + item.name + '\'</a>\n\t\t\t\t<p>\xA5' + item.price + '</p>\n\t\t\t\t<p>' + item.num + '</p>\n\t\t\t\t<p>' + item.shop + '</p>\n\t\t\t</li>';
		}).join('');
		//      console.log(sum);
		list2.innerHTML = sum;
	}

	$.ajax({
		type: "get",
		url: "../api/page.php",
		async: true,
		data: {
			'page': 1,
			'qty': 20

		},

		success: function success(str) {
			//console.log(str);
			//字符串转对象，
			var arr = JSON.parse(str);
			//console.log(arr.datalist[0].gid);
			//进行渲染
			demo(arr);

			//        //点击li的时候，获取到对应id，绑定网址url，跳转页面

			for (var i = 0; i < aLis.length; i++) {

				aLis[i].onclick = function () {
					//this.index

					console.log(this.getAttribute('data-id')); //拿到对应id值
					location.href = 'detail.html?id=' + this.getAttribute('data-id');
				};
			}

			//         console.log(sum);
			//根据数据的总长度，获取页数
			var num = Math.ceil(arr.total / arr.qty);
			rows = num;
			//         console.log(row);
			for (var i = 0; i < num; i++) {
				page.innerHTML += '<span>' + (i + 1) + '</span>';
			}
		}

	});

	//5.用事件委托绑定事件；

	page.onclick = function (ev) {
		var ev = ev || window.event; //event的兼容
		//点哪个是哪个
		if (ev.target.tagName.toLowerCase() == 'span') {
			//				console.log(ev.target)
			//ev.target  等同  this
			now = ev.target.innerText; //获取页码
			//			 console.log(now);			
			//设置参数	
			$.ajax({

				type: "get",
				url: "../api/page.php",
				async: true,
				data: {
					'page': now,
					'qty': 20

				},
				success: function success(str) {
					//					console.log(str);

					var arr = JSON.parse(str);

					demo(arr); //渲染数据
					//        console.log(arr);
				}
			});
		}
	};

	//如果已经是第一页：prev隐藏；如果是最后一页了，next隐藏

	prev.onclick = function () {
		now--;
		if (now <= 1) {
			now = 1; //最小第一页
		}
		$.ajax({

			type: "get",
			url: "../api/page.php",
			async: true,
			data: {
				'page': now,
				'qty': 20

			},
			success: function success(str) {

				console.log(str);

				var arr = JSON.parse(str);
				demo(arr); //渲染数据
			}
		});
	};

	next.onclick = function () {
		now++;
		if (now >= rows) {
			now = rows; //最大就是最后一页
		};
		$.ajax({

			type: "get",
			url: "../api/page.php",
			async: true,
			data: {
				'page': now,
				'qty': 20

			},
			success: function success(str) {
				//					console.log(str);

				var arr = JSON.parse(str);
				demo(arr); //渲染数据
				//							console.log(arr);
			}
		});
	};
});