/* main.js */

let devWidth;
const limitsize = 1024;

window.addEventListener("load", () => {
	devWidth = document.querySelector("body").offsetWidth;
	console.log(devWidth);

	window.addEventListener('resize', function(){
		devWidth = document.querySelector("body").offsetWidth;
		console.log(devWidth);
	});
	

	// asideTop
	const asideTop = document.querySelector(".aside");
	asideTop.addEventListener("click", function (e) {
			e.preventDefault();
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
	});

	const content = document.querySelector(".content > section");
    const contHeight = content.offsetHeight;
    const contents = document.querySelectorAll(".content > section");
    const contLenght = contents.length;
    let scrollPosition = document.documentElement.scrollTop || 0; 
	
	const main1 = document.querySelector(".main1");
	const main2 = document.querySelector(".main2");
	const main3 = document.querySelector(".main3");
	const main4 = document.querySelector(".main4");
	const main5 = document.querySelector(".main5");
	
	window.addEventListener("scroll", () => {
		let scrollTop = document.querySelector("html").scrollTop;
		const header = document.querySelector("#header");
		
		if(scrollTop < 400){
			header.classList.add("on");
			asideTop.classList.remove("on");
		}else{
			header.classList.remove("on");
			asideTop.classList.add("on");
		}
		let positionY = document.documentElement.scrollTop;
		let direction = positionY - scrollPosition >=0? 1:-1;

		scrollPosition = positionY;
		console.log(direction);



		// $(window).scroll(function(){
			//			var nowScroll = $(document).scrollTop();
			//			console.log( nowScroll );
		//	
			//			if(nowScroll >= $("#main").children("section").eq(4).offset().top-50){
			//					$("#nav ul li").removeClass("on").eq(4).addClass("on")
			//			}else if(nowScroll >= $("#main").children("section").eq(3).offset().top-100 && nowScroll < $("#main").children("section").eq(4).offset().top){
			//					$("#nav ul li").removeClass("on").eq(3).addClass("on")
			//			}else if(nowScroll >= $("#main").children("section").eq(2).offset().top-100 && nowScroll < $("#main").children("section").eq(3).offset().top){
			//					$("#nav ul li").removeClass("on").eq(2).addClass("on")
			//			}else if(nowScroll >= $("#main").children("section").eq(1).offset().top-100 && nowScroll < $("#main").children("section").eq(2).offset().top){
			//					$("#nav ul li").removeClass("on").eq(1).addClass("on")
			//			}else{
			//					$("#nav ul li").removeClass("on").eq(0).addClass("on")
			//			}
	});

	const scrollLink = document.querySelector("#scroll a");
	scrollLink.addEventListener("click", function (e) {
		e.preventDefault();
		window.scroll({
			top: contHeight*1,
			left: 0,
			behavior: "smooth",
		});
	});
});




$(document).ready(function(){
	//scroll
	//const content = document.querySelector("#container > div");
	//const contHeight = content.offsetHeight;
	//const contents = document.querySelectorAll("#container > div");
	//const contLenght = contents.length;
	//let scrollPosition = document.documentElement.scrollTop || 0; 

	// 브라우저 높이값을 div 높이값으로 설정
		//var ht = $(window).height();
		//$(".content > section").height(ht);
		//console.log(ht);
//	
	//	$(window).resize(function(){
	//		var ht = $(window).height();
	//		$(".content > section").height(ht);
	//	});
	
	
	
	//$(".aside").click(function(){
	//	$("html, body").stop().animate({
	//		scrollTop: 0
	//	}, 1000)
	//});
	//	////////////////////////////////////////////////////
	//	$(window).scroll(function(){
	//			var nowScroll = $(document).scrollTop();
	//			console.log( nowScroll );
	//			
	//			//if( nowScroll >= 100 ){
	//			//		$("#nav").addClass("on")
	//			//}else{
	//			//		$("#nav").removeClass("on")
	//			//}
//	
	//			if( nowScroll >= 300 ){
	//					$(".aside").show();
	//			}else{
	//					$(".aside").hide();
	//			}
//	
	//			if(nowScroll >= $("#main").children("section").eq(4).offset().top-50){
	//					$("#nav ul li").removeClass("on").eq(4).addClass("on")
	//			}else if(nowScroll >= $("#main").children("section").eq(3).offset().top-100 && nowScroll < $("#main").children("section").eq(4).offset().top){
	//					$("#nav ul li").removeClass("on").eq(3).addClass("on")
	//			}else if(nowScroll >= $("#main").children("section").eq(2).offset().top-100 && nowScroll < $("#main").children("section").eq(3).offset().top){
	//					$("#nav ul li").removeClass("on").eq(2).addClass("on")
	//			}else if(nowScroll >= $("#main").children("section").eq(1).offset().top-100 && nowScroll < $("#main").children("section").eq(2).offset().top){
	//					$("#nav ul li").removeClass("on").eq(1).addClass("on")
	//			}else{
	//					$("#nav ul li").removeClass("on").eq(0).addClass("on")
	//			}
	//	});

	// nav
	$("#nav ul li").click(function(e){
		e.preventDefault();
		let lis = $(this).index();
		$("html, body").stop().animate({
			scrollTop : $("#main").children("section").eq(lis).offset().top
		}, 1000)
	});

	// progressbar
	//	const btnProgressElem = document.querySelector('.btn-progress');
	//	const btnInitiateElem = document.querySelector('.btn-initiate');
	//	const progressBarElem = document.querySelector('.progress-bar__bar');
	//	btnProgressElem.addEventListener('click', () => {
	//		progressBarElem.classList.add('active');
	//	})
	//	btnInitiateElem.addEventListener('click', () => {
	//		progressBarElem.classList.remove('active');
	//	})
});




// 크레인 
//	window.onload = function(){
//		const crainPrev = document.querySelector("#main4 .joystick .prev_btn");
//		const crainNext = document.querySelector("#main4 .joystick .next_btn");
//	
//		function left(e){
//			e.preventDefault();
//			console.log(crainPrev);
//			const crain = document.querySelector('#main4 .crane_body');
//			crain.style.transform = "translate(-30px)";
//		}
//	
//		function right(e){
//			e.preventDefault();
//			const crain = document.querySelector('#main4 .crane_body');
//			crain.style.transform = "translate(100px)";
//		}
//	
//		crainPrev.addEventListener('click', left);
//		crainNext.addEventListener('click', right);	
//	}
