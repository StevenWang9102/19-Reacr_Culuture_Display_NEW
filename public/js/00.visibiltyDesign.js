// ---------------- Test the Position ----------------
const getElementViewPosition1 = (element) => {
  let explorer = window.navigator.userAgent;
  let explorerName;

  if (!explorer.includes("Chrome") && explorer.includes("Safari")) {
    explorerName = "Safari";
  } else if (explorer.includes("Chrome")) {
    explorerName = "Chrome";
  } else if (explorer.includes("Firefox")) {
    explorerName = "Firefox";
  } else if (explorer.includes("ie")) {
    explorerName = "ie";
  }

  console.log(explorerName);

  let current = element.offsetParent;
  let actualTop = element.offsetTop;
  let actualLeft = element.offsetLeft;
  let elementScrollTop = 0;
  let elementScrollLeft = 0;

  while (current !== null) {
    actualTop += current.offsetTop + current.clientTop;
    actualLeft += current.offsetLeft + current.clientLeft;
    current = current.offsetParent;
  }

  if (document.compatMode === "BackCompat") {
    elementScrollTop = document.body.scrollTop;
    elementScrollLeft = document.body.scrollLeft;
  } else if (explorerName === "Safari") {
    elementScrollTop = document.body.scrollTop;
    elementScrollLeft = document.body.scrollLeft;
  } else {
    elementScrollTop = document.documentElement.scrollTop;
    elementScrollLeft = document.documentElement.scrollLeft;
  }

  return { x: actualLeft - elementScrollLeft, y: actualTop - elementScrollTop };
};

// Reset Visibility Function
const Reset = (element, opacity, visibility) => {
  element.style.opacity = opacity;
  element.style.visibility = visibility;
};

const SetAttributes = (element, opacity, visibility, transition) => {
  element.style.opacity = opacity;
  element.style.visibility = visibility;
  element.style.transition = transition;
};

const gallery = document.getElementById("gallery");
const navbar = document.getElementById("navigation");
const whatwedo = document.getElementById("what-we-do");
const imageWallLocal = document.getElementById("image-wall");
const whatwedocontainer = document.getElementsByClassName(
  "whatwedo-container"
)[0];

// ---------- Reset Visibility on Medium Screen Size ------------
window.addEventListener(
  "resize",
  (event) => {
    let currentSize = document.documentElement.clientWidth;
    let galleryTop = getElementViewPosition1(gallery).y;

    if (currentSize < 992) {
      Reset(navbar, 1, "visible");
      Reset(gallery, 1, "visible");
      Reset(whatwedo, 1, "visible");
      Reset(whatwedocontainer, 1, "visible");
      Reset(imageWallLocal, 1, "visible");
      imageWallLocal.style.backgroundImage = "none";
    } else {
      Reset(navbar, 1, "visible");
      if (-1000 <= galleryTop && galleryTop <= -50) {
        Reset(gallery, 1, "visible");
      } else {
        Reset(gallery, 0, "hidden");
      }
      Reset(whatwedo, 1, "visible");
      Reset(whatwedocontainer, 1, "visible");
      Reset(imageWallLocal, 1, "visible");
    }
  },
  { passive: false }
);

// ------------------ Gallery Visibility ----------------

window.addEventListener(
  "scroll",
  function (e) {
    let currentSize = document.documentElement.clientWidth;
    let galleryTop = getElementViewPosition1(gallery).y;

    if (currentSize >= 992) {
      if (-500 <= galleryTop <= -100) {
        SetAttributes(navbar, 0, "hidden", "1s");
        SetAttributes(gallery, 1, "visible", "2s");
      } else {
        SetAttributes(gallery, 0, "hidden", "1s");
        SetAttributes(navbar, 1, "visible", "2s");
      }
    }
  },
  { passive: false }
);

// ------------------ What We Do Visibility ----------------
window.addEventListener(
  "scroll",
  function (e) {
    let whatwedoTop = getElementViewPosition1(whatwedo).y;
    let currentSize = document.documentElement.clientWidth;

    if (currentSize >= 992) {
      if (whatwedoTop < -800) {
        SetAttributes(gallery, 0, "hidden", "1s");
        SetAttributes(whatwedo, 1, "visible", "2s");
      } else {
        SetAttributes(whatwedo, 0, "hidden", "1s");
        SetAttributes(gallery, 1, "visible", "2s");
      }
    }
  },
  { passive: false }
);

//  ------------------ Image Wall Visibility ----------------
window.addEventListener(
  "scroll",
  function (e) {
    let imageWallLocalTop = getElementViewPosition1(imageWallLocal).y;
    let currentSize = document.documentElement.clientWidth;

    if (currentSize >= 992) {
      if (imageWallLocalTop < -1880) {
        SetAttributes(whatwedo, 0, "hidden", "1s");
        SetAttributes(imageWallLocal, 1, "visible", "2s");
        imageWallLocal.style.backgroundImage =
          "linear-gradient(to bottom right, #e4f5b5b2, #0aaafa79)";
      } else {
        SetAttributes(imageWallLocal, 0, "hidden", "1s");
        SetAttributes(whatwedo, 1, "visible", "2s");
        imageWallLocal.style.backgroundImage = "none";
      }
    }
  },
  { passive: false }
);
