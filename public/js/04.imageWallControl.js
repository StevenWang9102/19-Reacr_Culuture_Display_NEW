
// ----------------- Image Left Hover --------------
const hoverBox = document.getElementsByClassName("hoverBox")[0];
const hoverImg = document.getElementsByName("hoverImg")[0];

hoverBox.addEventListener("mouseover", (event) => {
  hoverBox.style.top = "0px";
});

// ？这个调试一下？
hoverImg.addEventListener("mouseover", (event) => {
  hoverBox.style.top = "0px";
});

hoverBox.addEventListener("mouseout", (event) => {
  hoverBox.style.top = "480px";
});

// ------------------- Image Right Hover ----------------
const hoverRight = document.getElementsByClassName("img-hover")[0];
const imgBox = document.getElementsByClassName("img1")[0];
console.log(imgBox);

const hoverh1 = document.getElementById("hoverh1");
const titlewrapper = document.getElementsByName("titlewrapper")[1];

// 函数可以合并@@@@
imgBox.addEventListener("mouseover", (event) => {
  hoverRight.style.left = "0px";
  setTimeout(function () {
    titlewrapper.style.display = "inline-block";
  }, 400);
});

hoverh1.addEventListener("mouseover", (event) => {
  hoverRight.style.left = "0px";
  setTimeout(function () {
    titlewrapper.style.display = "inline-block";
  }, 400);
});

hoverRight.addEventListener("mouseover", (event) => {
  hoverRight.style.left = "0px";
  setTimeout(function () {
    titlewrapper.style.display = "inline-block";
  }, 400);
});

hoverRight.addEventListener("mouseout", (event) => {
  hoverRight.style.left = "-440px";
  titlewrapper.style.display = "none";
});

hoverh1.addEventListener("mouseout", (event) => {
  hoverRight.style.left = "-440px";
  titlewrapper.style.display = "none";
});

// 这地方逻辑需要完全重新设计@@@@@@@@@@

// 等于是什么东西又让他重新 显示了
// 加入一句，一旦自己hover，显示为none
// 闪烁原因可能是因为imgBox现在只是一个边框，每次都是hover到边框上了
// titlewrapper.addEventListener("mouseover", (event) => {
//   titlewrapper.style.display = "none";
// });

// ------------------- Title Movement ----------------
const getElementViewPosition = (element) =>{
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
}


// --------------- Title Moving -------------
const imageWall = document.getElementById("image-wall");
const titleH2 = document.getElementById("movingTitle");

window.addEventListener("scroll", function (e) {
  var imageWallTop = getElementViewPosition(imageWall).y
  // console.log(imageWallTop);

    if(imageWallTop >0 && imageWallTop < 400)
    titleH2.style.marginLeft = imageWallTop + 50 + "px"
});
