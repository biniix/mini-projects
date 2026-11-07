const button = document.getElementById("roll-btn");
const result = document.getElementById("result");

randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
}

button.onclick = function() {
  result.textContent = randomNumber();
}