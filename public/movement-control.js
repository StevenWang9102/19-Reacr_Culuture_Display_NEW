const video = document.getElementById("myVideo");
const viewProject = document.getElementsByClassName("view-project");
const viewHover = document.getElementsByClassName("view-project-hover");

video.addEventListener("mouseover", (event) => {
  console.log(video);
  video.style.transition = "2s";
  video.style.position = "absolute";
  video.style.width = "100%";
  video.style.top = "0";
  console.log(video.style.right);

  video.style.right = "-260px";
  // 这里不太明白呢。。。
});

video.addEventListener("mouseout", (event) => {
  video.style.position = "absolute";
  video.style.right = "-500px";
});


// console.log(Object.values(viewProject));
// 是对象？HTMLCollection


Object.values(viewProject).map((element, index) => {

  element.addEventListener("mouseover", (event) => {
    Object.values(viewHover)[0].style.right = "-114px";
    Object.values(viewHover)[0].style.transition = "2s";
  });

  element.addEventListener("mouseout", (event) => {
    // Object.values(viewHover)[0].style.top = "-10px";
    Object.values(viewHover)[0].style.right = "-227px";
    Object.values(viewHover)[0].style.transition = "2s";
  });
});


