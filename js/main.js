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

	const content = document.querySelector("#content > section");
    const contHeight = content.offsetHeight;
    const contents = document.querySelectorAll("#content > section");
    const contLenght = contents.length;
    let scrollPosition = document.documentElement.scrollTop || 0; 
	
	// const contentMain = document.querySelector("#content");
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

		//	const contentChilds = document.querySelectorAll("#content > section");
		//	const contentChild0 = contentChilds[0]; //main1
		//	const contentChild1 = contentChilds[1]; //main2
		//	const contentChild2 = contentChilds[2]; //main3
		//	const contentChild3 = contentChilds[3]; //main4
		//	const contentChild4 = contentChilds[4]; //main5

		//	const navLis = document.querySelectorAll("#gnb ul li");
		//	const navLi = document.querySelector("#gnb ul li");
		//	console.log(navLis[4])
		//	if(scrollTop >= contentChild4.offsetTop -50){
		//		navLi.classList.remove('on');
		//		navLis[4].classList.add("on");
		//	}else if(scrollTop >= contentChild3.offsetTop -100 && scrollTop < contentChild4.offsetTop){
		//		navLi.classList.remove('on');
		//		navLis[3].classList.add("on");
		//	}else if(scrollTop >= contentChild2.offsetTop -100 && scrollTop < contentChild3.offsetTop){
		//		navLi.classList.remove('on');
		//		navLis[2].classList.add("on");
		//	}else if(scrollTop >= contentChild1.offsetTop -100 && scrollTop < contentChild2.offsetTop){
		//		navLi.classList.remove('on');
		//		navLis[1].classList.add("on");
		//	}else{
		//		navLi.classList.remove('on');
		//		navLis[0].classList.add("on");
		//	}



		// $(window).scroll(function(){
			//	if(nowScroll >= $("#content").children("section").eq(4).offset().top-50){
		//			$("#gnb ul li").removeClass("on").eq(4).addClass("on")
		//	}else if(nowScroll >= $("#content").children("section").eq(3).offset().top-100 && nowScroll < $("#content").children("section").eq(4).offset().top){
		//			$("#gnb ul li").removeClass("on").eq(3).addClass("on")
		//	}else if(nowScroll >= $("#content").children("section").eq(2).offset().top-100 && nowScroll < $("#content").children("section").eq(3).offset().top){
		//			$("#gnb ul li").removeClass("on").eq(2).addClass("on")
		//	}else if(nowScroll >= $("#content").children("section").eq(1).offset().top-100 && nowScroll < $("#content").children("section").eq(2).offset().top){
		//			$("#gnb ul li").removeClass("on").eq(1).addClass("on")
		//	}else{
		//			$("#gnb ul li").removeClass("on").eq(0).addClass("on")
		//	}
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
	$("html,body").stop().animate({"scrollTop":0},1000,"swing");
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
