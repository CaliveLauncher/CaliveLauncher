const menu = document.getElementById('icono')

const enlaces = document.querySelector('.enlaces')
menu.addEventListener("click", e=>{
    e.preventDefault()
    enlaces.classList.toggle('dos')
})