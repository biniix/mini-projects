const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');
const counter = document.getElementById('counter');
let count = 0;

increase.onclick = function(){
  count ++;
  counter.textContent = count;
  console.log()
}
decrease.onclick = function(){
  count--;
  counter.textContent = count;
}
reset.onclick = function(){
  count = 0;
  counter.textContent = count;
}
