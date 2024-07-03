

// (function add(a,b){
//     console.log(a+b) ;
// })(4,5); //immedidate invoked function expression 
// //this is IIFE  

// (function say(){
//     console.log('hey');
// })();


// (()=> console.log("I'm es6 expression of IIFE"))();


// const value  = (()=> 100)();
// console.log(value)


// const makeWithdraw = (balance) =>
//     ((copyBalance) => {
//       let balance = copyBalance; // This variable is private
//       const doBadThings = () => {
//         console.log("I will do bad things with your money");
//       };
//       doBadThings();
//       return {
//         withdraw(amount) {
//           if (balance >= amount) {
//             balance -= amount;
//             return balance;
//           }
//           return "Insufficient money";
//         },
//       };
//     })(balance);
  
// //   const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// const firstAccount = makeWithdraw(2909)
//   console.log(firstAccount.balance); // undefined
//   console.log(firstAccount.withdraw(2000)); // 80
//   console.log(firstAccount.withdraw(30)); // 50
//   console.log(firstAccount.doBadThings); // undefined; this method is private
//   const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
//   console.log(secondAccount.withdraw(30)); // "Insufficient money"
//   console.log(secondAccount.withdraw(20)); // 0
  
///after executing of a variable in IIFE function it will discard
 
// let data ;
// async function getData(){
//     data = await fetch()
// }

// getData();

// const data = (async ()=> await fetch())();


const atm = (balance)=> 
    ((copyBalance)=>{
        let balance = copyBalance;
        function withdraw(amt){
            if(amt> balance) return ('Saale pagal hai kya');
            balance -= amt;
            return balance
        }
        function addMoney(amt){
            if(amt > 0) balance+=amt;
            else console.log('kuch paisa to daal bhai!');
            return balance
        }
        return {withdraw,addMoney}
})(balance)

const sush= atm(100)
console.log(sush)
console.log(sush.withdraw(20))
console.log(sush.addMoney(200))