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
  // top: 60px;
  // right: -60px;