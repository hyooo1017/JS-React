const clockedContainer = document.querySelector(".js-clock"),
clockTitle = clockedContainer.querySelector("h1");

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	// 숫자가 10보다 작으면 한 자리로 출력되는 것을 앞에 0 붙여준다는 작은 조건문 작성
	clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes}:${
		seconds < 10 ? `0${seconds}` : seconds
	}`;
}

function init(){
	getTime();
	setInterval(getTime, 1000);
}

init();
