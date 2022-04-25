  // string/basic.js
  // 문자열 vs 문자열 객체

  let str1 = '문자열'
  console.log(typeof str1);

  let str2 = new String('문자열'); // 오브젝트
  console.log(typeof str2);

  console.log(str1 == str2); // 비교연산자 == 값을 비교.
  console.log(str1 === str2); // 비교연산자 === 값과 타입을 같이 비교

  let result = str1.substring(0, 2) // index:0 ~ index:2 값을 잘라내서 가져오기.
  console.log(result);
  result = str2.substr(0, 2); // index: 0부터 크기2 만큼을 잘라내서 가져오기.
  console.log(result);

  const cal1 = '1 + 2 * 3'; // string 타입
  const cal2 = new String('1 + 2 * 3'); // object 타입

  // eval() : 문자열을 수식으로 변경해서 처리해주는 함수
  console.log(cal1); // 1 + 2 * 3 => 7
  console.log(eval(cal2)); // object는 object 그대로 표현
  console.log(eval(cal2.valueOf())); // valueOf를 쓰면 수식으로 변경 가능

  //trim() : 좌우의 여백 잘라내는 기능
  console.log(' 문자열 공백 테스트 '.trim());
  console.log(' 문자열 공백 테스트 '.trimStart().trimEnd())
  // 문자열의 공백을 제거
  result = ' 문자열 공백 테스트 '.split(' '); // 매개값을 기준으로 문장을 잘라서 배열
  result.filter(function (val) {
    return val; // ['' '문자열', '공백', '테스트;, '']
  }); // 배열의 각 요소의 true 값을 리턴하는 새로운 배열을 생성
  console.log(result.join('')); // join = 배열을 문자열로 변환시켜주는 메서드

  result = ' 문자열 공백 테스트'.split(' ').filter(val => val).join(',');
  console.log(result);

  // 자바스크립트 boolean 값: null, '', 0, undefined => false;
  if (!null) { // null => false  null은 자바스크립트에서 false를 의미
    console.log('false값.')
  }

  //slice, substring, substr(Deprecated);
  console.log('안녕하세요. 반갑습니다.'.slice(0, -5)) // index값부터 index값까지 잘라냄 인덱스 기준 0~5 잘라내기, 매개 변수에 마이너스값을 가질 수 있음
  console.log('안녕하세요. 반갑습니다.'.substring(0, 5)) // substring은 마이너스 값을 허용하지 않음 들어오면 0으로 처리
  console.log('안녕하세요. 반갑습니다.'.substr(2, 5)) // substr는 인덱스 값이 아닌 크기 만큼 가져옴

  // toString() : 문자열로 변환.
  let num1 = 123;
  console.log(typeof num1);
  num1 = num1.toString; // 넘버타입을 문자열로 변환
  console.log(typeof num1);

  true.toString(); // 'true'라는 문자값을 출력

  let obj = {
    key: 'Hong',
    value: 15
  } // object 타입은 문자열로 변환 x
  console.log(obj.toString);
  console.log(obj.key.toString);
  console.log(obj.value.toString);