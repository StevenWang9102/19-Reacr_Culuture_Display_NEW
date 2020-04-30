// var followingBall = document.getElementById("floatBall");
// var galleryButtons = document.getElementById("galleryButtons");

// console.log(followingBall);
// console.log(galleryButtons);

// // 如果鼠标hover ul
// // 那么小球跟随

// galleryButtons.addEventListener("mousemove", function (e) {
//     console.log(e.clientY);
//     followingBall.style.left = e.clientX - 900 + 70 + "px";
//     followingBall.style.top = e.clientY -440 -20+ "px";
//     // followingBall.style.transition = ".2s";
//     // 获取鼠标跟随
// })


// -------------------------- 原有的图片跟随技术 --------------------

// var followingBall = document.getElementById("followImg");

// document.onmousemove = function (e) {
//   setTimeout(function () {
//     followingBall.style.left = e.clientX - 100 + "px";
//     followingBall.style.top = e.clientY + "px";
//   }, 100);
// };
// // 鼠标持续变色
// // function changeColor(){
// //   setTimeout(changeColor, 2000)
// //   followingBall.style.backgroundColor = "red"
// // }
// // changeColor()