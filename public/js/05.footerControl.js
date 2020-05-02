// ------------------ Title Hover ----------------
const titleOfLet = document.getElementById("letdothis");
const footer = document.getElementById("footer");

footer.addEventListener("mouseenter", function (e) {
  let currentSize = document.documentElement.clientWidth;
  if(currentSize >=992){
    footer.style.backgroundColor = "white";
    titleOfLet.style.animation = "blink-caret 0.5s step-end infinite";
  
    setTimeout(function () {
      titleOfLet.style.animation = "typing 4s steps(30, end), blink-caret 0.5s step-end infinite";
    }, 300);
  
    setTimeout(function () {
      footer.style.backgroundColor = "black";
    }, 700);
  }
});

footer.addEventListener("mouseout", function (e) {
  titleOfLet.style.animation = "blink-caret 0.5s step-end infinite";
});

// ---------------- Arrow Hover Effects ----------
const arrowImage2 = document.getElementsByName("arrow-right2")[0];
const startPartnership = document.getElementsByName("startPartnership")[0];

startPartnership.addEventListener("mouseover", (event) => {
arrowImage2.style.animation = "arrowToRight .7s";
  setTimeout(function () {
    arrowImage2.style.animation = "";
  }, 700);
});