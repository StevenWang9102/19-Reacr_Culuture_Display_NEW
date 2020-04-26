const viewProject = document.getElementById("view-project");
const viewHover = document.getElementsByClassName("view-project-hover").item(0);
console.log(viewHover);

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
