document.getElementById("test").addEventListener("click", eventFunction1);

function eventFunction1() {
  document.getElementById("test").classList.add("rotate");
}

function eventFunction2() {
  document.getElementById("test").classList.remove("rotate");
}
