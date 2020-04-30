// // --------- 函数 ----------- 
// function displayWindowSize8() {
//   var width = document.documentElement.clientWidth;
//   return width;
// }

// ------------------- Title Movement ----------------
const getElementViewPosition9 = (element) => {
  var actualLeft = element.offsetLeft;
  var current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }
  var elementScrollLeft = 0;
  if (document.compatMode === "BackCompat") {
    elementScrollLeft = document.body.scrollLeft;
  } else {
    elementScrollLeft = document.documentElement.scrollLeft;
  }
  var left = actualLeft - elementScrollLeft;

  var actualTop = element.offsetTop;

  current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop;
    current = current.offsetParent;
  }
  var elementScrollTop = 0;
  if (document.compatMode === "BackCompat") {
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
  }
  var right = actualTop - elementScrollTop;
  return { x: left, y: right };
};

// --------------- Big Float Ball & Header Effects--------------
const whatwedo2 = document.getElementById("what-we-do");
const bigFloatBall = document.getElementById("bigFloatBall");
const titleWhatWeDo = document.getElementsByName("whatwe")[1];

window.addEventListener("scroll", function (e) {
  // 此时测试一下屏幕尺寸
  let currentSize = document.documentElement.clientWidth;;
  let whatWeDoTop = getElementViewPosition9(whatwedo2).y;

  if (currentSize >= 992) {

    if (whatWeDoTop > -1350 && whatWeDoTop < -1050) {
      titleWhatWeDo.style.left = whatWeDoTop + 1250 + 140 + "px";
    }
  
    if (whatWeDoTop > -1400 && whatWeDoTop < -1050) {
      bigFloatBall.style.top = whatWeDoTop + 1300 + "px";
    }
  }
});

// --------------------- Preview Effects--------------
const whatWeDoPreview = document.getElementsByName("whatWeDoPreview")[0];
const whatWeDoNext = document.getElementsByName("whatWeDoNext")[0];
const pageButtonWhat = document.getElementsByClassName("pageAnimation")[1];
const paragraphWhat = document.getElementsByClassName("paragraph")[1];

whatWeDoPreview.addEventListener("click", (event) => {
  pageButtonWhat.style.animation = "fadeOut 1s";
  paragraphWhat.style.animation = "fadeOut 1s";

  setTimeout(function () {
    pageButtonWhat.style.animation = "";
    paragraphWhat.style.animation = "";
  }, 600);
});

whatWeDoPreview.addEventListener("mouseover", (event) => {
  whatWeDoPreview.style.borderRight = "4px solid rgb(185, 18, 12)";
})

whatWeDoPreview.addEventListener("mouseout", (event) => {
  whatWeDoPreview.style.borderRight = "3px solid white";
})

// --------------------- Next Effects--------------
whatWeDoNext.addEventListener("click", (event) => {
  pageButtonWhat.style.animation = "fadeOut 1s";
  paragraphWhat.style.animation = "fadeOut 1s";

  setTimeout(function () {
    pageButtonWhat.style.animation = "";
    paragraphWhat.style.animation = "";
  }, 600);
});

whatWeDoNext.addEventListener("mouseover", (event) => {
  whatWeDoNext.style.borderRight = "4px solid rgb(185, 18, 12)";
})

whatWeDoNext.addEventListener("mouseout", (event) => {
  whatWeDoNext.style.borderRight = "3px solid white";
})

// ---------------- Arrow Hover Effects ----------
const arrowImage = document.getElementsByName("arrowImage")[0];
const exploreMore = document.getElementsByClassName("explore-more")[0];

exploreMore.addEventListener("mouseover", (event) => {
  console.log(arrowImage);

  arrowImage.style.animation = "arrowToRight .7s";
  setTimeout(function () {
    arrowImage.style.animation = "";
  }, 700);
});