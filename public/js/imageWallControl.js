
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
const imgBox = document.getElementsByClassName("img-wrapper")[0];
const titlewrapper = document.getElementsByName("titlewrapper")[1];

imgBox.addEventListener("mouseover", (event) => {
  hoverRight.style.left = "0px";
  setTimeout(function () {
    titlewrapper.style.display = "inline-block";
  }, 600);
});

imgBox.addEventListener("mouseout", (event) => {
  hoverRight.style.left = "-440px";
  titlewrapper.style.display = "none";
});

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
  console.log(imageWallTop);

    if(imageWallTop >0 && imageWallTop < 400)
    titleH2.style.marginLeft = imageWallTop + 50 + "px"
  
});




