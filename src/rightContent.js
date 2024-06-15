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
        //projectData.todo.push("Hello World");
        createTodo();
      }
    });
    localStorage.setItem("projects", JSON.stringify(projects));
  });

  displayTodos.appendChild(buttonTodo);

  projectSelected.forEach((button) => {
    button.addEventListener("click", () => {
      displayProject.innerHTML = button.innerHTML;
    });
  });
}

function createTodo() {
  const displayTodos = document.querySelector(".todosProject");

  // create input
  const newTodo = document.createElement("input");
  newTodo.placeholder = "Enter your todo name:";
  newTodo.setAttribute("required", "");
  newTodo.classList.add("newTodo");
  displayTodos.appendChild(newTodo);

  //create input accept button

  const inputAccept = document.createElement("button");
  inputAccept.textContent = "Check";
  displayTodos.appendChild(inputAccept);

  inputAccept.addEventListener("click", () => {
    const todoText = newTodo.value.trim();
    if (todoText !== "") {
      const todoButton = document.createElement("button");
      todoButton.textContent = todoText;
      displayTodos.appendChild(todoButton);

      displayTodos.removeChild(newTodo);
      displayTodos.removeChild(inputAccept);
      displayTodos.removeChild(inputCancel);
    }
  });

  //create input cancel

  const inputCancel = document.createElement("button");
  inputCancel.textContent = "Cancel";
  displayTodos.appendChild(inputCancel);

  inputCancel.addEventListener("click", () => {
    displayTodos.removeChild(newTodo);
    displayTodos.removeChild(inputAccept);
    displayTodos.removeChild(inputCancel);
  });
}

export { addProjectSelectedListeners };
