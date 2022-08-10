let mySwiper = new Swiper(".swiper-container", {
	direction: "vertical",
	loop: true,
	pagination: ".swiper-pagination",
	grabCursor: true,
	speed: 1000,
	paginationClickable: true,
	parallax: false,
	autoplay: false,
	effect: "slide",
	mousewheelControl: 1
});

//포트폴리오 content1
$('p#contt1').click(function(e){
	e.preventDefault();
	$('.p_cont_r1').fadeIn();
	$('.p_cont_r1 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r1').fadeOut();
	});
});

//포트폴리오 content2
$('p#contt2').click(function(e){
	e.preventDefault();
	$('.p_cont_r2').fadeIn();
	$('.p_cont_r2 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r2').fadeOut();
	});
});

//포트폴리오 content3
$('p#contt3').click(function(e){
	e.preventDefault();
	$('.p_cont_r3').fadeIn();
	$('.p_cont_r3 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r3').fadeOut();
	});
});

//포트폴리오 content4
$('p#contt4').click(function(e){
	e.preventDefault();
	$('.p_cont_r4').fadeIn();
	$('.p_cont_r4 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r4').fadeOut();
	});
});

//포트폴리오 content5
$('p#contt5').click(function(e){
	e.preventDefault();
	$('.p_cont_r5').fadeIn();
	$('.p_cont_r5 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r5').fadeOut();
	});
});

//포트폴리오 content6
$('p#contt6').click(function(e){
	e.preventDefault();
	$('.p_cont_r6').fadeIn();
	$('.p_cont_r6 .xBtn a').click(function(e){
		e.preventDefault();
		$('.p_cont_r6').fadeOut();
	});
});

//포트폴리오 content7
//$('p#contt7').click(function(e){
//	e.preventDefault();
//	$('.p_cont_r7').fadeIn();
//	$('.p_cont_r7 .xBtn a').click(function(e){
//		e.preventDefault();
//		$('.p_cont_r7').fadeOut();
//	});
//});