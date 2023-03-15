const arr = ['a', 'b', 'c'];

arr[10] = '4567';

console.log(arr[10]);
console.log(arr);


const arrObj = {
    a: 'a',
    1: 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {

        }
    }
};

const c = 'c';

arrObj.b = '1234';
arrObj['c'] = '2345';
arrObj[c] = '3456';
// arrObj[c] = {};
// arrObj[c] = [];


console.log(arr[1]);
// console.log(arrObj.1);
console.log(arrObj[1]);
console.log(arrObj.a);
console.log(arrObj['b']);
console.log(arrObj.b);
console.log(arrObj[0]);
console.log(arrObj['c']);
console.log(arrObj.c);
console.log(arrObj[c]);
console.log(c);



// const obj = {a: 1, b: 2};
const obj = {
    Anna: 500,
    'Alice': 800
};