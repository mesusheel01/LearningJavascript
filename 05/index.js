// -----Logical operators in Js---

// 1 -> And(&&)

// const age = 20 ; 
// const gender = 'male';

// const res = age >= 18 && gender == 'male' ? 'You are an adult male' : 'You are a kid ig';

// console.log(res)

// 2 -> OR (||)

const age = 17; 
const gender = 'female';

const res = age >= 18 || gender == 'male' ? 'You are an adult male' : 'You are a kid ig';

console.log(res)

// 3-> not(!)

const num = 5;

const ress = num % 2 == 1? !num:num
console.log(ress)
