

// ------------- Video Hover -------------
const video = document.getElementById("myVideo");

video.addEventListener("mouseover", (event) => {
  video.style.right = "0px";
});

video.addEventListener("mouseout", (event) => {
  video.style.right = "-350px";
});


// ------------- Logo Resize -------------
// 目前图片位置不对@@@@@@
function displayWindowSize(){
  var width = document.documentElement.clientWidth;
  return width
}

const logo = document.getElementById("logo");
console.log(logo);

window.addEventListener("resize", (event) => {
  var currentSize = displayWindowSize()
  console.log(currentSize);
  
  if(currentSize < "576"){
    console.log("小屏幕状态");    
    logo.src = "small.png";
  }

  if(currentSize >= "576"){
    console.log("大屏幕状态");    
    logo.src = "logo-full.png";
  }

});


// console.log(logo);


