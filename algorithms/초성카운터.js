const 자음 = Array.from(decompositionKorean('ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ'))

function decompositionKorean(s) {
  return s.normalize('NFKD')
}

function setInit() {
  const obj = {}
  자음.forEach((val)=> {
    obj[val] = 0
  })
  return obj
}

function countConsonant(str){
  const counter = setInit()
  for (let i=0;i<str.length;i++) {
    const code = decompositionKorean(str[i])
    const [초성, ] = code
    if (초성 in counter) {
      counter[초성] += 1
    }
  }
  자음.forEach(val => {
    console.log(`${val}:${counter[val]}`)
  })
}

countConsonant('ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ')
countConsonant("ㄱㄱ 가자")
countConsonant('사과1호랑이,고니 수박BT닭')