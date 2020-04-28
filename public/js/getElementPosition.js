// const getElementViewPosition = (element) =>{
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
  