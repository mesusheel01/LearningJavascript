// //arrays in js

// const students = ['Susheel','Srijan', 'None'];

// console.log(students)
// console.log(students.length)
// console.log(students[1]+' is love')

// students[2] = 'Raman'
// students.pop();

// students.reverse(); // reverses the array
// //array k andar k index ki values ko change kr skte hai directly pura students nhi change kr skte hai

// students.push('Janam','Siri')
// console.log(students)

// // Homogeneous values in other programming lang| but in js we can use distinct values

// const hetroArray = [1, true, '😘Srijan😘']

// hetroArray.push({name:'Janni'})
// console.log(hetroArray)

// console.log(hetroArray.indexOf(1))

// -------High order functons in array---------

const students = ['Susheel','Srijan', 'None'];

// --ForEach function()
// -- students.forEach((e) => e+ ' is mad')
//forEach doesnt returns new array
// Map function

//map return new array
//---myExample
const is = students.map((val)=> val + ' is mad')
is.forEach(e => console.log(e))

//--find and find index Function
let nums = [12,3,23,2,13,42,4]

console.log(nums.find( num => num == 4))
console.log(nums.findIndex( num => num == 4))

const everNum = nums.filter(num=> num%2==0)
console.log(everNum)
                    // (index,numberOfElements)
                    // also delets the element from orignal array
console.log(nums.splice(2,4))
console.log(nums.slice(2,4))