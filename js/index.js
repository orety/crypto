console.log('pat');
let g = 3;
let n = 17;

let arg1 = process.argv[2];
let arg2 = process.argv[3];
console.log('arg1: ', arg1);
console.log('arg2: ', arg2)
let A = arg1 ? arg1 : 5 ;
let B = arg1 ? arg2 : 101;

console.log('n =', n);
console.log('g =', g);
console.log(`g mod n c mod ${ n }`);
console.log(`A = ${ A }`);
console.log(`B = ${ B }`);

let calcA = Math.pow(g, A)%n;
let calcB = Math.pow(g, B)%n;
// console.log(`calcA (${ g }^${ A }) = ${ calcA } mod ${ n }`);
// console.log(`calcB (${ g }^${ B }) = ${ calcB } mod ${ n }`);
console.log(`g^A mod n -> ${ g }^${ A } mod ${ n } = `, calcA);
console.log(`g^A mod n -> ${ g }^${ B } mod ${ n } = `,  calcB);

let resultA = Math.pow(calcB, A)%n;
let resultB = Math.pow(calcA, B)%n;

console.log(`${ calcB } ^${ A } mod ${ n } = `,  resultA);
console.log(`${ calcA }^${ B } mod ${ n } = `,  resultB);
