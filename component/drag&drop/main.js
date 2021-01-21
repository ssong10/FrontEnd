const items = document.querySelectorAll('.item'),
  boxs = document.querySelectorAll('.box'),
  todoInput = document.querySelector('#todo'),
  createTodo = document.querySelector('.create__todo')
let dragItem = null;

const COLORS = ['yellow','red','blue','dark','white']

const draggable = (item) => {
  item.draggable = true
  item.addEventListener('dragstart', (e)=>{
    dragItem = e.target
  })
  item.addEventListener('dragend', (e)=>{
    dragItem = null
  })
  return item
}

createTodo.addEventListener('submit',(e)=>{
  e.preventDefault()
  const item = draggable(document.createElement('div'))
  item.className = `item ${COLORS[Date.now()%5]}`
  item.innerText = todoInput.value
  todoInput.value = ''
  boxs[0].appendChild(item)
})

items.forEach(item => {
  draggable(item)
})

boxs.forEach(box=>{
  box.addEventListener('dragover',(e)=>{
    e.preventDefault()
  })
  box.addEventListener('drop',(e)=>{
    let idx = parseInt((e.y)/100)
    let addIdx = Math.min(idx,box.childNodes.length)
    box.insertBefore(dragItem,box.childNodes[addIdx])
  })
})