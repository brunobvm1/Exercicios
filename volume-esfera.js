let v, pi = 3.1415, r = 3;
let d = 4;

r = d / 2;
v = 4 / 3 * r ** 3;

console.log(`O volume de uma esfera de raio ${r} é ${v.toFixed([2])} Pi.`);

console.log(`O volume de uma esfera de raio ${r} é ${(v * Math.PI).toFixed([2])} Pi.`);