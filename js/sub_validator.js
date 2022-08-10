// sub_sansumgsem.js
window.addEventListener("load",function(){

	var winW = window.innerWidth;

	//body의 높이값 지정
	const content = document.querySelectorAll("#container > div");
	const Length = content.length;
	const containerWid = winW*Length;
	var bodyHt = document.querySelector("body").offsetHeight;
	bodyHt = containerWid;

	const cat = document.querySelector(".cat");

	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var bodyHt = document.querySelector("body");
	bodyHt.style.height	= containerWid+"px";

	let H = containerWid - winH;
	let W = containerWid - winW;
	let R = W / H;

	let scrollTop = document.documentElement.scrollTop;
	let scrollR  = scrollTop * R;

	let prevScrollTop = 0; // 마지막 스크롤 값

	var start = this.setTimeout(function(){
		querySelector(".content1 > section").classList.add("on");
	});

	//스크롤
	window.addEventListener("scroll",function(){
		winW = window.innerWidth;
		winH = window.innerHeight;

		H = containerWid - winH;
		W = containerWid - winW;
		R = W / H;

		scrollTop = document.documentElement.scrollTop;
		scrollR  = scrollTop * R;

		var container = document.querySelector("#container");
		container.style.transform = "translateX(-" + scrollR + "px)";

		let lastScrollTop = window.pageYOffset || 0;
		if(lastScrollTop > prevScrollTop){
			cat.classList.add("on");
			cat.classList.remove("left");
		}else if(lastScrollTop < prevScrollTop){
			cat.classList.add("on");
			cat.classList.add("left");
		}
		prevScrollTop = lastScrollTop;

		//제이쿼리 스크롤이 멈추면 0.3초후에 애니메이션 멈춤
		clearTimeout($.data(this,"scrollCheck"));

		$.data(this,"scrollCheck",setTimeout(function(){
			$(".cat").removeClass("on");
		},300));

	}); //scroll event

	//제이쿼리 키보드 조작
	$(document).keydown(function(e){ //이벤트객체
		if(e.keyCode == 39){ //오른쪽 방향키
			var scrollNow = $(document).scrollTop();
			$(window).scrollTop(scrollNow+50);
		}
		if(e.keyCode == 37){
			var scrollNow = $(document).scrollTop();
			$(window).scrollTop(scrollNow-50);
		}
	});//keyd

});
