// Light switch

const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");

lightButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
})

darkButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

// Counter tool 

const increaseButton = document.querySelector("#increaseBtn");
const decreaseButton = document.querySelector("#decreaseBtn");
const resetButton = document.querySelector("#resetBtn");
const numberInput = document.querySelector("#inputBox");
const numberOutput = document.querySelector("#result");

let action = "";

function counterTool(action) {
    let currentValue = Number(numberInput.value);

    if (action === "increase") {
        numberInput.value = currentValue + 1;  
    } else if (action === "decrease") {
        numberInput.value = currentValue - 1;
    } else if (action === "reset") {
        numberInput.value = 0;
    }

    numberOutput.textContent = `${numberInput.value}`;
};

increaseButton.addEventListener("click", () => {
    counterTool("increase");
});
decreaseButton.addEventListener("click", () => {
    counterTool("decrease");
});
resetButton.addEventListener("click", () => {
    counterTool("reset");
});