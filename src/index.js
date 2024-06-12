import "./style.css";
import { logoTextCont, buttonTodo, defaultProjects } from "./sideBar";
import { openModal } from "./modalButton.js";
import "./submit.js";
import { addProjectSelectedListeners } from "./rightContent.js";

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
