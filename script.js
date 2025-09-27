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

