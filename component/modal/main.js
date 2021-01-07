const $ = (el) => document.querySelector(el)
const $modal = $('.modal')
const $body = $('.modal__body')


const openModal = () => {
  $modal.classList.remove('hide')
}
const closeModal = () => {
  $modal.classList.add('hide')
}

const render = (options) => {
  const {width,height} = options
  $body.style.width = width
  $body.style.height = height
}

render({
  width: '40%',
  height : '40%',
})

$('.btn').addEventListener('click', openModal)
$('.close__icon').addEventListener('click', closeModal)
$('.modal__overlay').addEventListener('click', closeModal)