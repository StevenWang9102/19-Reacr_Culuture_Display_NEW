// ------------------ Functions ----------------
const setMyTimer = (element, min, animation) =>
  setTimeout(function () {
    element.style.animation = animation;
  }, min);

const setAnimation = (element, animation, delay, animation2) => {
  element.style.animation = animation;

  setTimeout(function () {
    element.style.animation = animation2;
  }, delay);
};

// ----------- Preview Button Effects ------------
const previewButton = document.getElementById("galleryButtonsPreview");
const pageButton = document.getElementsByClassName("pageAnimation")[0];
const paragraph = document.getElementsByClassName("paragraph")[0];
const image1 = document.getElementsByClassName("gallery-img")[0];
const image2 = document.getElementsByClassName("gallery-img")[1];
console.log(image2);

const title = document.getElementsByClassName("titlewrapper")[0];
const gallery2 = document.getElementById("gallery");

previewButton.addEventListener("click", (event) => {
  let currentSize = document.documentElement.clientWidth;

  if (currentSize >= 768) {
    setAnimation(slogan, "fadeOut2 1s ease", 1000, "");
    setAnimation(pageButton, "fadeOut .5s ease", 500, "");
    setAnimation(paragraph, "fadeOut .5s ease", 500, "");
    setAnimation(title, "FirstLine .3s ease, SecondLine .3s .2s ease", 500, "");
    setAnimation(image1, "FirstLineRight 1s ease", 1000, "");
    setAnimation(image2, "SecondLineRight 1s ease", 1000, "");  
  }

  // BackGround Flash
  gallery2.style.animation = "flashOnce 8s";
  if (gallery2.style.animation !== "") {
    gallery2.style.animation = "";
    setMyTimer(gallery2, 100, "flashOnce 5s");
  }
});

// ---------------- Preview Button Underline -------------
previewButton.addEventListener("mouseover", (event) => {
  previewButton.className = "PreviewButton myNewClass2";
});

previewButton.addEventListener("mouseout", (event) => {
  previewButton.className = "PreviewButton";
});

// ----------- Next Button Effects ------------
const NextButton = document.getElementById("galleryButtonsNext");
const slogan = document.getElementsByName("slogan")[0];

NextButton.addEventListener("click", (event) => {
  let currentSize = document.documentElement.clientWidth;

  if (currentSize >= 768) {
    setAnimation(slogan, "fadeOut2 1s ease", 1000, "");
    setAnimation(pageButton, "fadeOut .5s ease", 500, "");
    setAnimation(paragraph, "fadeOut .5s ease", 500, "");
    setAnimation(title, "FirstLine .3s ease, SecondLine .3s .2s ease", 500, "");  
    setAnimation(image1, "FirstLineRight 1s ease", 1000, "");
    setAnimation(image2, "SecondLineRight 1s ease", 1000, "");  
  }

  // BackGround Flash
  gallery2.style.animation = "flashOnce 3s";
  if (gallery2.style.animation !== "") {
    gallery2.style.animation = "";
    setMyTimer(gallery2, 100, "flashOnce 3s");
  }
});

// ---------------- Next Button UnderLine -------------
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
