const $app = document.querySelector('#app')
const $footer = document.querySelector('.footer')

const getList = (count) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const data = Array.from({length:5}).map((_,idx)=>{
        const id = (count*5)+idx+1
        return {id, data: `${id}번째 게시글입니다`}
      })
      resolve(data)
    },1000)
  })
}

const renderItem = ({id, data}) => {
  const item = document.createElement('li')
  item.innerHTML = `
    <div class="item-id">${id}</div>
    <div class="item-data">${data}</div>
  `
  return item
}
let count = 0
const fetchMore = async () => {
  $footer.classList.add("loading");
  const list = await getList(count ++)
  const frag = document.createDocumentFragment()
  list.forEach(item=> {
    frag.appendChild(renderItem(item))
  })
  $app.appendChild(frag)
  $footer.classList.remove("loading");
}
const onScroll = (e) => {
  const {clientHeight,scrollTop,scrollHeight} = e.target.scrollingElement;
  if (clientHeight + scrollTop === scrollHeight){
    fetchMore()
  }
}

fetchMore()
window.addEventListener('scroll',onScroll)