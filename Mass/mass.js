let arr = ['1', '2', '3'];
console.log(arr[0]);
console.log(arr[1]); 
console.log(arr[2]);

let arr1 = [1, 2, 3];
console.log(arr1[0]);
console.log(arr1[1]); 
console.log(arr1[2]);
console.log(arr1[0]+arr1[1]+arr1[2])

let arr2 = ['a', 'b', 'c', 'd'];
console.log(arr2[0]+'+'+arr2[1]+'+'+arr2[2]+'+'+arr2[3])

let arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3.length) // выведет 4
console.log(arr3[arr3.length - 1])

let arr4 = ['a', 'b', 'c'];

arr4[0] = '1';
arr4[1] = '2';
arr4[2] = '3';
console.log(arr4); // выведет ['1', '2', '3']

let arr5 = ['1', '2', '3'];

arr5[0] += '3';
arr5[1] += '3';
arr5[2] += '3';

console.log(arr5); // выведет ['13', '23', '33']

let arr6 = ['1', '2', '3'];
arr6[0]++;
arr6[1]++;
arr6[2]++;
console.log(arr6);

let arr7 = [];

arr7[0] = '1';
arr7[1] = '2';
arr7[2] = '3';

console.log(arr7);

let arr8 = [1, 2, 3];
arr8[3] = 4;
arr8[4] = 5;
console.log(arr8);

let arr9 = [];

arr9[3] = 'a';
arr9[8] = 'b';
console.log(arr9.length);

let arr10 = [];
arr10.push('1');
arr10.push('2');
arr10.push('3');
console.log(arr10);

let arr11 = [1, 2, 3];
arr11.push(4);
arr11.push(5);
console.log(arr11);

let arr12 = ['a', 'b', 'c'];
let key = 2; // запишем ключ в переменную

console.log(arr12[key]); // выведет 'c'

let arr13 = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log(arr13[key1]+arr13[key2]);

let arr14 = ['a', 'b', 'c', 'd', 'e'];
delete arr14[1];
delete arr14[2];
console.log(arr14.length)

let arr15 = [1, 2, 3, 4, 5];
console.log(arr15[4]);

let arr16 = [1, 2, 3, 4, 5];
console.log(arr16[0] + arr16[1] + arr16[2] + arr16[3] + arr16[4]);

let arr17 = [1, 2, 3, 4, 5];
console.log(arr17.length);

let arr18 = [1, 2, 3, 4, 5];
console.log(arr18.length);