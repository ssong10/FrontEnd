function solution(n, s) {
  let a = parseInt(s / n)
  let b = s % n
  if (a){
      let answer = new Array(n).fill(a)
      while (b ) {
          b--;
          answer[n-b-1] += 1
      }
      return answer
  } else {
      return [-1]
  }
}