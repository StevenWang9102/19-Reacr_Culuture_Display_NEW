const viewProject = document.getElementById("view-project");
const viewHover = document.getElementsByClassName("view-project-hover").item(0);
console.log(viewHover);

// ------------- View Projet Hover -------------
  viewProject.addEventListener("mouseover", (event) => {
    viewHover.style.top = "-55px";
    viewHover.style.right = "-134px";
  });

  viewProject.addEventListener("mouseout", (event) => {
    viewHover.style.top = "0px";
    viewHover.style.right = "-180px";
  });
