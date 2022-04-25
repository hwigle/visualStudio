// DOM : 생성, 속성, 삭제, 부모-자식 관계
// // addEventListener(이벤트이름, 이벤트핸들러(실행할코드));
document.addEventListener('DOMContentLoaded', function () {
  let h3Tag = document.getElementsByTagName('h3'); //HTMLCollection 으로 반환
  console.log(h3Tag);
  h3Tag[1].innerHTML = 'content changed';

  let first = document.getElementById('first');// element. 요소 하나를 가져옴
  console.log('first');
  first.innerHTML = 'Git Changed';

  let second = document.getElementsByClassName('first');
  second[0].innerHTML ='사과';

  // CSS의 선택자 
  let list = document.querySelectorAll('ul>li');
  console.log(list);
  list[1].style.backgroundColor ='yellow';

  // DOM 생성
  let newList = document.createElement('li'); // <li>Mango</li> 만들기
  newList.innerHTML='Mango';

  console.log(newList);

  // ul 하위요소 <li>Mango</li>
  let ulTag = document.querySelector('ul');
  ulTag.appendChild(newList);
});