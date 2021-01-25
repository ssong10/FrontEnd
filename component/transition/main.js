const $ = (el) => document.querySelector(el)

const colors = ['#e9e9a9','#e9a9e9', '#a9e9e9','#a9e9a9','#c3e3d3','#f2e2b3','#a9a9a9']
const animations = ['fadein','fadeout','slidein','slideout','turn','moving','dark']
let viewPage = 0

const $main = $('.main')
const $option = $('.option')

$main.innerHTML = `
  ${colors.map((color,idx) => `
    <div class="page">
      <div class="box" style="background-color:${color}">
        <span>${idx+1}</span>
      </div>
    </div> 
  `).join('')}
`

$option.innerHTML = `
  ${colors.map((color, idx) => `
    <select class="animation">
      <option value="none">효과 선택</option>
      ${animations.map((animation,i) => `
        <option value="${animation}" ${idx===i ? 'selected' : ''}>${animation}</option>`)
        .join('')
      }
    </select>
  `).join('')}
`
const $select = document.querySelectorAll('select')

const movePage = (from,to) => {
  if (-1<to && to < colors.length){
    $main.children[to].classList.add('show')
    $option.children[to].classList.add('show')

    viewPage = to
    $main.children[from].classList.remove('show')
    $option.children[from].classList.remove('show')
  }
}

const init = () => {
  // animation default Setting
  animations.forEach((animation,idx) => {
    $main.children[idx].children[0].style.animationName=animation
  })

  // default page setting
  $main.children[0].classList.add('show')
  $option.children[0].classList.add('show')

  // event setting
  $select.forEach((s,idx)=> {
    s.addEventListener('change',e=> {
      $main.children[idx].children[0].style.animationName= e.target.value
    })
  })
  $('.left').addEventListener('click', ()=>movePage(viewPage,viewPage-1))
  $('.right').addEventListener('click', ()=>movePage(viewPage,viewPage+1))
}

init()
