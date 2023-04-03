const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");
const equals = document.querySelector(".equals");

async function calculate() {
try {
    const expression = display.value.replace(/(\d+)%/g, (_, num) => num * 0.01);
    const result = await Function(`'use strict'; return (${expression})`)();
    display.value = result;
} catch (error) {
    display.value = "Error";
}
}

buttons.forEach((button) => {
button.addEventListener("click", () => {
    if (button.textContent === "C") {
    display.value = "";
    } else {
    display.value += button.textContent;
    }
});
});

equals.addEventListener("click", calculate);