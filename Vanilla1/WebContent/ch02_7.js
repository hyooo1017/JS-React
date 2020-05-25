const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
	/*
	const currentClass = title.className;
	// console.log(currentClass);
	const hasClass = title.classList.contains(CLICKED_CLASS);
	if(!hasClass){
		title.classList.add(CLICKED_CLASS);
	}else{
		title.classList.remove(CLICKED_CLASS);
	}
	*/
	// 위 주석처리한 코드와 동일한 업무 수행
	// toggle은 ()안에 있는 내용이 포함되어 있는지 확인 후 add하고 있으면 remove 수행
	title.classList.toggle(CLICKED_CLASS);
}
function init(){
	title.addEventListener("click", handleClick);
}

init();