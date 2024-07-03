// function main(name){
    
//     function sayMyName(){
//         console.log(name);
//     }
//     // sayMyName();
//     return sayMyName;
// }
// let fn = main('Susheel');
// fn();


//  function makeTextSize(size){
    //     function changeSize(){
        //         myName.style.fontSize = `${size}px`;
        //     }
//     return changeSize;
//  }


// const size12 = makeTextSize(12)
// const size20 = makeTextSize(20)
// const size89 = makeTextSize(89)
// const size5 = makeTextSize(5)


// button.addEventListener('click', size12)
// button.addEventListener('click', size12)
// button.addEventListener('click', size89)
// button.addEventListener('click', size5)

const button = document.getElementById('click-me')

const myName = document.getElementById('my-name')



// function makeCounter(){
//     let count = 1;
//     function increment(){
//         console.log(count++)
//     }
//     return increment
// }


// const counter1 = makeCounter();
// for(let i = 1; i< 10;i++) counter1(); // will print count 1-10 



const makeCounter = ()=> {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  };
  
  const counter1 = makeCounter();
  const counter2 = makeCounter();
  
  console.log(counter1.value()); // 0.
  
  counter1.increment();
  counter1.increment();
  console.log(counter1.value()); // 2.
  
  counter1.decrement();
  console.log(counter1.value()); // 1.
  console.log(counter2.value()); // 0.
  