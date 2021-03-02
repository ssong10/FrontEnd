const main = document.querySelector('#main')
const light = document.querySelector('.light')

document.addEventListener('click', e=>{
  light.classList.toggle('lumos')
})
main.addEventListener('mousemove', e=>{
  light.style.left = `${e.x}px`
  light.style.top = `${e.y}px`
})