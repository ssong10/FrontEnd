const main = document.querySelector('.main'),
  items = document.querySelector('.items'),
  rank = document.querySelector('.rank')

const itemHeight = 40

const RANKING = [
  '이승열', '아모아모', '대전', '싸피', 'SSAFY',
  '대천', '관저동', '곱창', '취업', '상무초밥'
]

const nextRank = (idx) => (idx + 1) % 10

const slideSetting = (idx) => {
  items.style.transform = ''
  next = nextRank(idx)
  items.innerHTML = `
    <div class="item">
      <div class="search__rank">${idx+1}</div>  
      <div class="search__item">${RANKING[idx]}</div>
    </div>
    <div class="item">
      <div class="search__rank">${next+1}</div>  
      <div class="search__item">${RANKING[next]}</div>
    </div>
  `
  for (let i = 0; i < 41; i++) {
    setTimeout(() => {
      items.style.transform = `translate3d(0px,-${i}px,0px)`
    }, 1800 + 30 * i)
  }
}

const slideRank = (idx) => {
  slideSetting(idx)
  setTimeout(() => {
    slideRank(nextRank(idx))
  }, 3000)
}

slideRank(0)