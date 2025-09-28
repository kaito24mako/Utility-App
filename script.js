// Tabs
const counterTab = document.querySelector("#counterTab");
const calculatorTab = document.querySelector("#calculatorTab");
const quoteTab = document.querySelector("#quoteTab");

const counterContent = document.querySelector(".counter");
const calculatorContent = document.querySelector(".calculator");
const quoteContent = document.querySelector(".quote-generator");

function showTab(content) {
    // hide everything
    counterContent.classList.remove("active-tab");
    calculatorContent.classList.remove("active-tab");
    quoteContent.classList.remove("active-tab");

    // show the tab content we want
    content.classList.add("active-tab");
}

counterTab.addEventListener("click", () => {
    showTab(counterContent);
})
calculatorTab.addEventListener("click", () => {
    showTab(calculatorContent);
})
quoteTab.addEventListener("click", () => {
    showTab(quoteContent);
})

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

// Counter - Tab Content

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

// Quote Generator - Tab Content 

const quoteButton = document.querySelector("#getQuote");
const outputQuote = document.querySelector("#outputQuote");

const quoteList = [
    "For those to whom much is given, much is required - the Bible",
    "Speak softly and carry a big stick - T. Roosevelt",
    "The truth will set you free - the Bible",
    "Whatever you are, be a good one - A. Lincoln",
    "Do what you can, with what you have, where you are - T. Roosevelt"
]

quoteButton.addEventListener("click", () => {
    if (quoteList.length > 0) {
        let randomIndex = Math.floor(Math.random() * quoteList.length);
        let removedQuote = quoteList.splice(randomIndex, 1);
        outputQuote.textContent = removedQuote;
    } else {
        outputQuote.textContent = "No more quotes left. Sorry!"
    }
});
