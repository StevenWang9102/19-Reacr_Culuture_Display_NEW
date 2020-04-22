// ------------- View Projet Hover -------------
const video = document.getElementById("myVideo");

video.addEventListener("mouseover", (event) => {
  video.style.right = "-100px";
});

video.addEventListener("mouseout", (event) => {
  video.style.right = "-350px";
});