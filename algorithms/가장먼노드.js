function append(nodes, a,b){
  if (nodes[a]){
      nodes[a].push(b)
  } else {
      nodes[a] = [b]
  }
}

function solution(n, edge) {
var answer = 0;
const graph = Array(n).fill(0)
const nodes = Array(n)
function go(nlist,m){
  let new_list = []
  nlist.forEach(n=> {
    nodes[n].forEach(i=> {
      if (graph[i] == 0){
        new_list.push(i)
        graph[i] = 1
      }
    })  
  })
  if (new_list.length){
    go(new_list,new_list.length)   
  } else {
      answer = m
      return
  }
}
edge.forEach(e => {
    append(nodes, e[0]-1, e[1]-1)
    append(nodes, e[1]-1, e[0]-1)
})
graph[0]=1
go([0],1)
return answer
}