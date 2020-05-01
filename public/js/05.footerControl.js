// ------------------ Title Hover ----------------
const titleOfLet = document.getElementById("letdothis");
const footer = document.getElementById("footer");

footer.addEventListener("mouseover", function (e) {
    
    footer.style.backgroundColor="white"
    // titleOfLet.style.visibility ="hidden";
    titleOfLet.style.animation = "blink-caret 0.5s step-end infinite";

    setTimeout(function () {
        // titleOfLet.style.visibility ="visible";
        titleOfLet.style.animation ="typing 4s steps(30, end), blink-caret 0.5s step-end infinite";
    }, 1);

    setTimeout(function () {
        footer.style.backgroundColor="black"
    }, 500);
}
)

// titleOfLet.addEventListener("mouseout", function (e) {
//     // titleOfLet.style.animation=""
//     titleOfLet.style.animation="typing 4s steps(30, end), blink-caret 0.5s step-end infinite"
// }
// )
