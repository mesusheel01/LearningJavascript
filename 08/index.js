// //Arrow functions

const sayHello = (name)=> console.log('hi ' + name)

sayHello('susheel')


//arguments keyword is only available in normal function 

const unlimitedArgs = (...a) =>{ 
    let sum = 0;
    a.forEach((a)=> sum+=a)
    return sum;
}
console.log(unlimitedArgs(2,234,2,2342,42,2,42,4,24,13));   

//hoisting
sayHey()
function sayHey(){
    console.log('hey')
}


//this keyword

const obj = {
    value:23,
    myfunction: ()=>{
        console.log(this);
    },w
};
obj.myfunction();