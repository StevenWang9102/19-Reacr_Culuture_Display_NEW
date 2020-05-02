// ------------- Video Hover -------------
const video = document.getElementById("myVideo");

  video.addEventListener("mouseover", (event) => {
    video.style.right = "0px";
  });

  video.addEventListener("mouseout", (event) => {
    video.style.right = "-800px";
  });

// ----------------- Change Logo ----------------
const logo = document.getElementById("logo");

window.addEventListener("resize", (event) => {
  let currentSize = document.documentElement.clientWidth;

  if (currentSize < "576") {
    logo.src = "";
  } else if (currentSize < "768") {
    logo.src = "";
  } else {
    logo.src = "/img/logo-full.png";
  }
});

// ------------- On Scroll Change -------------

// const navigationBar = document.getElementById("navigation")
// const myVideo = document.getElementById("myVideo")
// console.log(myVideo);

// window.addEventListener("scroll", (event) => {
//   console.log("卷轴动了");
//   // navigationBar.offset();
//   // console.log(window.pageYOffset);
//   if(window.pageYOffset > 420){
//     navigationBar.style.position = "fixed"
//     navigationBar.style.top = "0"
//     navigationBar.style.height = "50px"
//     navigationBar.style.overflow = "visiable"
//     navigationBar.style.width = "100%"
//     navigationBar.style.zIndex = "134"
//     myVideo.style.display = "none"
//   }

// })
