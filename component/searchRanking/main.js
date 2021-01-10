const main = document.querySelector('.main'),
  items = document.querySelector('.items'),
  rank = document.querySelector('.rank')
let currentRank = 0
const RANKING = [
  '이승열', '아모아모','대전','싸피','SSAFY',
  '대천', '관저동', '곱창', '취업', '상무초밥'
]

const nextRank = (idx) => {
  return (idx+1) % 10
}
const SHOW = (idx) => {
  const next = nextRank(idx)
  return `
    <div class="item">
      <div class="search__rank">${idx+1}</div>  
      <div class="search__item">${RANKING[idx]}</div>
    </div>
    <div class="item">
      <div class="search__rank">${next+1}</div>  
      <div class="search__item">${RANKING[next]}</div>
    </div>
  `
} 

const slideSetting = (idx) => {
  items.style.transform = ''
  currentRank = nextRank(idx)
  items.innerHTML = SHOW(idx)
  for (let i=0;i<38;i++){
    setTimeout(()=> {
      items.style.transform = `translate3d(0px,-${i}px,0px)`
    },30*i)
  }
}

const slideRank = () => {
  slideSetting(0)
  setInterval(()=> {
    slideSetting(currentRank)
  },3000)
}

slideRank()