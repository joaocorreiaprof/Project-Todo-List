// index.js

import "./style.css";
import { logoTextCont, buttonTodo } from "./sideBar";
import { openModal } from "./modalButton.js";

function displaySideBar() {
  logoTextCont();
  buttonTodo();

  const addBtn = document.querySelector("[data-modal-target='modal']");
  addBtn.addEventListener("click", () => {
    const modal = document.querySelector("#modal");
    openModal(modal);
  });

  // let todo = new Todos("Clean", "clean the fuucntion house");
  // todo.sayInfo();
}

displaySideBar();
