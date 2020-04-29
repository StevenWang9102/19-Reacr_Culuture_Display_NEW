
// ------------- View Projet Hover -------------
const viewProject = document.getElementById("view-project");
const viewHover = document.getElementsByClassName("view-project-hover").item(0);

viewProject.addEventListener("mouseover", (event) => {
  viewHover.style.top = "5px";
  viewHover.style.right = "-10px";
});

viewProject.addEventListener("mouseout", (event) => {
  viewHover.style.top = "60px";
  viewHover.style.right = "-60px";
});

// ----------- Preview Button Effects ------------
const previewButton = document.getElementById("galleryButtonsPreview");
const pageButton = document.getElementsByClassName("pageAnimation")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const title = document.getElementById("titlewrapper");

previewButton.addEventListener("click", (event) => {
  pageButton.style.animation = "fadeOut 1s";
  paragraph.style.animation = "fadeOut 1s";
  title.style.animation = "FirstLine .5s, SecondLine .5s .3s";

  setTimeout(function () {
    pageButton.style.animation = "";
    paragraph.style.animation = "";
  }, 500); 

  setTimeout(function () {
    title.style.animation = "";
  }, 800); 

});

// ----------- Next Button Effects ------------
const NextButton = document.getElementById("galleryButtonsNext");

NextButton.addEventListener("click", (event) => {
  pageButton.style.animation = "fadeOut .5s";
  paragraph.style.animation = "fadeOut .5s";
  title.style.animation = "FirstLine .5s, SecondLine .5s .3s";

  setTimeout(function () {
    pageButton.style.animation = "";
    paragraph.style.animation = "";
  }, 500); 

  setTimeout(function () {
    title.style.animation = "";
  }, 800); 
});
