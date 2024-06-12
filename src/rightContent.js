function addProjectSelectedListeners() {
  const projectSelected = document.querySelectorAll(".defaultProject");
  const displayProject = document.querySelector(".selectedProject");
  const displayTodos = document.querySelector(".todosProject");

  const buttonTodo = document.createElement("button");
  buttonTodo.textContent = "Add todo";

  displayTodos.appendChild(buttonTodo);

  projectSelected.forEach((button) => {
    button.addEventListener("click", () => {
      displayProject.innerHTML = button.innerHTML;
    });
  });
}

export { addProjectSelectedListeners };
