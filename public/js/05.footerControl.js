// // ------------------ Visibility ----------------
// const footer = document.getElementById("footer");
// // const whatwedocontainer = document.getElementsByClassName("whatwedo-container")[0];
// // const gallery1 = document.getElementById("gallery");
// // const whatwedoContainer = document.getElementsByClassName("whatwedo-container")[0];

// window.addEventListener("scroll", function (e) {
//   var footerTop = getElementViewPosition5(footer).y
//   console.log(footerTop);
  
//   // var whatwedoTop2 = window.getElementViewPosition(whatwedo).y

//     if(footerTop < 550){
//         footer.style.visibility = "visible"
//         footer.style.opacity = 1;
//       // gallery1.style.opacity = 0;
//       // whatwedocontainer.style.opacity = 1;
//     } else{
//         footer.style.visibility = "hidden"
//         footer.style.opacity = 0;
//       // gallery1.style.opacity = 1;
//       // whatwedocontainer.style.opacity = 0;
//     }
// });

// // ------------------ Title Hover ----------------
// // const titleOfLet = document.getElementById("letdothis");
// // titleOfLet.addEventListener("mouseover", function (e) {

// //     titleOfLet.style.animation=""
// //     // titleOfLet.style.animation="typing 4s steps(30, end), blink-caret 0.5s step-end infinite"
// // }
// // )
// // titleOfLet.addEventListener("mouseout", function (e) {
// //     // titleOfLet.style.animation=""
// //     titleOfLet.style.animation="typing 4s steps(30, end), blink-caret 0.5s step-end infinite"
// // }
// // )

// const getElementViewPosition5 = (element) =>{
//     var actualLeft = element.offsetLeft;
//     var current = element.offsetParent;
//     while (current !== null) {
//       actualLeft += current.offsetLeft + current.clientLeft;
//       current = current.offsetParent;
//     }
//     var elementScrollLeft = 0;
//     if (document.compatMode === "BackCompat") {
//       elementScrollLeft = document.body.scrollLeft;
//     } else {
//       elementScrollLeft = document.documentElement.scrollLeft;
//     }
//     var left = actualLeft - elementScrollLeft;
  
//     var actualTop = element.offsetTop;
  
//     current = element.offsetParent;
//     while (current !== null) {
//       actualTop += current.offsetTop + current.clientTop;
//       current = current.offsetParent;
//     }
//     var elementScrollTop = 0;
//     if (document.compatMode === "BackCompat") {
//       elementScrollTop = document.body.scrollTop;
//     } else {
//       elementScrollTop = document.documentElement.scrollTop;
//     }
//     var right = actualTop - elementScrollTop;
//     return { x: left, y: right };
//   }