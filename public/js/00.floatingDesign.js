// ---------------- Share a Function ----------------
const getElementViewPosition8 = (element) => {
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
  
  
  // --------------------- Gallery Floating ------------------
  // 似乎函数可以合并
  const columnL = document.getElementsByClassName("column-one")[0];
  const columnR = document.getElementsByClassName("column-two")[0];
  const galleryLocal = document.getElementById("gallery");
  
  window.addEventListener("scroll", function (e) {
    let galleryTop = getElementViewPosition8(galleryLocal).y;    
    let currentSize = document.documentElement.clientWidth;
    if(currentSize >= 992){
      if(galleryTop< -100){
        columnL.style.marginTop = "0px"
        columnR.style.marginTop = "0px"
      }else{
        columnL.style.marginTop = "40px"
        columnR.style.marginTop = "40px"
      }
    }
  })


// --------------- What We Do Floating -----------------
const whatwedoColumnOne = document.getElementsByClassName("first-column")[0];
const whatwedoColumnTwo = document.getElementsByClassName("second-column")[0];
const whatwedoLocal5 = document.getElementById("what-we-do");

window.addEventListener("scroll", function (e) {
  var whatwedoLocalTop = getElementViewPosition8(whatwedoLocal5).y
  let currentSize = document.documentElement.clientWidth;
  if(currentSize >= 992){
    if(whatwedoLocalTop < -960){
      whatwedoColumnOne.style.marginTop = "0px"
      whatwedoColumnTwo.style.marginTop = "0px"
    } else{
      whatwedoColumnOne.style.marginTop = "40px"
      whatwedoColumnTwo.style.marginTop = "40px"
    }
  }
});



// --------------- Image Wall Floating ---------------------
const columnLeft = document.getElementsByClassName("container-up")[0];
const columnRight = document.getElementsByClassName("container-up")[1];
const imageWallLocal2 = document.getElementById("image-wall");

window.addEventListener("scroll", function (e) {
  var imageWallTop = getElementViewPosition8(imageWallLocal2).y
  let currentSize = document.documentElement.clientWidth;
  if(currentSize >= 992){
    if(imageWallTop < -1810){
      columnLeft.style.marginTop = "0px"
      columnRight.style.marginTop = "0px"
    } else{
      columnLeft.style.marginTop = "40px"
      columnRight.style.marginTop = "40px"
    }
  }
});
