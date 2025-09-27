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

increaseButton.addEventListener("click", () => {
    let currentValue = Number(numberInput.value);
    numberInput.value = currentValue + 1;
    console.log(numberInput.value);
});