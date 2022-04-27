let data = [{
    studNo: 101,
    studName: '조수연',
    engScore: 90,
    korScore: 90
  },
  {
    studNo: 102,
    studName: '황진주',
    engScore: 88,
    korScore: 91
  },
  {
    studNo: 103,
    studName: '권가희',
    engScore: 92,
    korScore: 89
  },
  {
    studNo: 104,
    studName: '유해정',
    engScore: 92,
    korScore: 83
  }
];

// 초기화
let list = document.getElementById('list');

data.forEach(function (elem, idx, ary) {
  list.appendChild(makeTr(elem));
})

// 변경버튼 이벤트.
let changeBtn = document.querySelector('iput[type="button"]');
// 대상 찾아오도록.
changeBtn.addEventListener('click', function (e) {
  let targetTr = document.querySelectorAll('#list>tr');
  console.log(targetTr);
  let sno = document.getElementById('sno').value;
  let seng = document.getElementById('seng').value;
  targetTr.forEach(function (tr) {
    if (tr.children[0].innerHTML == sno) {
      tr.children[2].innerHTML = seng; // 영어점수변경
    }
  })
});
// changeBtn.addEventListener('click',changeCallBack1);
function changeCallBack1(e){
  e.preventDefault(); // 기본기능을 차단.  
  console.log('h');
  let sno = document.getElementById('sno').value;
  let sname = document.getElementById('sname').value;
  let seng = document.getElementById('seng').value;
  let skor = document.getElementById('skor').value;
  if(!(sno && sname && seng && skor)){
    alert('필수값을 입력하세요.');
    return;
  }
// if(!sno){
//   alert('변경할 번호를 입력하세요.');
//   return;
// } else if(!sname){
//   alert('변경할 이름을 입력하세요.');
//   return;
// } else if(!seng){
//   alert('변경할 영어점수를 입력하세요.');
//   return;
// } else if(!skor){
//   alert('변경할 국어점수를 입력하세요.')
//   return;
// }

let searchTr = document.getElementById(`sno_${sno}`);
searchTr.children[1].innerHTML = sname;
searchTr.children[2].innerHTML = seng;
searchTr.children[3].innerHTML = skor;
console.log(searchTr);
}

// student 한건 -> <tr><td>학번</td><td>이름</td><td>영어</td><td>국어</td></tr>
function makeTr(student) {
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'sno_' + student.studNo);
  tr.addEventListener('click', function (e) {
    console.log(this.children[1].innerHTML);
    document.getElementById('sno').value = this.children[0].innerHTML;
    document.getElementById('sname').value = this.children[1].innerHTML;
    document.getElementById('seng').value = this.children[2].innerHTML;
    document.getElementById('skor').value = this.children[3].innerHTML;
  }, false); // true: 상위 -> 항위.  defalut =false: 하위 -> 상위
  for (let field in student) { // student['studNo']
    let td = document.createElement('td');
    td.innerHTML = student[field];
    tr.appendChild(td);
  }
  // 버튼 : 삭제
  let btn = document.createElement('button');
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function (e) {
    e.stopPropagation(); // 이벤트가 전파되는것을 차단
    console.log(this);
    e.target.parentElement.parentElement.remove();
  });
  let td = document.createElement('tr');
  td.appendChild(btn);
  tr.appendChild(td);
  return tr;
}