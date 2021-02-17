const searchInput = document.querySelector('#search')
const delayType = document.querySelector('select#type')
const inputLog = document.querySelector('#log')
const delayInput = document.querySelector('#delay')
const debounce = (func,delay) => {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        func(...args,'debounce')
      }, delay);
    }
  }
}

const throttling = (func,delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(function() {
      func(...args,'trottling')
    }, delay)
  }
}

const search = (e,type) => {
  const log = `type : ${type}\ninput : ${e.target.value}`
  console.log(log)
  inputLog.innerHTML += `<p>${log}</p>`
}

const throttledEvent = throttling(search,delayInput.value)

const debouncedEvent = debounce(search,delayInput.value)

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