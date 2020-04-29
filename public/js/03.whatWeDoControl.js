

// --------------- Float Ball & Header Position--------------
const ball = document.getElementsByClassName("float-ball")[0];
const header = document.getElementsByName("whatwe").item(1);

window.addEventListener("mousemove", (event) => {

  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop <= 800) {
    changePosition("520px", "-240px", "hiden", "700px");
  }
  else if (scrollTop > 800 && scrollTop <= 850) {
    changePosition("20px", "-240px", "visible", "650px");
  }
  else if (scrollTop > 850 && scrollTop <= 900) {
    changePosition("40px", "-240px", "visible", "600px");
  }
  else if (scrollTop > 900 && scrollTop <= 950) {
    changePosition("60px", "-240px", "visible", "550px");
  }
  else if (scrollTop > 950 && scrollTop <= 1000) {
    changePosition("80px", "-240px", "visible", "500px");
  }
  else if (scrollTop > 1000 && scrollTop <= 1050) {
    changePosition("90px", "-240px", "visible", "450px");
  }
  else if (scrollTop > 1050 && scrollTop <= 1100) {
    changePosition("100px", "-240px", "visible", "400px");
  }
  else {
    changePosition("40px", "-240px", "visible", "200px");
  }
});

function changePosition(top, left, visibility, headerLeft) {
  ball.style.transition = "2s";
  ball.style.position = "absolute";
  ball.style.top = top;
  ball.style.left = left;
  ball.style.visibility = visibility;
  header.style.left = headerLeft;
}

// --------------------- Control Buttons --------------
const whatWeDoPreview = document.getElementsByName("whatWeDoPreview")[0];
const whatWeDoNext = document.getElementsByName("whatWeDoNext")[0];
const pageButtonWhat = document.getElementsByClassName("pageAnimation")[1];
const paragraphWhat = document.getElementsByClassName("paragraph")[1];
// const title = document.getElementById("titlewrapper");

whatWeDoPreview.addEventListener("click", (event) => {
  
  pageButtonWhat.style.animation = "fadeOut 1s";
  paragraphWhat.style.animation = "fadeOut 1s";
  // title.style.animation = "MoveDown 1s";

  setTimeout(function () {
    pageButtonWhat.style.animation = "";
    paragraphWhat.style.animation = "";
    // title.style.animation = "";
  }, 600);
});

whatWeDoNext.addEventListener("click", (event) => {
  
  pageButtonWhat.style.animation = "fadeOut 1s";
  paragraphWhat.style.animation = "fadeOut 1s";
  // title.style.animation = "MoveDown 1s";

  setTimeout(function () {
    pageButtonWhat.style.animation = "";
    paragraphWhat.style.animation = "";
    // title.style.animation = "";
  }, 600);
});

// -------------------- Button Hover Ball ----------

// second-column
var followingBall2 = document.getElementById("followImg");
var secondColumn = document.getElementsByClassName("second-column")[0];
console.log(secondColumn);

secondColumn.addEventListener("mouseover", (event) => {
  followingBall2.style.visibility = "visible"
})

secondColumn.addEventListener("mouseout", (event) => {
  followingBall2.style.visibility = "hidden"
})

// whatWeDoNext.addEventListener("mouseover", (event) => {
//   followingBall2.style.visibility = "visible"
// })

// whatWeDoNext.addEventListener("mouseout", (event) => {
//   followingBall2.style.visibility = "hidden"
// })



const getElementViewPosition3 = (element) =>{
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