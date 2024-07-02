const timeId = document.getElementById('time');
const btn = document.getElementById('button');

const getTime = ()=>{
    const time = new Date()
    const presentableTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    timeId.innerText = presentableTime
    
}
// -----------Set timeout only works once after the given time----------
// setTimeout(()=>{
//     console.log('hi')
// }, 5000)

// --------setInterval works  for every given time---------

let interval =  setInterval(getTime, 1000)

btn.addEventListener('click',()=>{
    clearInterval(interval)
})


