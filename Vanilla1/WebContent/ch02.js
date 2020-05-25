// DOM(Document Object Model)
// html 파일 내의 요소들에 접근할 때 사용하는 객체 모델

const title = document.getElementById("title");
title.innerHTML = "Hi! From JS";
console.log(title);

// 콘솔 창에서 document 객체의 모든 상세내용 확인 가능
console.dir(title);
// HTML 파일의 body 색 바꾸기
title.style.color = "red";
console.dir(document);
document.title = "I own you now";
// querySelector : #ID로 select하겠다
document.querySelector("#title");
// 만일 class로 찾는 경우는 .title

// addEventListener는 이벤트에서 다룰 함수를 적어줌
function handleResize(event){
	console.log(event);	// 이벤트가 발생할 때마다 출력
	// console.log("I have been resized");
}
// handleResize() 아님!!!!!! -> 지금 당장 함수 호출
window.addEventListener("resize", handleResize);	// -> 필요할 때 함수 호출
// title을 클릭할 때마다 파란색으로 변경
function handleClick(){
	title.style.color = "blue";
}
title.addEventListener("click", handleClick);