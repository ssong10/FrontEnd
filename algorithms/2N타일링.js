function solution(n) {
  let tmp = [0,1,2]
  for (let i=2;i<n;i++){
      tmp.push((tmp[i]+tmp[i-1])%1000000007)
  }
  return tmp[n];
}