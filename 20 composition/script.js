function add(a,b){
    return a + b;
}


function mul(args){
    return args[0]*args[1]
}

function square(val){
    return val*val
}

//i want to add and the sequentially take the sqare of the result

function addAndSqaure(a,b){
    return square(add(a,b))
}
console.log(addAndSqaure(10,20));

//What if there are 100's of function like this so we do composition

// function composeTwo(fn1,fn2){
//     return function(a,b){
//         return fn2(fn1(a,b))
//     }
// }

function compose(...fns){
    return function(...values){
       return  fns.reduce((a,b)=> b(a),values)
    }
}

const composeAll = (...fns)=> (...val)=> fns.reduce((a,b)=> b(a),val)


const c2f = (fn1,fn2)=> (a,b)=> fn2(fn1(a,b));


const task = composeAll(mul,square,(val)=>val/20, (val)=> val+' Composing is interesing')
console.log(task(2,56))