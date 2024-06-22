const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

const openModal = (modal) => {
  if (modal === null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

const closeModal = (modal) => {
  if (modal === null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

export { openModal, closeModal };