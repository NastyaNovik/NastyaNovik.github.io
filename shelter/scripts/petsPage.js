import pets from "./pets.js";
import { createPetCard } from './main.js';

const petsBox = document.querySelector(".pets");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const pageNumber = document.querySelector(".page-number");
const doubleLeftArrow = document.querySelector(".arrow.double-left");
const doubleRightArrow = document.querySelector(".arrow.double-right");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let itemsPerPage = getItemsPerPage();
let currentPage = 1;
let totalPages = Math.ceil(pets.length / itemsPerPage);

function getItemsPerPage() {
    if (window.innerWidth >= 1280) {
        return 8;
    } else if (window.innerWidth >= 700) {
        return 6;
    } else {
        return 3;
    }
}

function load() {
    petsBox.innerHTML = "";
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, pets.length);
    const petsToShow = pets.slice(startIndex, endIndex);

    petsToShow.forEach(pet => {
        let card = createPetCard(pet);
        petsBox.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    pageNumber.textContent = currentPage;

    leftArrow.classList.toggle("disabled", currentPage === 1);
    doubleLeftArrow.classList.toggle("disabled", currentPage === 1);
    rightArrow.classList.toggle("disabled", currentPage === totalPages);
    doubleRightArrow.classList.toggle("disabled", currentPage === totalPages);

    leftArrow.style.pointerEvents = currentPage === 1 ? "none" : "auto";
    leftArrow.style.opacity = currentPage === 1 ? "0.5" : "1";
    doubleLeftArrow.style.pointerEvents = currentPage === 1 ? "none" : "auto";
    doubleLeftArrow.style.opacity = currentPage === 1 ? "0.5" : "1";

    rightArrow.style.pointerEvents = currentPage === totalPages ? "none" : "auto";
    rightArrow.style.opacity = currentPage === totalPages ? "0.5" : "1";
    doubleRightArrow.style.pointerEvents = currentPage === totalPages ? "none" : "auto";
    doubleRightArrow.style.opacity = currentPage === totalPages ? "0.5" : "1";
}

document.addEventListener("DOMContentLoaded", () => {

    leftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            load();
        }
    });

    rightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            load();
        }
    });

    doubleRightArrow.addEventListener("click", (e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
                currentPage = totalPages;
                load();
            }
        });


    doubleLeftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        if (currentPage > 1) {
            currentPage = 1;
            load();
        }
    });
});


closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup)
        popup.style.display = "none";
});


window.addEventListener("resize", () => {
    itemsPerPage = getItemsPerPage();
    totalPages = Math.ceil(pets.length / itemsPerPage);
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    load();
});

load();
