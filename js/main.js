/* main.js */

let devWidth;
const limitsize = 1024;

//윈도우가 시작하면 화면 맨위로 이동
window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}; 
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

	const content = document.querySelector("#content > section");
    const contHeight = content.offsetHeight;
    const contents = document.querySelectorAll("#content > section");
    let scrollPosition = document.documentElement.scrollTop || 0; 
	
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
	});

	// main2에 있는 scroll icon
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
	//윈도우가 시작하면 화면 맨위로 이동 -> javascript로 
	//	$("html,body").stop().animate({"scrollTop":0},1000,"swing");
	
	$(window).scroll(function(){
		var nowScroll = $(document).scrollTop();
		console.log( nowScroll );

		if(nowScroll >= $("#content").children("section").eq(4).offset().top-50){
			$("#gnb ul li").removeClass("on").eq(4).addClass("on")
		}else if(nowScroll >= $("#content").children("section").eq(3).offset().top-100 && nowScroll < $("#content").children("section").eq(4).offset().top){
			$("#gnb ul li").removeClass("on").eq(3).addClass("on")
		}else if(nowScroll >= $("#content").children("section").eq(2).offset().top-100 && nowScroll < $("#content").children("section").eq(3).offset().top){
			$("#gnb ul li").removeClass("on").eq(2).addClass("on")
		}else if(nowScroll >= $("#content").children("section").eq(1).offset().top-100 && nowScroll < $("#content").children("section").eq(2).offset().top){
			$("#gnb ul li").removeClass("on").eq(1).addClass("on")
		}else{
			$("#gnb ul li").removeClass("on").eq(0).addClass("on")
		}
	});

	// nav
	$("#gnb ul li").click(function(e){
		e.preventDefault();
		let lis = $(this).index();
		$("html, body").stop().animate({
			scrollTop : $("#content").children("section").eq(lis).offset().top
		}, 1000)
	});

	// 한페이지씩 이동
	$("#content > section").mousewheel(function(event,delta){
		if(delta > 0){ // 마우스 휠을 올렸을 때
			var prev = $(this).prev().offset().top;
			$("html,body").stop().animate({"scrollTop":prev},1400,"linear"); //easeOutBounce
		}else if(delta < 0){ //마우스 휠을 내렸을때
			var next = $(this).next().offset().top;
			$("html,body").stop().animate({"scrollTop":next},1400,"linear"); 
		}
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
