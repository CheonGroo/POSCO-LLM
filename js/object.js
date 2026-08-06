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
