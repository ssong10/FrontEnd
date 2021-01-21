function solution(N, number) {
  let obj = {1: new Set([N])}
  if (number === N){
      return 1
  }
  for (let i=2;i<10;i++){
      let newNum = N
      for (let k=1;k<i;k++){
          newNum = newNum * 10 + N
          if (newNum === number){
              return i
          }
      }
      obj[i] = new Set([newNum])
      for (let j=1;j<i;j++){
          for (let num1 of [...obj[j]]){
              for (let num2 of [...obj[i-j]]){
                  for (let nums of [num1+num2, num1-num2,parseInt(num1/num2), num1*num2]){
                      if (nums === number){
                          return i
                      } else if (nums > 0){
                          obj[i].add(nums)
                      }
                  }
              }
          }
      }
  }
  return -1;
}