// ---------------- Share a Function ----------------
const getElementViewPosition2 = (element) => {
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

function displayWindowSize() {
  var width = document.documentElement.clientWidth;
  return width;
}

// ---------- Reset Visibility on Medium Screen Size ------------
window.addEventListener("resize", (event) => {
  let currentSize1 = displayWindowSize();
  if (currentSize1 < 992) {
    navbar.style.opacity = 1;
    navbar.style.visibility = "visible";
    
    gallery.style.opacity = 1;
    gallery.style.visibility = "visible";
    
    whatwedo.style.visibility = "visible";
    whatwedo.style.opacity = 1;
    whatwedocontainer.style.opacity = 1;

    imageWallLocal.style.opacity = 1;
    imageWallLocal.style.visibility = "visible";

    // imageWallLocal.style.visibility = "hidden";
    // imageWallLocal.style.transition = "1s";
    // imageWallLocal.style.opacity = 0;
    // imageWallLocal.style.backgroundImage = "linear-gradient(to bottom right, #e4f5b5b2, #0aaafa79)";
  }
});

// 函数能不能合并一下 @@@@
// 为什么存在 whatwedocontainer@@@@@
// ------------------ Gallery Visibility ----------------
const gallery = document.getElementById("gallery");
const navbar = document.getElementById("navigation");

window.addEventListener("scroll", function (e) {
  let currentSize = displayWindowSize();
  let galleryTop = getElementViewPosition2(gallery).y;

  if (currentSize >= 992) {
    if (galleryTop <= -90) {
      navbar.style.opacity = 0;
      navbar.style.transition = "0.4s";
      gallery.style.transition = "1s";
      gallery.style.visibility = "visible";
      gallery.style.opacity = 1;
    } else {
      navbar.style.opacity = 1;
      gallery.style.transition = "1s";
      gallery.style.opacity = 0;
    }
  }
});

// ------------------ What We Do Visibility ----------------
const whatwedo = document.getElementById("what-we-do");
const whatwedocontainer = document.getElementsByClassName(
  "whatwedo-container"
)[0];

window.addEventListener("scroll", function (e) {
  let whatwedoTop = getElementViewPosition2(whatwedo).y;
  let currentSize = displayWindowSize();
  if (currentSize >= 992) {
    if (whatwedoTop < -800) {
      whatwedo.style.transition = "1s";
      whatwedo.style.visibility = "visible";
      whatwedo.style.opacity = 1;
      gallery.style.opacity = 0;
      whatwedocontainer.style.opacity = 1;
    } else {
      whatwedo.style.visibility = "hidden";
      gallery.style.opacity = 1;
      whatwedo.style.opacity = 0;
      whatwedocontainer.style.opacity = 0;
    }
  }
});

//  ------------------ Image Wall  Visibility ----------------
const imageWallLocal = document.getElementById("image-wall");

window.addEventListener("scroll", function (e) {
  let imageWallLocalTop = getElementViewPosition2(imageWallLocal).y;
  let currentSize = displayWindowSize();

  if (currentSize >= 992) {
    if (imageWallLocalTop < -1800) {
      whatwedo.style.opacity = 0;
      whatwedo.style.visibility = "hidden";
      imageWallLocal.style.visibility = "visible";
      imageWallLocal.style.transition = "1s";
      imageWallLocal.style.opacity = 1;
      imageWallLocal.style.backgroundImage =
        "linear-gradient(to bottom right, #e4f5b5b2, #0aaafa79)";
    } else {
      imageWallLocal.style.visibility = "hidden";
      imageWallLocal.style.transition = "1s";
      imageWallLocal.style.opacity = 0;
      imageWallLocal.style.backgroundImage = "none";
    }
  }
});
// 似乎很多方程可以合并 @@@@@@@@@
