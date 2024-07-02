const timer = document.getElementById('timer')
const start = document.getElementById('start-btn')
const input = document.getElementById('ipt')


let i = 1;
const changeTime = ()=>{
    let maxTime = parseInt(input.value)
    if(i <= maxTime){
    timer.innerText = i;
    i++}else{
        location.reload()
    }
}

start.addEventListener('click',()=>{

    setInterval(changeTime, 1000);
    
})    
