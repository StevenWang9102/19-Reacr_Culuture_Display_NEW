const video = document.getElementById("myVideo");
const viewProject = document.getElementsByClassName("view-project");
const viewHover = document.getElementsByClassName("view-project-hover");
const next = document.getElementsByClassName("Next");
const galleryImg = document.getElementsByClassName("gallery-img");
const whatWeDo = document.getElementById("what-we-do");
const ball = document.getElementsByClassName("float-ball");
const header1 = document.getElementsByName("whatwe").item(1);
// name="what-we-do-next"
const nextOfWhatWeDo = document.getElementsByName("what-we-do-next").item(0);

// console.log(title);
// $(".carousel").carousel({ interval: 30000 });

// ------------- View Projet Hover -------------
video.addEventListener("mouseover", (event) => {
  video.style.transition = "2s";
  video.style.position = "absolute";
  video.style.width = "100%";
  video.style.top = "0";
  video.style.right = "-260px";
  // 这里不太明白呢。。。
});

video.addEventListener("mouseout", (event) => {
  video.style.position = "absolute";
  video.style.right = "-500px";
});

// ------------- View Projet Hover -------------
Object.values(viewProject).map((element, index) => {
  element.addEventListener("mouseover", (event) => {
    Object.values(viewHover)[0].style.right = "-114px";
    Object.values(viewHover)[0].style.transition = "2s";
  });

  element.addEventListener("mouseout", (event) => {
    // 这里优化【0】
    Object.values(viewHover)[0].style.right = "-227px";
    Object.values(viewHover)[0].style.transition = "2s";
  });
});

// -------------- Next Button Click ------------
Object.values(next).map((element, index) => {

  // 现在的问题是获取不到img的属性值
  // 这是为什么呢，语法和上面的都是一样的
  element.addEventListener("click", (event) => {
  });
});

function changeFloatBall(top, left, visibility) {
  Object.values(ball)[0].style.transition = "2s";
  Object.values(ball)[0].style.position = "absolute";
  Object.values(ball)[0].style.top = top;
  Object.values(ball)[0].style.left = left;
  Object.values(ball)[0].style.visibility = visibility;
}

function changeHeaderPosition(left) {
  header1.style.left = left;
}

// --------------- Float Ball -----------
// 这个监测对象不对，还需要添加图片，图片z-linx太高了

// 可能要改变从mouseenter
window.addEventListener("mousemove", (event) => {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop <= "800") {
    changeFloatBall("520px", "-240px", "hiden");
    changeHeaderPosition("700px")
  }
  if (scrollTop > "800" && scrollTop <= "900") {
    changeFloatBall("20px", "-240px", "visible");
    changeHeaderPosition("600px")
  }
  if (scrollTop > "900" && scrollTop <= "1000") {
    changeFloatBall("60px", "-240px", "visible");
    changeHeaderPosition("500px")
  }
  if (scrollTop > "1000" && scrollTop <= "1100") {
    changeFloatBall("90px", "-240px", "visible");
    changeHeaderPosition("400px")
  }
  if (scrollTop > "1100" && scrollTop <= "1200") {
    changeFloatBall("220px", "-240px", "visible");
    changeHeaderPosition("300px")
  }
  if (scrollTop > "1200") {
    changeFloatBall("40px", "-240px", "visible");
    changeHeaderPosition("200px")
  }
});


// 每一个标题都要加入变换，而不是第一个
// nextOfWhatWeDo.addEventListener("click", (event) => {
//   // console.log(event);
//   const title = document.getElementsByName("title").item(0);
//   title.style.transform = 'rotateX(360deg)';
//   // video.style.right = "-500px";
//   // top: 230px;
// // 
// });


// -------------- IMAGE WALL -----------
const hoverBox = document.getElementsByClassName("hoverBox");
const hoverImg = document.getElementsByName("hoverImg");
console.log(Object.values(hoverImg)[0]);

Object.values(hoverBox)[0].addEventListener("mouseover", (event) => {
  Object.values(hoverBox)[0].style.top = "0px"
});

// 似乎需要合并。。。。
Object.values(hoverImg)[0].addEventListener("mouseover", (event) => {
  Object.values(hoverBox)[0].style.top = "0px"
});

Object.values(hoverBox)[0].addEventListener("mouseout", (event) => {
  Object.values(hoverBox)[0].style.top = "480px"
});