// --------------- Test the position --------------
const getElementViewPosition4 = (element) => {
  let explorer = window.navigator.userAgent;
  let explorerName;

  if (explorer.includes("Safari")) {
    explorerName = "Safari";
  } else if (explorer.includes("Chrome")) {
    explorerName = "Chrome";
  } else if (explorer.includes("Firefox")) {
    explorerName = "Firefox";
  } else if (explorer.includes("ie")) {
    explorerName = "Firefox";
  }
  
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;
  while (current !== null) {
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }
  let elementScrollLeft = 0;
  if (document.compatMode === "BackCompat" || explorerName === "Safari" ) {
    elementScrollLeft = document.body.scrollLeft;
  } else {
    elementScrollLeft = document.documentElement.scrollLeft;
  }
  let left = actualLeft - elementScrollLeft;

  let actualTop = element.offsetTop;

  current = element.offsetParent;
  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop;
    current = current.offsetParent;
  }
  let elementScrollTop = 0;
  if (document.compatMode === "BackCompat" || explorerName === "Safari") {
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
  }
  let top = actualTop - elementScrollTop;
  return { x: left, y: top };
};

// --------------- Set Animation ---------------
const setAnimation2 = (element, animation, delay, animation2) => {
  element.style.animation = animation;

  setTimeout(function () {
    element.style.animation = animation2;
  }, delay);
};

// --------------- Big Float Ball & Header Effects--------------
const whatwedo2 = document.getElementById("what-we-do");
const bigFloatBall = document.getElementById("bigFloatBall");
const titleWhatWeDo = document.getElementsByName("whatwe")[1];

window.addEventListener("scroll", function (e) {
  
  let currentSize = document.documentElement.clientWidth;;
  let whatWeDoTop = getElementViewPosition4(whatwedo2).y;
  
  if (currentSize >= 992) {

    if (whatWeDoTop > -1350 && whatWeDoTop < -1050) {
      titleWhatWeDo.style.left = whatWeDoTop + 1500 + "px";
    }
  
    if (whatWeDoTop > -1400 && whatWeDoTop < -1050) {
      bigFloatBall.style.top = whatWeDoTop + 1300 + "px";
    }
  }
});

// --------------------- Preview Button Effects--------------
const whatWeDoPreview = document.getElementsByName("whatWeDoPreview")[0];
const whatWeDoNext = document.getElementsByName("whatWeDoNext")[0];
const pageButtonOfWhatWeDo = document.getElementsByClassName("pageAnimation")[1];
const paragraphWhat = document.getElementsByClassName("paragraph")[1];
const title2 = document.getElementsByClassName("titlewrapper")[1];

whatWeDoPreview.addEventListener("click", (event) => {

  whatWeDoPreview.style.fontSize = "12px";
  pageButtonOfWhatWeDo.style.animation = "fadeOut .5s";
  paragraphWhat.style.animation = "fadeOut .5s";
  setAnimation2(title2, "FirstLine .3s ease, SecondLine .3s .2s ease", 500, "");

  setTimeout(function () {
    whatWeDoPreview.style.fontSize = "16px";
    pageButtonOfWhatWeDo.style.animation = "";
    paragraphWhat.style.animation = "";
  }, 500);
});

// --------------------- Preview Hover--------------
whatWeDoPreview.addEventListener("mouseover", (event) => {
  whatWeDoPreview.style.borderRight = "4px solid rgb(185, 18, 12)";
})

whatWeDoPreview.addEventListener("mouseout", (event) => {
  whatWeDoPreview.style.borderRight = "3px solid white";
})

// --------------------- Next Button Effects--------------
whatWeDoNext.addEventListener("click", (event) => {
  whatWeDoNext.style.fontSize = "12px";
  pageButtonOfWhatWeDo.style.animation = "fadeOut .5s";
  paragraphWhat.style.animation = "fadeOut .5s";
  setAnimation2(title2, "FirstLine .3s ease, SecondLine .3s .2s ease", 500, "");

  setTimeout(function () {
    whatWeDoNext.style.fontSize = "16px";
    pageButtonOfWhatWeDo.style.animation = "";
    paragraphWhat.style.animation = "";
  }, 500);
});

// --------------------- Next Hover--------------
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
  arrowImage.style.animation = "arrowToRight .7s";
  setTimeout(function () {
    arrowImage.style.animation = "";
  }, 700);
});