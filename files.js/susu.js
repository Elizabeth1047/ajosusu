let hambuger = document.getElementById("ham");
let ham = document.getElementById("list");
hambuger.addEventListener("click", (eve) => {
  ham.classList.toggle("reveal");
  ham.classList.toggle("slid");
});
