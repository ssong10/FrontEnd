function solution(participant, completion) {
  const player = {}
  let  answer = ''
  participant.forEach(p=> {
      if (player[p]){
          player[p] += 1
      } else{
          player[p] = 1
      }
  })
  completion.forEach(c=> {
      player[c] -= 1
  })
  for (const p in player){
      if (player[p]){
          answer = p
      }
  }
  return answer
}