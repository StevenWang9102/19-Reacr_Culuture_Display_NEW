const hoverRight = document.getElementsByClassName("hover-on-right")[0];
const imgBox = document.getElementsByClassName("img-wrapper")[1];


// 右侧
imgBox.addEventListener("mouseover", (event) => {
  console.log(event);
  
  hoverRight.style.left = "0px";
});

imgBox.addEventListener("mouseout", (event) => {
  hoverRight.style.left = "-420px";
});
