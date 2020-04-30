// ----------- Preview Button Effects ------------
const previewButton = document.getElementById("galleryButtonsPreview");
const pageButton = document.getElementsByClassName("pageAnimation")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const title = document.getElementById("titlewrapper");

previewButton.addEventListener("click", (event) => {
  slogan.style.animation = "fadeOut2 .5s";
  pageButton.style.animation = "fadeOut .5s";
  paragraph.style.animation = "fadeOut 1s";
  title.style.animation = "FirstLine .5s, SecondLine .5s .3s";

  // reset
  setMyTimer(slogan, 500, "");
  setMyTimer(pageButton, 500, "");
  setMyTimer(paragraph, 500, "");
  setMyTimer(title, 800, "");

  // BackGround Flash
  gallery22.style.animation = "flashOnce 5s";
  if (gallery22.style.animation !== "") {
    gallery22.style.animation = "";
    setMyTimer(gallery22, 100, "flashOnce 5s");
  }
});

// ---------------- Preview Button 下划线造型 -------------
previewButton.addEventListener("mouseover", (event) => {
  previewButton.className = "PreviewButton myNewClass2";
});

previewButton.addEventListener("mouseout", (event) => {
  previewButton.className = "PreviewButton";
});

// ----------- Next Button Effects ------------
const NextButton = document.getElementById("galleryButtonsNext");
const gallery22 = document.getElementById("gallery");
const slogan = document.getElementsByName("slogan")[0];

const setMyTimer = (element, min, animation) =>
  setTimeout(function () {
    element.style.animation = animation;
    // element.style.backgroundImage = animation;
  }, min);

NextButton.addEventListener("click", (event) => {
  slogan.style.animation = "fadeOut2 .5s";
  pageButton.style.animation = "fadeOut .5s";
  paragraph.style.animation = "fadeOut .5s";
  title.style.animation = "FirstLine .5s, SecondLine .5s .3s";

  // reset
  setMyTimer(slogan, 500, "");
  setMyTimer(pageButton, 500, "");
  setMyTimer(paragraph, 500, "");
  setMyTimer(title, 800, "");

  // BackGround Flash
  gallery22.style.animation = "flashOnce 3s";
  if (gallery22.style.animation !== "") {
    gallery22.style.animation = "";
    setMyTimer(gallery22, 100, "flashOnce 3s");
  }
});

// ---------------- Next Button 下划线造型 -------------
NextButton.addEventListener("mouseover", (event) => {
  NextButton.className = "NextButton myNewClass";
});

NextButton.addEventListener("mouseout", (event) => {
  NextButton.className = "NextButton";
});

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
