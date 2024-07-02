// functions in js

// function hello(){
//     console.log('Heloow Susheel!')
// }

// hello()// calling a function

//parameters
            //arguments
// function add(a,b){
//     return (a+b);
// }
// function mul(a,b){
//     console.log(a*b);
// }
//     //parameters;
// add(2,4)
// mul(34,4)
// 


// function add(a,b){
//     return (a+b);
// }
// let a = add(23,45)
// console.log(a)

//unlimited arguments
function addNnumbers(...nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}

// Calling the function with multiple numbers
addNnumbers(2, 4, 2, 3,2,4,2,34);
