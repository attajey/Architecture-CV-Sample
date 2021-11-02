var timer;

function loading() {
  timer = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("box").style.display = "none";
  document.getElementById("after-load").style.display = "block";
}

function zoomIn() {
  var myImg = document.getElementsByClassName("carousel-item");
  console.log(myImg);
  var myCarousel = document.getElementById("carousel-inner-id");
  myCarousel.style.overflow = "auto";
  for (let i = 0; i < myImg.length; i++) {
      myImg[i].style.width = 150 + "%";
  }
}

function zoomOut() {
  var myImg = document.getElementsByClassName("carousel-item");
  console.log(myImg);
  var myCarousel = document.getElementById("carousel-inner-id");
  myCarousel.style.overflow = "auto";
  for (let i = 0; i < myImg.length; i++) {
      myImg[i].style.width = 100 + "%";
  }
}

//var dom = document.getElementsByClassName('bg-pic');
// var dom = document.getElementById('index-bg');
// colorOne = 'rgba(10,28,90,0.8155462868741247) 0%';
// colorTwo = 'rgba(220,172,186,0.8687675753895308) 100%';
// colorThree = 'rgba(220,172,186,1) 100%)';
// var deg = 0;
// while(true) {
//   if (deg < 390){
//     deg ++;
//   }
//   else {
//     deg = 0;
//   }
//   dom.style.background = 'linear-gradient('
//   + deg + ', ' + colorOne + ', ' + colorTwo + ', ' + colorThree + ')';
// }

