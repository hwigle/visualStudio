//reduce(); map() => 새로운 배열, filter() => 새로운배열, 정해진 반환값으로 나옴
//reduce() => 결과값이 지정하는 값으로 string, number, 배열, 반환값을 정하기 가능

const numbers = [23, 4, 77, 51, 63, 34, 62, 92];

// 배열요소의 누적합.
let result = numbers.reduce(function (accum, elem, ind, ary) {
  console.log(accum, elem, ind, ary); // 0 23 0 배열요소.
  accum = accum + elem; // 0 + 23 = 27
  return accum;
}, 0);

// 배열요소의 *2 한 값을 새로운 배열로 만들기
result = numbers.reduce(function (accum, elem) {
  accum.push(elem * 2); // [46, 8, 154, 102, 126, 68, 124, 184] 
  return accum;
}, [])

// filter : 50보다 큰 숫자만 배열에 담는 새로운 배열
result = numbers.reduce(function (accum, elem) {
  if (elem >= 50) {
    accum.push(elem);
  }
  return accum; // 반환되는 값은 다음 순번의 초기값(accum)
}, []);
console.log(result);