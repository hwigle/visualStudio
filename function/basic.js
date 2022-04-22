// function/basic.js
// 1.함수선언식으로 정의
function sum(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
}
// => let sum = function(num1. num2){}
let result = sum(10, 20, 30);
console.log('결과는 ' + result);
// 2.함수표현식으로 정의
let myfnc = function (val1, val2) {
  var myVal = 10;
  return val1 + val2 + myVal;
}
console.log(typeof myfnc, myfnc);
result = myfnc(10, 20);
console.log(result);

let mysum = myfnc;
result = mysum(20, 30);
console.log(result);

const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 165.3
}

//함수표현식  myinfo
let myinfo = function (obj) {
  var info = `이름은 ${obj.fullName}이고 ${obj.age}살이고 키는 ${obj.height}입니다.`;
  return info;
}

result = myinfo(person);
console.log(result);

//배열을 활용. 출력.
const persons = [person1, person2, person3];
for (let per of persons) {
  let result = myinfo(per);
  console.log(result);
}
console.clear();
// 자바스크립트에서 문자열, 숫자, boolean, 배열 => 매개값으로 사용 가능
// 함수를 매개변수로도 사용가능
persons.forEach(function (val, ind, ary) {
  //console.log(val, ind, ary);
  console.log(myinfo(val));
});

let funcParam = function (val, ind, ary) {
  console.log(myinfo(val));
};
persons.forEach(funcParam); // 메소드의 매개값으로 활용되는 함수 => 콜백함수