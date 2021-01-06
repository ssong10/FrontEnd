function select (el) {
  return document.querySelector(el)
}

const $toggleBtn = select('.navbar__toggleBtn')
const $menu = select('.navbar__menu')
const $icons = select('.navbar__icons')


$toggleBtn.addEventListener('click', () => {
  $menu.classList.toggle('active')
  $icons.classList.toggle('active')
})

// 익명함수(arrow function)에서 this -> window
// 그냥 함수에서는 this -> $toggleBtn