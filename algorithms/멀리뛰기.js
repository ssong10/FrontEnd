function solution(n) {
  let prev = 0,
      tmp = 0,
      current = 1;
  for (let i =1;i<n;i++){
      tmp = prev;
      prev = current;
      current = (tmp+current) % 1234567
  }
  return (prev+ current) % 1234567;
}