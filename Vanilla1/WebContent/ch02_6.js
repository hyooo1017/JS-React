const title = document.getElementById("title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR ="#95a5a6"

function handleClick(){
	const currentColor = title.style.color;
	if (currentColor === BASE_COLOR){
		title.style.color = OTHER_COLOR;
	}else{
		title.style.color = BASE_COLOR;
	}
}

function init(){
	title.style.color = BASE_COLOR;
	// javascript dom event mdn 검색하면 이벤트 참조 페이지에서 모든 event 확인 가능
	title.addEventListener("mouseenter", handleClick);
}

init();

// 온/오프라인일 때 각각 event 발생하는 건데 실행 안됨 ㅠ
function handleOffline(){
	console.log("lalala");
}
function handleOnline(){
	console.log("Gooooood");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
