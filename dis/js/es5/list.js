'use strict';

document.addEventListener('DOMContentLoaded', function () {
	//	peripherals

	var btn = document.querySelector('.peripherals');
	var ul1 = document.querySelector('.peripherals_ul');
	var span = document.querySelector('.peripherals_xia');

	btn.onmouseover = function () {
		ul1.style.display = 'block';
		span.className = 'peripherals_shang';
	};
	btn.onmouseout = function () {
		ul1.style.display = 'none';
		span.className = 'peripherals_xia';
	};

	//	peripherals_mouse

	var mos = document.querySelector('.peripherals_mouse');
	var span1 = document.querySelector('.peripherals_mousex');
	var ul2 = document.querySelector('#peripherals_ul2');

	mos.onmouseover = function () {
		ul2.style.display = 'block';
		span1.className = 'peripherals_mouses';
	};
	mos.onmouseout = function () {
		ul2.style.display = 'none';
		span1.className = 'peripherals_mousex';
	};

	var isok = true;

	$('#conceal_menu').click(function () {
		if (isok) {

			$('.conceal_topmenu').slideDown(); //高度的改变 = 'conceal_menus'
		} else {

			$('.conceal_topmenu').slideUp();
		}
		isok = !isok;
	});
	var place = document.querySelector('.default_place');
	var span7 = document.querySelector('.default_placedown');

	place.onmouseover = function () {

		span7.className = 'default_placeup';
	};
	place.onmouseout = function () {
		span7.className = 'default_placedown';
	};
});

//default_input
$(function () {

	$('.default_input').hover(function () {
		$('.default_a').stop().slideToggle();
	});

	//default_ul1

	$('.default_place').hover(function () {
		$('.default_ul1').stop().slideToggle();
	});
});