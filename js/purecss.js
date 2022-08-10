//	$(document).ready(function(){
//		iconbox = '';
//		var iconLi = $(".iconbox ul li").length;
//		console.log("iconLi : "+iconLi);
//	
//		$(".iconbox ul li").click(function(){
//			let thisidx = $(".iconbox ul li").index(this);
//			console.log(thisidx);
//			let thishtml = $(this).html()	//
//			$(".iconanibox").css({left: 465 + ( 135 * thisidx)})	//
//			iconbox = ''	//
//			for(i=0; i<=29; i++){
//				iconbox += thishtml;
//			}	//
//			$(".iconanibox").html(iconbox);
//			$(".iconanibox").addClass("on");
//			
//			return false;
//		});
//	
//		//$(".iconbox ul li").mouseover(function(){
//		//	$(".iconbox ul li").css({cursor: "none"});
//		//});
//	});




$(document).ready(function(){
	let iconbox = '';
	const iconboxLi = document.querySelectorAll(".iconbox ul li");
	const iconLi = iconboxLi.length;
	console.log("iconLi : "+iconLi);

	$(".iconbox ul li").click(function(){
		let thisidx = $(".iconbox ul li").index(this);
		// console.log(thisidx);
		let thishtml = $(this).html();
			
		$(".iconanibox").css({left: 465 + ( 135 * thisidx)});
		iconbox = '';

		for(i=0; i<=29; i++){
			iconbox += thishtml;
		}	

		$(".iconanibox").html(iconbox);
		$(".iconanibox").addClass("on");
		
		return false;
	});
});



//window.onload = function(){
//	let iconbox = '';
//	const iconboxLi = document.querySelectorAll(".iconbox ul li");
//	const iconLi = iconboxLi.length;
//	console.log("iconLi : "+iconLi);
//
//	//	$(".iconbox ul li").click(function(){
//	//		let thisidx = $(".iconbox ul li").index(this);
//	//		console.log(thisidx);
//	//		let thishtml = $(this).html();
//
//
//	iconboxLi.addEventListener('click', function(){
//		let thisidx = iconboxLi.index(this);
//		console.log(thisidx);
//		const iconanibox = document.querySelector(".iconanibox");
//		let thishtml = this.innerHtml();
//
//
//		iconanibox.style.left = `465 + ( 135 * ${thisidx})`;
//
//		iconbox = '';
//
//		for(i=0; i<=29; i++){
//			iconbox += thishtml;
//		};
//		
//		iconanibox.innerHTML(iconbox);
//		iconanibox.classList.add("on");
//		
//		return false;
//	});
//	
//
//}