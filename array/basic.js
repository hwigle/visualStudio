// 배열선언 : [], new Array();
let arr = [1, 2];
let newAry = [3, 4, 5, 6];

// 추가: 마지막위치 = push, 첫번째위치 =unshift
arr.push(3);
arr.unshift(0);

// 제거: 앞에서부터 : shift();, 뒤에서부터 : pop();
arr.pop();
arr.shift();

// forEach 
newAry.forEach(function (elem) {
  // arr.push(elem);
  arr.unshift(elem); // 6,5,4,3,1,2
});

arr.pop(); //6,5,4,3,1
arr.pop(); //6,5,4,3
arr.shift(); //5,4,3

// splice(위치, 크기, 대체값) : 추가, 수정, 삭제
// arr.splice(1, 2);
newAry.forEach(function (elem) {
  arr.splice(1, 1, elem) //5, 6, 3
});

let names = [];
let anonym = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat explicabo ipsa fugit molestias nesciunt, nulla nam perspiciatis nisi eveniet veniam voluptatem earum at laboriosam nostrum placeat dolor, officiis obcaecati'
anonym.split(' ').forEach(function (elem) {
  names.push(elem);
});
console.log(names.toString()); // toString 배열 하나하나를 콤마로 구분
console.log(names);

// forEach() : 반환값은 없다.
// map() : 각 요소에 해당되는 값을 mapping작업을 통해 다른 형태로 반환해서 새로운 배열을 만듬
// filter() : return 조건을 만족하는 값만 반환해서 새로운 배열을 만듬
let result = names.map(function (elem) {
  return elem.toUpperCase();
}); // 새로운 배열
result = result.filter(function (elem) {
  return elem.length >= 10;
})

result = names.map(elem => elem.toUpperCase()).filter(elem => elem.length >= 10); // chain rules
console.log(result);