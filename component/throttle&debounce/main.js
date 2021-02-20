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

let throttledEvent = throttling(search,500)
let debouncedEvent = debounce(search,500)

delayInput.addEventListener('change',(e)=> {
  throttledEvent = throttling(search,Number(e.target.value))
  debouncedEvent = debounce(search,e.target.value)
  searchInput.value = ''
  inputLog.innerHTML += `<p>------- delay : ${e.target.value}ms ----------</p>`
  inputLog.scrollTop = inputLog.scrollHeight
})

delayType.addEventListener('change', (e)=> {
  searchInput.value = ''
  inputLog.innerHTML += `<p>------- type : ${e.target.value} ----------</p>`
  inputLog.scrollTop = inputLog.scrollHeight
})

searchInput.addEventListener('keydown', (e)=> {
  const type = delayType.value
  if (type === 'throttle') {
    throttledEvent(e)
  } else {
    debouncedEvent(e)
  }
})