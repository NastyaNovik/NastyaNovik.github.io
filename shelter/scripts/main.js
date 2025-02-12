const menuList = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuList.addEventListener('click', () =>{
    menu.classList.toggle('active');
})

export function createPetCard(pet) {
    let card = document.createElement("div");
    card.classList.add("pet");
    card.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}">
        <p>${pet.name}</p>
        <a href="" class="btn-learn">Learn more</a>
    `;

    card.addEventListener("click", () => openPopup(pet));

    return card;
}

function openPopup(pet) {
    document.getElementById("popup-img").src = pet.img;
    document.getElementById("popup-name").textContent = pet.name;
    document.getElementById("popup-desc").textContent = pet.description;
    document.getElementById("popup-age").textContent = pet.age;
    document.getElementById("popup-breed").textContent = pet.breed;
    document.getElementById("popup-type").textContent = pet.type;
    document.getElementById("popup-inoculations").textContent = pet.inoculations;
    document.getElementById("popup-diseases").textContent = pet.diseases;
    document.getElementById("popup-parasites").textContent = pet.parasites;
    popup.style.display = "flex";
}