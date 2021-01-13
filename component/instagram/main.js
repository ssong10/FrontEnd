console.log('instagram')

const POSTS = [
  {
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c237.0.965.965a/s640x640/64384493_451348545431305_7791722627087467486_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=qwXaOYKcGUIAX8n06yu&tp=1&oh=85ba47e7802334bdb6a95579e0fa5b5d&oe=60277507',
    alt : '온천교',
    likes : 130,
    comments : 100,
  },
  { 
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/122742681_644776396188988_3837753112310239411_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=5PF54Q1LUR0AX87iyUo&tp=1&oh=66a594d3815820583becc7127d46bd08&oe=60262F61',
    alt:'사진',
    likes : 140,
    comments : 220,
  },
  {
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/130813227_236726834687521_8580188627487009367_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=6nBPmKVbdFMAX_LQ-Zo&tp=1&oh=f647534bbd0674c2c7a776b5fb2e5301&oe=60261A51',
    alt:'편지',
    likes : 510,
    comments : 320,
  },
  {
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/124830906_384389852784518_2148796855384089975_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Hb2us1G3-3AAX8aE6aB&tp=1&oh=440d2573edbddaad00aa4620aef60a81&oe=60270CAC',
    alt:'석양',
    likes : 45,
    comments : 50,
  },
  {
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c150.0.900.900a/s640x640/122611688_352990369258248_4364278865858378601_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=pFO2vHO55GUAX8KZSHL&tp=1&oh=87b44221302a54a80ffd6c90a4a949a2&oe=60283423',
    alt:'실내',
    likes : 27,
    comments : 32,
  },
  {
    image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/121950203_206580240881819_7137688958589353920_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=xkzuncWWqXEAX_dn4Lb&tp=1&oh=8b44ed77c5a5180b48281a3fe8af1a33&oe=6027CBBD',
    alt:'수플레',
    likes : 999,
    comments : 1000,
  },
]

const container = document.querySelector('.container')
container.innerHTML = POSTS.map(post => `
  <div class="post">
    <img class="post__image" src="${post.image_path}" alt="${post.alt}">
  </div>
`).join('')

const createOverlay = (idx) => {
  const overlay = document.createElement('div')
  overlay.className = 'post__overlay'
  overlay.innerHTML = `
    <div>❤${POSTS[idx].likes} 🗨${POSTS[idx].comments}</div>
  `
  return overlay
}

const posts = document.querySelectorAll('.post')
posts.forEach((post,idx) => {
  const overlay = createOverlay(idx)
  post.addEventListener('mouseover', e=>{
    post.appendChild(overlay)
  })
  post.addEventListener('mouseleave', e=>{
    post.removeChild(overlay)
  })
})