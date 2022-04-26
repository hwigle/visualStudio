// let div1 = document.createElement('div')
// let span1 = document.createElement('span');
// span1.innerHTML = '홍길동';
// let span2 = document.createElement('span');
// span2.innerHTML = '-20살';
// div1.appendChild(span1);
// div1.appendChild(span2);

// console.log(div1);

// let divShow = document.getElementById('show');
// divShow.appendChild(span1);
// divShow.appendChild(span2);


document.addEventListener('DOMContentLoaded',function(){
  let divTag = document.createElement('div');
  let spanName = document.createElement('span');
  spanName.setAttribut('id','name');
  let name = document.createTextNode('홍길동');
  spanName.appendChild(name);

  let spanAge = documnet.createTextNode('span');
  spanAge.setAttribut('class','age');
  let age = documnet.createTextNode('20살');
  spanAge.appendChild(age);

  let hypen = document.createTextNode(' - ');

  divTag.appendChild(spanName);
  divTag.appendChild(hypen);
  divTag.appendChild(spanAge);

  let divShow = document.getElementById('show').appendChild(divTag);
});