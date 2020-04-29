// ---------------- Share a Function ----------------
const getElementViewPosition6 = (element) => {
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
  
  
  // ------------- Gallery Page -------------
  const columnL = document.getElementsByClassName("column-one")[0];
  const columnR = document.getElementsByClassName("column-two")[0];
  const galleryLocal = document.getElementById("gallery");
  

  window.addEventListener("scroll", function (e) {
    let galleryTop = getElementViewPosition6(galleryLocal).y;    
  
    if(galleryTop< -100){
      // 希望是正常的
      columnL.style.marginTop = "0px"
      columnL.style.transition = "1s"
  
      columnR.style.marginTop = "0px"
      columnR.style.transition = "1s"
  
    }else{
      columnL.style.marginTop = "40px"
      columnL.style.transition = "1s"
  
      columnR.style.marginTop = "40px"
      columnR.style.transition = "1s"
    }
  
  })


//   --------------- 缺失一个页面的 ---------


// --------------- Column Moving ------------- 暂时不工作呢@@@@@@@@@
const columnLeft = document.getElementsByClassName("container-up")[0];
const columnRight = document.getElementsByClassName("container-up")[1];
const imageWallLocal2 = document.getElementById("image-wall");

window.addEventListener("scroll", function (e) {
  var imageWallTop = getElementViewPosition6(imageWallLocal2).y

    if(imageWallTop >300 && imageWallTop < 600){
      columnLeft.style.marginTop = "-20px"
      columnRight.style.marginTop = "-60px"
    } else{
      columnLeft.style.marginTop = "0px"
      columnRight.style.marginTop = "0px"
    }
});
