var timer;

function loading() {
  timer = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("box").style.display = "none";
  document.getElementById("after-load").style.display = "block";
}