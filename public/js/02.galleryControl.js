// document.write(<script language="javascript" src='/js/import.js'></script>);

// import getPosition from "./getElementPosition"

const viewProject = document.getElementById("view-project");
const viewHover = document.getElementsByClassName("view-project-hover").item(0);
console.log(viewHover);


// ------------------ Visibility ----------------
const gallery = document.getElementById("gallery");
const galleryContainer = document.getElementsByClassName("gallery-row")[0];
window.addEventListener("scroll", function (e) {
  var galleryTop = getElementViewPosition2(gallery).y

    if(galleryTop > 170){
      galleryContainer.style.visibility = "hidden"
      galleryContainer.style.opacity = 0;
      // galleryContainer.style.paddingTop = "100px"
    } else{
      galleryContainer.style.visibility = "visible"
      galleryContainer.style.opacity = 1;
      // galleryContainer.style.paddingTop = "0px"
    }
});

// ------------- View Projet Hover -------------
viewProject.addEventListener("mouseover", (event) => {
  viewHover.style.top = "5px";
  viewHover.style.right = "-10px";
});

viewProject.addEventListener("mouseout", (event) => {
  viewHover.style.top = "60px";
  viewHover.style.right = "-60px";
});

// ----------- Preview Button Fade out ------------
const previewButton = document.getElementById("galleryButtonsPreview");
const pageButton = document.getElementsByClassName("pageAnimation")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const title = document.getElementById("titlewrapper");
console.log(pageButton);

previewButton.addEventListener("click", (event) => {
  pageButton.style.animation = "fadeOut 1s";
  paragraph.style.animation = "fadeOut 1s";
  title.style.animation = "MoveDown 1s";

  setTimeout(function () {
    pageButton.style.animation = "";
    paragraph.style.animation = "";
    title.style.animation = "";
  }, 600);
});

// ----------- Next Button Fade out ------------
const NextButton = document.getElementById("galleryButtonsNext");

NextButton.addEventListener("click", (event) => {
  pageButton.style.animation = "fadeOut 1s";
  paragraph.style.animation = "fadeOut 1s";
  title.style.animation = "MoveDown 1s";

  setTimeout(function () {
    pageButton.style.animation = "";
    paragraph.style.animation = "";
    title.style.animation = "";
  }, 600);
});



const getElementViewPosition2 = (element) =>{
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