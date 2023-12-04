
// Toggle footer Visibility OnLoad

document.addEventListener("DOMContentLoaded", function () {
    const topFquesElements = document.querySelectorAll(".top-fques");
    const bottomFquesElements = document.querySelectorAll(".bottom-fques");

    topFquesElements.forEach(function (topFques, index) {
        topFques.addEventListener("click", function () {
            const targetId = topFques.getAttribute("data-target");
            const bottomFques = document.getElementById(targetId);

            if (bottomFques) {
                bottomFquesElements.forEach(function (bfElement, bfIndex) {
                    if (index === bfIndex) {
                        bfElement.style.display = bfElement.style.display === "block" ? "none" : "block";
                        topFques.classList.toggle("top-fques-change");
                        topFques.classList.toggle("fques-icon-change");
                    } else {
                        bfElement.style.display = "none";
                        topFquesElements[bfIndex].classList.remove("top-fques-change");
                        topFquesElements[bfIndex].classList.remove("fques-icon-change");
                    }
                });
            }
        });
    });
});
