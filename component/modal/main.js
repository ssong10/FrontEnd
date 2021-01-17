const openBtn = document.querySelector('.open__btn'),
  modal = document.querySelector('.modal'),
  closeBtn = document.querySelector('.close__btn'),
  overlay = document.querySelector('.modal__overlay')

function openModal() {
  modal.classList.remove('hide')
  document.addEventListener('keydown', escapeModal)
}

const closeModal = () => {
  modal.classList.add('hide')
  document.removeEventListener('keydown', escapeModal)
}

const escapeModal = (e) => {
  if (e.keyCode==27){
    closeModal()
  }
}

openBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)