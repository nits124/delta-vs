function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i<n; i++) {
    arr[i] = Math.floor(Math.random()*10);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}//The 0 in the .reduce() method is the initial value of the accumulator (sum in this case).


export {genTicket, sum};