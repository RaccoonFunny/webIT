let btn = document.querySelector("#openModal");
let modal = document.querySelector("#modal-wrapper");
let isOpen = false;

btn.addEventListener("click", () => {
    modal.classList.remove("d-none");
    isOpen = !isOpen;
});

modal.addEventListener("click", () => {
    modal.classList.add("d-none");
    isOpen = !isOpen;
});

