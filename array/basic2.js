let data = `[{"id":1,"first_name":"Melody","last_name":"Cooney","email":"mcooney0@reuters.com","gender":"Female","ip_address":"178.59.140.153"},
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
{"id":15,"first_name":"Belvia","last_name":"Huertas","email":"bhuertase@wikia.com","gender":"Female","ip_address":"202.11.43.99"}]`

// find();
let objAry = [];
objAry = JSON.parse(data);

let reusult = objAry.find(function(elem){
  return elem.gender =='Female'; // 하나만 찾고 종료. <> 필터는 모든 데이터의 값 반환
});
console.log(reusult);