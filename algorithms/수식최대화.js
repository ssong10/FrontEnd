function calc(nums,oper,r,k){
  if (k>2){
      return nums[0] > 0 ? nums[0] : -nums[0]
  }
  let n = [nums[0]]
  let o = []
  for (let i=0;i<oper.length;i++){
      let op = oper[i]
      if (op === r[k]){
          let tmp = n.pop()
          if (op === '-'){
              n.push(tmp-nums[i+1])
          } else if (op==='+'){
              n.push(tmp+nums[i+1])
          } else {
              n.push(tmp*nums[i+1])
          }
      } else {
          n.push(nums[i+1])
          o.push(op)
      }
  }
  return calc(n,o,r,k+1)
}
function solution(expression) {
let answer = 0
let rule = ['*-+','*+-','-*+','-+*','+*-','+-*']
let nums = expression.split(/[-*+]/g)
const oper = expression.match(/[-*+]/g)
nums = nums.map(num=> parseInt(num))
for (let r of rule){
    let tmp = calc(nums,oper,r,0)
    if (answer < tmp){
        answer = tmp
    }
}
return answer;
}