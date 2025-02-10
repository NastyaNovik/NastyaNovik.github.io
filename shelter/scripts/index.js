import pets from "./pets.js";

const slider = document.querySelector(".slider");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const itemsToDisplay = 3;
let currentIndex = 0;

function load() {
    slider.innerHTML = '';
    const startIndex = currentIndex;
    const endIndex = Math.min(currentIndex + itemsToDisplay, pets.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        let card = document.createElement("div");
        card.classList.add("pet");
        card.innerHTML = `
            <img src="${pets[i].img}" alt="${pets[i].name}">
            <p>${pets[i].name}</p>
            <a href="" class="btn-learn">Learn more</a>
        `;

        card.addEventListener("click", () => {
            document.getElementById("popup-img").src = pets[i].img;
            document.getElementById("popup-name").textContent = pets[i].name;
            document.getElementById("popup-desc").textContent = pets[i].description;
            document.getElementById("popup-age").textContent = pets[i].age;
            document.getElementById("popup-breed").textContent = pets[i].breed;
            document.getElementById("popup-type").textContent = pets[i].type;
            document.getElementById("popup-inoculations").textContent = pets[i].inoculations;
            document.getElementById("popup-diseases").textContent = pets[i].diseases;
            document.getElementById("popup-parasites").textContent = pets[i].parasites;
            popup.style.display = "flex";
        });

        slider.appendChild(card);
    }
}

load();

leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
        currentIndex -= 1;
    } else {
        currentIndex = pets.length - itemsToDisplay;
    }
    load();
});

rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex + itemsToDisplay < pets.length) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    load();
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup)
        popup.style.display = "none";
});