// ------------- Video Hover -------------
const video = document.getElementById("myVideo");

video.addEventListener("mouseover", (event) => {
  video.style.right = "0";
});

video.addEventListener("mouseout", (event) => {
  video.style.right = "-800px";
});

// ----------------- Change Logo ----------------
const logo = document.getElementById("logo");

const ChangeLogo = () => {
  let currentSize = document.documentElement.clientWidth;
  
  if (currentSize < "768") {
    logo.src = "";
  } else {
    logo.src = "/img/01.navigation/logo-full.png";
  }
};

ChangeLogo();

window.addEventListener("resize", (event) => {
  ChangeLogo();
}, {passive: false});



