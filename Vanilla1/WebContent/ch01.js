console.log('Im working. Im JS. Im beutiful. I worth it.'); 

// 변수 선언할 때 let으로 초기화해주기
let a = 221;
let b = a-5;
a = 4;
console.log(b, a);

const c = 22;
let d = c-5;
// c는 상수로 선언되었기 때문에 값을 바꿀 수 없음
// c = 4;
console.log(d, c);

// String (텍스트)
const what = "hyo";
console.log(what);

// boolean (T/F 소문자로 작성)
const wat = false;

// 변수명은 Camel Case로 작성 (소문자 -> ' '이 필요한 경우 대문자 사용)

// Array (배열)
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 7];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[20]);

// Object (객체) -> 객체 안에 배열이나 또다른 객체 선언 가능
const myInfo = {
    name: "hyo",
    age: 28,
    gender: "Female",
    isBusy:true,
    favMovies: ["Avengers", "Along the gods", "각설탕"],
    favFood: [{name:"Kimcih", fatty: false}, {name: "bread", fatty: true}]
}

console.log(myInfo);
console.log(myInfo.gender);
// const로 객체를 선언하였지만 객체 내부의 값 변경 가능
myInfo.gender = "Male";
console.log(myInfo.gender);