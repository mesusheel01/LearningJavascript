// iterators

// for(const val of [12,3,42,34]){
//     console.log(val)
// }

function makeIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;
    return {
        next(){
            let result;
            if(iterationCount < end){
                result = { value: nextStart, done: false }
                nextStart += step;
                iterationCount++;
                return result;
            }
           return {value: iterationCount, done: true} 
        },
    };
}

// const myIterator = makeIterator(1,10,2);
 
// let result = myIterator.next();
// while(!result.done){
//     console.log(result.value);
//     result = myIterator.next()
// }


// YIELD keyword -> 
function* count(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const num = count()
for(const val of (num)){
    console.log(val)
}


function* makeRangeIterator(start,end,step){
    for(let i =start ; i<=end ; i+=step){
        yield i
    }
}

const one = makeRangeIterator(1,20,2)

for(const val of(one)){
    console.log(val)
}