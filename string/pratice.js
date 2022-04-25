// string/pratice

let str1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quaerat explicabo ipsa fugit molestias nesciunt, nulla nam perspiciatis nisi eveniet veniam voluptatem earum at laboriosam nostrum placeat dolor, officiis obcaecati!'
// 단어의 길이가 10개 이상인 값을 골라내서
// consectetur, adipisi
console.log('hello'.length);
let result = str1.split(' ').filter(el => el.length >= 10).join(',');
console.log(result);