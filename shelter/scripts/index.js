import pets from "./pets.js";
import { createPetCard } from './main.js';

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
    const petsToShow = pets.slice(startIndex, endIndex);
    petsToShow.forEach(pet => {
        let card = createPetCard(pet);
        slider.appendChild(card);
    });
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