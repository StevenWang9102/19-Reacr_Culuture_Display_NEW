// ------------------- Functions ----------------
const mySetTimer = (target, value, delay) => {
  setTimeout(function () {
    target.style.display = value;
  }, delay);
};

const getElementViewPosition = (element) => {
  let actualLeft = element.offsetLeft;
  let current = element.offsetParent;

  while (current !== null) {
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }

  let elementScrollLeft = 0;
  if (document.compatMode === "BackCompat") {
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
  if (document.compatMode === "BackCompat") {
    elementScrollTop = document.body.scrollTop;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
  }
  let right = actualTop - elementScrollTop;
  return { x: left, y: right };
};

// ------------------- Left Title Effect ----------------
const imageWall = document.getElementById("image-wall");
const titleH2 = document.getElementById("movingTitle");

window.addEventListener("scroll", function (e) {
  let currentSize = document.documentElement.clientWidth;
  let imageWallTop = getElementViewPosition(imageWall).y;

  if (currentSize >= 992) {
    if (imageWallTop > -2200 && imageWallTop < -1800) {
      titleH2.style.marginLeft = imageWallTop + 1900 + 400 + "px";
    } else {
      titleH2.style.marginLeft = 80 + "px";
    }
  }
});

// --------------------  Left Image Effect ----------------
const myHover = document.getElementsByClassName("hoverBox")[0];
const hoverTarget = document.getElementsByName("hoverImg")[0];

hoverTarget.addEventListener("mouseover", (event) => {
  myHover.style.top = "0";
});

myHover.addEventListener("mouseover", (event) => {
  myHover.style.top = "0";
});

myHover.addEventListener("mouseout", (event) => {
  myHover.style.top = "480px";
});



// ------------------- Right Image Effect ----------------
const mouseOverEffects = (element) => {
  element.addEventListener("mouseover", (event) => {
    hoverOnRight.style.left = "0";
    mySetTimer(titlewrapper, "inline-block", 400);
  });
};

const mouseOutEffects = (element) => {
  element.addEventListener("mouseout", (event) => {
    hoverOnRight.style.left = "-440px";
    mySetTimer(titlewrapper, "none", 0);
  });
};

const hoverOnRight = document.getElementsByClassName("img-hover")[0];
const imgBox = document.getElementsByClassName("img1")[0];
const hoverH1 = document.getElementById("hoverh1");
const titlewrapper = document.getElementsByClassName("titlewrapper")[2];

mouseOverEffects(imgBox);
mouseOverEffects(hoverOnRight);
mouseOverEffects(hoverH1);

mouseOutEffects(imgBox);
mouseOutEffects(hoverOnRight);
mouseOutEffects(hoverH1);
