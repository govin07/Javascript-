const score = 300
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed);

const otherNumber  = 123.5881
console.log(otherNumber.toPrecision(1));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

const min = 18
const max = 20
console.log(Math.floor(Math.random() * (max - min +1) + min));