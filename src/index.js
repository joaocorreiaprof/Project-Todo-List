import "./style.css";
import {
  logoTextCont,
  buttonTodo,
  defaultProjects,
} from "./modules/sideBar.js";
import { openModal } from "./modules/modalButton.js";
import "./modules/submit.js";
import { addProjectSelectedListeners } from "./modules/rightContent.js";

function displaySideBar() {
  logoTextCont();
  buttonTodo();
  defaultProjects();
  addProjectSelectedListeners();

  const addBtn = document.querySelector("[data-modal-target='modal']");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const modal = document.querySelector("#modal");
      openModal(modal);
    });
  }
}

displaySideBar();
