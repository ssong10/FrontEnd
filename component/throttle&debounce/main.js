const searchInput = document.querySelector('#search')
const delayType = document.querySelector('select#type')
const inputLog = document.querySelector('#log')
const delayInput = document.querySelector('#delay')
const throttling = (func,delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        func(...args)
      }, delay);
    }
  }
}

const debounce = (func,delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(function() {
      func(...args)
    }, delay)
  }
}

const search = () => {
  const log = `input : ${searchInput.value}`
  inputLog.innerHTML += `<p>${log}</p>`
  inputLog.scrollTop = inputLog.scrollHeight
}


let throttledEvent = throttling(search,200)
let debouncedEvent = debounce(search,200)
delayInput.addEventListener('change',(e)=> {
  throttledEvent = throttling(search,Number(e.target.value))
  debouncedEvent = debounce(search,e.target.value)
  searchInput.value = ''
  inputLog.innerHTML += `------- input 초기화 ----------`
})
delayType.addEventListener('change', ()=> {
  searchInput.value = ''
  inputLog.innerHTML += `------- input 초기화 ----------`
})

searchInput.addEventListener('keydown', (e)=> {
  const type = delayType.value
  if (type === 'throttle') {
    throttledEvent(e)
  } else {
    debouncedEvent(e)
  }
})