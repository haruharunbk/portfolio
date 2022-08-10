window.addEventListener("load", () => {
	//팝업
	function popKakao(){
		const kakaoUrl ="https://haruharunbk.github.io/react_kakao_app_2022/";
		let kakaoOption = "top=80, left=500, width=378, height=815";
		window.open(kakaoUrl,"kakao talk",kakaoOption);
	}

	const kakaoApp1 = document.querySelector(".kakao_app1");
	const kakaoApp2 = document.querySelector(".kakao_app2");
	kakaoApp1.addEventListener("click", (e) => {
		popKakao(e);
		e.preventDefault();
	});
	kakaoApp2.addEventListener("click", (e) => {
		popKakao(e);
		e.preventDefault();
	});
	

	//크레인
	const crainPrev = document.querySelector("#main4 .joystick .prev_btn");
	const crainNext = document.querySelector("#main4 .joystick .next_btn");

	function left(e){
		e.preventDefault();
		console.log(crainPrev);
		const crain = document.querySelector('#main4 .crane_body');
		crain.style.transform = "translate(-30px)";
	}

	function right(e){
		e.preventDefault();
		const crain = document.querySelector('#main4 .crane_body');
		crain.style.transform = "translate(100px)";
	}

	crainPrev.addEventListener('click', left);
	crainNext.addEventListener('click', right);	
});
