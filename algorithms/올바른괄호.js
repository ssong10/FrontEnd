function solution(s){
  var answer = true;
  let open = 0;
  for (let i=0;i<s.length;i++){
      if (s[i]=='('){
          open += 1
      } else {
          if (open){
              open -= 1
          } else {
              return false
          }
      }
  }
  return open ? false : true ;
}