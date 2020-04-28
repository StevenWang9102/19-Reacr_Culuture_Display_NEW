

// ------------- Video Hover -------------
const video = document.getElementById("myVideo");

video.addEventListener("mouseover", (event) => {
  video.style.right = "0px";
});

video.addEventListener("mouseout", (event) => {
  video.style.right = "-800px";
});


// ------------- Logo Resize -------------
function displayWindowSize(){
  var width = document.documentElement.clientWidth;
  return width
}

const logo = document.getElementById("logo");

window.addEventListener("resize", (event) => {
  var currentSize = displayWindowSize()
  console.log(currentSize);
  
  if(currentSize < "576"){
    logo.src = "/img/logo-small-3.png";
  } else if(currentSize < "768"){
    logo.src = "/img/logo-small-3.png";
  } else{
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


// #navigation {

//   & .row {
//     flex-wrap: nowrap;
//   }

//   & img {
//     position: absolute;
//     left: 0;
//     height: 50px;
//     width: 110px;
//     left: 0;
//   }

//   & .content {
//     height: 50px;
//   }
// }


//   & ul {
//     position: absolute;
//     left: -250px;
//     top: 12px;
//     margin-left: -100px;
//     padding: 0;
//     width: 350px;
//     font-weight: 600;
//   }

//   & ul li {
//     color: white;
//     font-size: 15px;
//     display: inline;
//   }
// }
// }
