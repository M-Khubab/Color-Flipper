const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let currentColorIndex = 0;

btn.addEventListener("click", function () {

    document.body.style.backgroundColor = colors[currentColorIndex];
    color.textContent = colors[currentColorIndex];

    currentColorIndex++;

    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
});

