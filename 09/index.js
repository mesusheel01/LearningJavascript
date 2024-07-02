//function that takes a function as an argument

function add(a,b, cb){
    let res = a+b;
    cb(res);
    return ()=> console.log(res+200);
}

let res= add(2,4,(v)=>{console.log(v )})
res()
//here add is high order function as it passes result of add to another function 

