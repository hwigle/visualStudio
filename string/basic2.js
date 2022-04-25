// indexOf(), lastIndexOf(): 찾을 문자열의 위치인덱스 반환.
let result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다.'.indexOf('홍길동'); // 찾을 값이 없으면 -1을 반환
result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다.'.lastIndexOf('홍길동'); // lastIndexOf는 뒤에서 부터 반환
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다.'.lastIndexOf('홍길동', 15); // 

let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 홍길동, 대구의 홍길동입니다.';
let position = str1.indexOf('부산');
result = str1.indexOf('홍길동', position);

// charAt(인덱스) : 인덱스를 넣어주면 해당되는 위치의 값을 리턴
let str2 = str1.charAt(result);

// toLowerCase(), toUpperCase() : 소문자, 대문자 변경
let str3 = 'Lorem ipsum dolor sit amet consectetur DOLOR';
console.log(str3.toUpperCase());
// str3 = 'Lorem ipsum dolor sit amet consectetur ';
// console.log(str3.toLowerCase());

// includes('찾을 문자열') : 있으면 true 없으면 false 
result = str3.includes('dolor');
console.log(result);

// search('찾을 문자열') 추가기능 : search(정규표현식); 찾을 문자열의 인덱스를 반환.
// 정규표현식 오브젝트 / /, (new RegExp()), 배열 [](new Array(1,2)  );
result = str3.search('dolor');
result = str3.search(/dolor/i); //i = 대소문자 구분없이 찾겠다는 뜻, g = 여러개를 찾겠다, s: 공백, w: 문자하나, w+: 모든 문자 W: 문자 이외
console.log(result);

// match('찾을 문자열') : 문자열 or null 반환.
let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('goods');
result = str4.match(/good\s\w+/gi); // 값이 없으면 null로 반환
console.log(result);

// replace('찾을 문자열', '바꿀 문자열');
result = str4.replace('good','better');
result = str4.replace(/good/gi,'better');
result = str4.replace(/\W/ig,'-'); // W: 문자 이외의 것 d: 숫자 D: 숫자 이외의 것
result = 'morning1 morning2 morning123'.replace(/\D/g,'');

let sso = ['970101-1234567', '970101 2234567', '9701013234567', '970101/4234567']
sso.forEach(num => console.log(num.replace(/\D/g,'')));
console.log(result);

// 문자열 합치기: +, concat()
console.log('hello' + 'world');
console.log('hello'.concat(' world','!!'," welcome"));