document.addEventListener('DOMContentLoaded', function () {

  let showDiv = document.querySelector('#show');
  showDiv.style.width = '300px';
  showDiv.style.height = '300px';
  showDiv.style.backgroundColor = 'yellow';

  // let inputTag = document.getElementById('userName');
  // inputTag.addEventListener('change',function(){
  //   let span = document.createElement('span');
  //   span.style.display = 'inline-block';

  //   span.style.paddingLeft = '2px';
  //   span.style.paddingright = '2px';
  //   span.style.marginleft = '2px';
  //   span.style.marginright = '2px';

  //   span.style.backgroundcolor = 'red';    

  //   span.innerHTML = document.querySelector('#userName').value;
  //   showDiv.appendChild(span);

  //   // value => clear
  //   document.querySelector('#userName').value='';    
  // })

  let add = document.querySelector('#addBtn');
  add.addEventListener('click', function () {
    let span = document.createElement('span');
    span.style.display = 'inline-block';

    span.style.paddingLeft = '2px';
    span.style.paddingright = '2px';
    span.style.marginleft = '2px';
    span.style.marginright = '2px';

    span.style.backgroundcolor = 'red';    

    span.innerHTML = document.querySelector('#userName').value;
    showDiv.appendChild(span);

    // value => clear
    document.querySelector('#userName').value='';
  })
});