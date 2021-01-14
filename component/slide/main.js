const prev = document.querySelector('.prev'),
  next = document.querySelector('.next'),
  slides = document.querySelector('.slides'),
  bullets = document.querySelectorAll('.bullet')

let currentIdx = 0;

const moveSlide = (idx) => {
  if (idx > -1 & idx < 5) {
    if (idx === 0){
      prev.classList.add('hide')
    } else {
      prev.classList.remove('hide')
    }
    if (idx === 4){
      next.classList.add('hide')
    } else {
      next.classList.remove('hide')
    }
    bullets[currentIdx].classList.remove('dark')
    bullets[idx].classList.add('dark')
    currentIdx = idx
    slides.style.left = `${-500*idx}px`
  }
}

prev.addEventListener('click', ()=>moveSlide(currentIdx-1))
next.addEventListener('click', ()=>moveSlide(currentIdx+1))
bullets.forEach((bullet,idx) => {
  bullet.addEventListener('mouseover', ()=> moveSlide(idx))
})

// setInterval(()=> {
//   moveSlide((currentIdx+1)%5)
// },3000)