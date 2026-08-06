// 변수 선언 연습
let score;
score = 30;
let rank = 1;
console.log(score);
console.log(rank);

//let = 나중에 값이 바뀔 수 있는 것에 사용
//const = 한 번 정하면 안 바뀌는 것에 사용
//실무 습관 : 일단 const로 쓰고, 바뀌어야 할 때만 let으로 바꿈

console.log("점수 : ", score);
//const는 선언과 동시에 할당 필수

let name = "천그루";
console.log("안녕! " + name);
// + 대신 , 를 쓰면 띄어쓰기가 자동으로 들어감

let age;
console.log(age);

// 템플릿 리터럴
console.log(`안녕하세요 ${name}입니다.`);

let product = "에그마요샌드위치";
let stock = 72;
// 출력 : 불고기 도시락 현재 재고 : 72개
console.log(`${product} 현재 재고 : ${stock}개`);

let input = 3;
console.log(`${input}개 입고 후 재고 : ${stock + input}개`);

console.log(10 / 3);
console.log(11 % 3);
console.log(1 / 0);
console.log(0 / 1);
console.log("a" / 2);
//NaN = Not a Number 숫자로 계산할 수 없음, 에러로 멈추지 않고 계속 계산하는게 함정

console.log(Boolean("False"));
console.log(Boolean(1 > 3));

//array
let fruit = ["orange", "apple", "banana", "peach"];
console.log(fruit[-1]);
console.log(fruit.length);

//배열 vs object
//배열은 순서, object는 이름
//같은 종류가 여러개 -> 배열 , 한 대상의 여러 정보 -> object
// key:value 쌍의 데이터 꾸러미 key 이름으로 value에 접근

let cat = { name: "냐옹", age: 1, iscute: true };
console.log(cat.name);
console.log(cat.age);
console.log(cat["name"]);
console.log(cat["age"]);

console.log(`고양이 이름은 ${cat.name}입니다. 나이는 ${cat["age"]}살 입니다.`);

console.log(typeof undefined);
console.log(typeof typeof 3);
console.log(Array.isArray([1, 2]));

let number = "number";
console.log(`${number} isn't ${typeof number} data type.`);

//명시적 형변환
//parseInt 정수만 출력 , parseFloat 실수만 출력, Boolean 참/거짓 출력

let mathScore = "77";
let engScore = "88";

let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(
  `수학점수 : ${mathScore}, 영어점수 : ${engScore}, 평균점수 : ${avgScore}`,
);

//증가 감소 연산자
let a1 = 10;
let a2 = 10;

let result1 = a1++;
let result2 = ++a2;

console.log(result1, a1);
console.log(result2, a2);
