function solution(begin, target, words) {
  let visit = new Array(words.length).fill(false)
  let tmp = [begin]
  let time = 0;
  while (tmp.length){
      const len = tmp.length
      for (let a=0;a<len;a++){
          let t = tmp[0]
          tmp = tmp.splice(1,tmp.length)
          console.log(t)
          for (let i=0;i<words.length;i++){
              if (!visit[i]){
                  let count = 0;
                  for (let j=0;j<t.length;j++){
                      if (t[j] !== words[i][j]){
                          count ++;
                      }             
                  }
                  if (count === 1){
                      if (words[i] === target){
                          return time+1
                      }
                      visit[i] = true
                      tmp.push(words[i])
                  }                    
              }
          }
      }
      time ++;
  }
  return 0;
}