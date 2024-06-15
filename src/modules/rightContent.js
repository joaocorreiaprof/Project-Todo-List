import { Project } from "./createProject.js";

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
      if (projectData.title === displayProject.textContent) {
        createTodoInput(projectData, projects);
      }
    });
  });

  displayTodos.appendChild(buttonTodo);

  projectSelected.forEach((button) => {
    button.addEventListener("click", () => {
      displayProject.innerHTML = button.innerHTML;
      displayProjectTodos(button.innerHTML);
    });
  });
}

function createTodoInput(projectData, projects) {
  const displayTodos = document.querySelector(".todosProject");

  // create input
  const newTodo = document.createElement("input");
  newTodo.type = "text";
  newTodo.placeholder = "Enter your todo name:";
  newTodo.setAttribute("required", "");
  newTodo.classList.add("newTodo");
  displayTodos.appendChild(newTodo);

  // create input accept button
  const inputAccept = document.createElement("button");
  inputAccept.textContent = "Add";
  displayTodos.appendChild(inputAccept);

  // create input cancel button
  const inputCancel = document.createElement("button");
  inputCancel.textContent = "Cancel";
  displayTodos.appendChild(inputCancel);

  inputAccept.addEventListener("click", () => {
    const todoText = newTodo.value.trim();
    if (todoText !== "") {
      projectData.todo.push(todoText);
      localStorage.setItem("projects", JSON.stringify(projects));
      displayTodos.appendChild(createTodoButton(todoText));

      // Clear input fields
      displayTodos.removeChild(newTodo);
      displayTodos.removeChild(inputAccept);
      displayTodos.removeChild(inputCancel);
    }
  });

  inputCancel.addEventListener("click", () => {
    displayTodos.removeChild(newTodo);
    displayTodos.removeChild(inputAccept);
    displayTodos.removeChild(inputCancel);
  });
}

function createTodoButton(todoText) {
  const todoButton = document.createElement("button");
  todoButton.textContent = todoText;
  todoButton.classList.add("todoItem");
  return todoButton;
}

function displayProjectTodos(projectTitle) {
  const displayTodos = document.querySelector(".todosProject");
  displayTodos.innerHTML = ""; // Clear existing todos

  const buttonTodo = document.createElement("button");
  buttonTodo.textContent = "Add todo";
  buttonTodo.classList.add("todoButton");
  displayTodos.appendChild(buttonTodo);

  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let selectedProject = projects.find(
    (project) => project.title === projectTitle
  );

  if (selectedProject) {
    selectedProject.todo.forEach((todoText) => {
      displayTodos.appendChild(createTodoButton(todoText));
    });
  }

  buttonTodo.addEventListener("click", () => {
    createTodoInput(selectedProject, projects);
  });
}

// Load todos on page load
document.addEventListener("DOMContentLoaded", () => {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  const displayProject = document.querySelector(".selectedProject");
  if (projects.length > 0 && displayProject.innerHTML === "") {
    displayProject.innerHTML = projects[0].title;
    displayProjectTodos(projects[0].title);
  }
});

export { addProjectSelectedListeners, displayProjectTodos };
