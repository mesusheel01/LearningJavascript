function add(a,b,c){

    return a+b+c;
}

console.log(add(2,5,10))


//now i want to add only if all the three paramerters are avavilable 
// ------------currying-------------
function addCurry(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}


console.log(addCurry(1)(2)(45))//curry calling of a function

// function makeTea(milk){
//     return function(sugar){
//         return function(teaLeaves){
//             console.log(`I can make tea now with every ingreadients present like.. ${milk}, ${sugar}, ${teaLeaves}`);
//         }
//     }
// }


//making tea with arrow function

const makeTea = (milk)=> (sugar)=> (teaLeaves)=> console.log(`I can make tea now with every ingreadients present like.. ${milk}, ${sugar}, ${teaLeaves}`);

const step1 = makeTea('milk');
const step2 = step1('sugar');
step2('Chaipatti')

