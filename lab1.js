"use strict";


const a = 5
const inc = (n) => {
    return ++n;
};
let b = inc(a);
console.dir({ a, b });


const obj = { n: 5 }
const inc2 = (num) => {
    num.n++;
    return;
};
inc2(obj)
console.dir(obj);

const array = [true, "hello", NaN, 12, -200, false, false, "word", [1, 2, 3], [true, false, false]];
const hash = {
    number: 0,
    boolean: 0,
    string: 0,
    object: 0,
};
const hashEmpty = {}


for (let i = 0; i < array.length; i++) {
    hash[typeof array[i]]++;
};
console.dir(hash);


for (let i = 0; i < array.length; i++) {
    (!hashEmpty[typeof array[i]]) ? (hashEmpty[typeof array[i]] = 1) : (hashEmpty[typeof array[i]]++);
};
console.dir(hashEmpty);
