// -----------------dataTypes---------
// 1-> Number

let num = 2.12
let num1 = 2.12234234
console.log(num+num1)

// 2-> Strings

const  firstName = 'Susheel'
const lastName = 'Rai'
console.log(firstName +' '+ lastName)

//3 -> Booleans true -> 1, false -> 0

let isLoggedIn = true
console.log(isLoggedIn)

// 4 -> NULL

let lastLoggedIn = null
console.log(lastLoggedIn)
lastLoggedIn = 2;
console.log(lastLoggedIn)

// 5 -> undefined
lastLoggedIn = undefined
//mtbl iski value exit hi nhi krti hai aur null ka mtlb exit to krti hai pr abhi nhi available hai

// 6 -> objects 

const person = {
    name: '',
    age : '',
    gender: '',
    color: ''
}
console.log(person)
person.name.length == 0? person.name = 'sui' : null;
console.log(person.name)


//------------operators--------

//basic +,-,*,/ is not explained

// string -> if we want to convert a string to number obviously number string

// '11' * 1
 
console.log(typeof('11' * 1))
console.log('a' * 1) // op-> NaN (not a number)