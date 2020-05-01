// ------------------- Functions ----------------
const getElementViewPosition = (element) => {
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

// ------------------- Left Title Effect ----------------
const imageWall = document.getElementById("image-wall");
const titleH2 = document.getElementById("movingTitle");

window.addEventListener("scroll", function (e) {
  let currentSize = document.documentElement.clientWidth;
  var imageWallTop = getElementViewPosition(imageWall).y;
  if (currentSize >= 992) {
    if (imageWallTop > -2100 && imageWallTop < -1800) {
      titleH2.style.marginLeft = imageWallTop + 1900 + 300 + "px";
    } else {
      titleH2.style.marginLeft = 80 + "px";
    }
  }
});

// --------------------  Left Image Effect ----------------
const myHover = document.getElementsByClassName("hoverBox")[0];
const hoverTarget = document.getElementsByName("hoverImg")[0];

hoverTarget.addEventListener("mouseover", (event) => {
  myHover.style.top = "0px";
});

myHover.addEventListener("mouseover", (event) => {
  myHover.style.top = "0px";
});

myHover.addEventListener("mouseout", (event) => {
  myHover.style.top = "480px";
});

const mySetTimer = (target, value, delay) => {
  setTimeout(function () {
    target.style.display = value;
  }, delay);
};
// ------------------- Right Image Effect ----------------
// 这个地方逻辑需要重新设计@@@@@@@@@@
// 现在hover到右侧标题上，反复闪烁
const hoverOnRight = document.getElementsByClassName("img-hover")[0];
const imgBox = document.getElementsByClassName("img1")[0];
const hoverH1 = document.getElementById("hoverh1");
const titlewrapper = document.getElementsByName("titlewrapper")[1];

imgBox.addEventListener("mouseover", (event) => {
  hoverOnRight.style.left = "0px";
  mySetTimer(titlewrapper, "inline-block", 400);
});

hoverOnRight.addEventListener("mouseover", (event) => {
  hoverOnRight.style.left = "0px";
  mySetTimer(titlewrapper, "inline-block", 400);
});

hoverOnRight.addEventListener("mouseout", (event) => {
  hoverOnRight.style.left = "-440px";
  mySetTimer(titlewrapper, "none", 0);
});

hoverH1.addEventListener("mouseover", (event) => {
  hoverOnRight.style.left = "0px";
  mySetTimer(titlewrapper, "inline-block", 400);
});

hoverH1.addEventListener("mouseout", (event) => {
  hoverOnRight.style.left = "-440px";
  mySetTimer(titlewrapper, "none", 0);
});
