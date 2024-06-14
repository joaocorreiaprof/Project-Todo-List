import { Project } from "./createProject";

function addProjectSelectedListeners() {
  const projectSelected = document.querySelectorAll(".defaultProject");
  const displayProject = document.querySelector(".selectedProject");
  const displayTodos = document.querySelector(".todosProject");

  const buttonTodo = document.createElement("button");
  buttonTodo.textContent = "Add todo";
  buttonTodo.classList.add("todoButton");

  buttonTodo.addEventListener("click", () => {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.forEach((projectData) => {
      if (projectData.title == displayProject.textContent) {
        projectData.todo.push("Hello World");
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects)); // Atualizar o localStorage com os dados modificados
  });

  displayTodos.appendChild(buttonTodo);

  projectSelected.forEach((button) => {
    button.addEventListener("click", () => {
      displayProject.innerHTML = button.innerHTML;
    });
  });
}

export { addProjectSelectedListeners };
