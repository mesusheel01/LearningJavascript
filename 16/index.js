const button = document.getElementById('click-button')
const uname = document.getElementById('uname')
const username = document.getElementById('username');

button.addEventListener('click', ()=>{
    const value = uname.value
    localStorage.setItem('name', value);
    location.reload();     
})

window.addEventListener('load', ()=>{
    const value = localStorage.getItem('name');
    username.innerText = value;    
})

// button.addEventListener('click', ()=>{
//     const value = localStorage.getItem('name')
//     username.innerText = value;
// })