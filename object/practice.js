// object/practice.js
const jsonObj =
  `[{"id":1,"first_name":"Melody","last_name":"Cooney","email":"mcooney0@reuters.com","gender":"Female","ip_address":"178.59.140.153"},
{"id":2,"first_name":"Saudra","last_name":"Skeel","email":"sskeel1@elpais.com","gender":"Non-binary","ip_address":"56.13.51.119"},
{"id":3,"first_name":"Avictor","last_name":"Rysdale","email":"arysdale2@spotify.com","gender":"Male","ip_address":"226.186.18.95"},
{"id":4,"first_name":"Erich","last_name":"Keam","email":"ekeam3@twitter.com","gender":"Male","ip_address":"25.175.201.16"},
{"id":5,"first_name":"Rayner","last_name":"Kempshall","email":"rkempshall4@google.co.jp","gender":"Male","ip_address":"248.90.14.194"},
{"id":6,"first_name":"Stephie","last_name":"Fawson","email":"sfawson5@bluehost.com","gender":"Female","ip_address":"202.25.48.21"},
{"id":7,"first_name":"Alvis","last_name":"Enders","email":"aenders6@hibu.com","gender":"Male","ip_address":"65.2.33.198"},
{"id":8,"first_name":"Minerva","last_name":"Bruins","email":"mbruins7@soundcloud.com","gender":"Female","ip_address":"73.157.26.185"},
{"id":9,"first_name":"Clayton","last_name":"Jennions","email":"cjennions8@topsy.com","gender":"Male","ip_address":"191.249.38.59"},
{"id":10,"first_name":"Rube","last_name":"Nurcombe","email":"rnurcombe9@joomla.org","gender":"Male","ip_address":"69.94.66.188"},
{"id":11,"first_name":"Davidson","last_name":"Scatcher","email":"dscatchera@gov.uk","gender":"Genderqueer","ip_address":"152.127.239.177"},
{"id":12,"first_name":"Tiphani","last_name":"Bertlin","email":"tbertlinb@elegantthemes.com","gender":"Female","ip_address":"81.238.231.140"},
{"id":13,"first_name":"Gertrudis","last_name":"Borgnet","email":"gborgnetc@ask.com","gender":"Female","ip_address":"208.108.226.69"},
{"id":14,"first_name":"Say","last_name":"Kick","email":"skickd@jigsy.com","gender":"Male","ip_address":"243.178.125.189"},
{"id":15,"first_name":"Belvia","last_name":"Huertas","email":"bhuertase@wikia.com","gender":"Female","ip_address":"202.11.43.99"}]`;

// json 문자열 => javascript에서 오브젝트 타입으로 변경.

const objAry = JSON.parse(jsonObj);
console.log(objAry); // id:?, first_name:?, last_name:?

let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(ary) {
  let tableTag = "";
  // <table>

  // </table>

  tableTag += '<table>';
  tableTag += createHead();
  tableTag += createBody(ary);
  tableTag += '</table>';

  document.write(tableTag);
}

function createHead() {
  // <thead><tr><th></th>*항목갯수</tr></thead>
  let headTag = "";
  headTag += '<thead><tr>';
  fields.forEach(function (val) {
    headTag += `<th>${val}</th>`;
  });
  headTag += '</tr></thead>';
  console.log(headTag);
  return headTag;
}

function createBody(ary) {
  // <tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  let bodyTag = "";
  bodyTag += '<tbody>';
  ary.forEach(function (val, idx) {
    bodyTag += `<tr style="background-color:${idx%2==0?'yellow':'green'};">`;
    fields.forEach(function (field) {
      bodyTag += `<td>${val[field]}</td>`;
    })
    bodyTag += '</tr>';
  });
  bodyTag += '</tbody>';
  console.log(bodyTag);
  return bodyTag;
}
showTable(objAry);