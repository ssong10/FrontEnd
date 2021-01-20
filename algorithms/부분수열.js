function solution(a) {
  let numbers = {}
  for (let num of a){
      if (num in numbers){
          numbers[num] += 1
      } else {
          numbers[num] = 1
      }
  }    
  let result = 0;
  for (let num of Object.entries(numbers)) {
      let answer = 0;
      if (answer < num[1]){
          for (let j =0;j<a.length;j++){
            let target = parseInt(num[0])
            if (flag === 0){
              flag = (number == a[i]) ? 1 : -1;
            } else if (flag === 1) {
              if (a[i] !==target) {
                answer += 2;
                flag = 0;
              }
            } else {
              if (a[i] === target){
                temp += 2;
                flag = 0;
              }
            }
          }
      }
      result = answer > result ? answer : result
  }
  return result * 2;
}