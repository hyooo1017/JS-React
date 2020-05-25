const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	// 화면에서 리스트 삭제
	toDoList.removeChild(li);
	// filter(함수) -> array에 담겨있는 것을 각각 한 번씩 함수 실행
	// filter은 반환 조건이 참인 것만 배열에 값을 담음
	// => toDo 리스트에서 id값이 없는 것만 골라 배열에 저장
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
}

function saveToDos(){
	// JSON : JavaScript Object Notation
	// => JSON은 데이터를 (Object->String / String->Object) 바꿈
	// JSON.stringify()로 Object를 String으로 저장
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.innerText = "❌";
	delBtn.addEventListener("click", deleteToDo);
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	// toDos 배열에 입력한 값 집어넣기 -> 저장
	toDos.push(toDoObj);
	saveToDos();
}

function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = "";
}

// 로컬에 저장되어 있는 리스트 보여줌
function loadToDos(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos !== null){
		// 자바스크립트는 Object로 데이터를 갖기 때문에 JSON 파싱
		const parsedToDos = JSON.parse(loadedToDos);
		// foreach(함수) -> array에 담겨있는 것을 각각 한 번씩 함수 실행
		parsedToDos.forEach(function(toDo){
			paintToDo(toDo.text);
		});
	}
	// 투두리스트가 null일 경우에는 입력창이 항상 보여질 것이므로 else문 따로 작성할 필요 X
}

function init(){
	loadToDos();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();
