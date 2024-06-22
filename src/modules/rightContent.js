import { empty } from "./sideBar";
import { parse, format } from "date-fns";

function addProjectSelectedListeners() {
  const projectSelected = document.querySelectorAll(".defaultProject");
  const displayProject = document.querySelector(".selectedProject");

  projectSelected.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Project selected:", button.innerHTML);
      displayProject.innerHTML = button.innerHTML;
      displayProjectTodos(button.innerHTML);
    });
  });
}

function createTodoInput(projectData, projects) {
  const displayTodos = document.querySelector(".todosProject");

  // Create todo text input
  const newTodo = document.createElement("input");
  newTodo.type = "text";
  newTodo.placeholder = "Enter your todo name:";
  newTodo.setAttribute("required", "");
  newTodo.classList.add("newTodo");
  displayTodos.appendChild(newTodo);

  // Create description input
  const newDescription = document.createElement("textarea");
  newDescription.placeholder = "Enter your todo description (optional):";
  newDescription.classList.add("newDescription");
  displayTodos.appendChild(newDescription);

  // Create date input
  const todosProjects = document.querySelector(".todosProject");
  const labelInput = document.createElement("label");
  labelInput.setAttribute("for", "date-input");
  labelInput.innerHTML = "Select a date (optional): ";
  todosProjects.appendChild(labelInput);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date-input");
  todosProjects.appendChild(dateInput);

  // Create input accept button
  const inputAccept = document.createElement("button");
  inputAccept.textContent = "Add";
  displayTodos.appendChild(inputAccept);

  // Create input cancel button
  const inputCancel = document.createElement("button");
  inputCancel.textContent = "Cancel";
  displayTodos.appendChild(inputCancel);

  // Add submit listener
  inputAccept.addEventListener("click", () => {
    const todoText = newTodo.value.trim();
    const todoDescription = newDescription.value.trim();
    const todoDate = dateInput.value
      ? format(
          parse(dateInput.value, "yyyy-MM-dd", new Date()),
          "MMMM do, yyyy"
        )
      : null;

    if (todoText !== "") {
      projectData.todo.push({
        text: todoText,
        description: todoDescription,
        date: todoDate,
      });
      localStorage.setItem("projects", JSON.stringify(projects));

      displayTodos.appendChild(
        createTodoButton(
          projectData.todo.length - 1,
          todoText,
          todoDescription,
          todoDate,
          projectData,
          projects
        )
      );

      // Clear input fields
      displayTodos.removeChild(newTodo);
      displayTodos.removeChild(newDescription);
      displayTodos.removeChild(labelInput);
      displayTodos.removeChild(dateInput);
      displayTodos.removeChild(inputAccept);
      displayTodos.removeChild(inputCancel);
    }
  });

  inputCancel.addEventListener("click", () => {
    displayTodos.removeChild(newTodo);
    displayTodos.removeChild(newDescription);
    displayTodos.removeChild(labelInput);
    displayTodos.removeChild(dateInput);
    displayTodos.removeChild(inputAccept);
    displayTodos.removeChild(inputCancel);
  });
}

function createTodoButton(
  index,
  todoText,
  todoDescription,
  todoDate,
  projectData,
  projects
) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("todoItem");

  const todoButton = document.createElement("button");
  todoButton.textContent = todoText;
  todoButton.classList.add("todoButton");
  todoItem.appendChild(todoButton);

  todoButton.addEventListener("click", () => {
    const existingDetails = todoItem.querySelector(".todoDetails");

    if (existingDetails) {
      todoItem.removeChild(existingDetails);
    } else {
      const todoDetails = document.createElement("div");
      todoDetails.classList.add("todoDetails");

      if (todoDate) {
        const dateLabel = document.createElement("p");
        dateLabel.textContent = `Due date: ${todoDate}`;
        todoDetails.appendChild(dateLabel);
      }

      if (todoDescription) {
        const descriptionLabel = document.createElement("p");
        descriptionLabel.textContent = `Description: ${todoDescription}`;
        todoDetails.appendChild(descriptionLabel);
      }

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        editTodo(todoItem, index, projectData, projects);
      });

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        projectData.todo.splice(index, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
        displayProjectTodos(projectData.title);
      });

      todoDetails.appendChild(editButton);
      todoDetails.appendChild(deleteButton);
      todoItem.appendChild(todoDetails);
    }
  });

  return todoItem;
}

function editTodo(todoItem, index, projectData, projects) {
  const todoTextElement = todoItem.querySelector(".todoButton");
  const todoDetails = todoItem.querySelector(".todoDetails");

  // Clear existing details
  todoItem.removeChild(todoDetails);

  // Create text input for editing
  const editText = document.createElement("input");
  editText.type = "text";
  editText.value = projectData.todo[index].text;
  todoItem.appendChild(editText);

  // Create description input for editing
  const editDescription = document.createElement("textarea");
  editDescription.value = projectData.todo[index].description || "";
  todoItem.appendChild(editDescription);

  // Create date input for editing
  const editDate = document.createElement("input");
  editDate.type = "date";
  editDate.value = projectData.todo[index].date
    ? format(
        parse(projectData.todo[index].date, "MMMM do, yyyy", new Date()),
        "yyyy-MM-dd"
      )
    : "";
  todoItem.appendChild(editDate);

  // Create save button
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    const updatedText = editText.value.trim();
    const updatedDescription = editDescription.value.trim();
    const updatedDate = editDate.value
      ? format(parse(editDate.value, "yyyy-MM-dd", new Date()), "MMMM do, yyyy")
      : null;

    if (updatedText !== "") {
      projectData.todo[index].text = updatedText;
      projectData.todo[index].description = updatedDescription;
      projectData.todo[index].date = updatedDate;
      localStorage.setItem("projects", JSON.stringify(projects));
      displayProjectTodos(projectData.title);
    }
  });

  // Create cancel button
  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    displayProjectTodos(projectData.title);
  });

  todoItem.appendChild(saveButton);
  todoItem.appendChild(cancelButton);
}

function displayProjectTodos(projectTitle) {
  const displayTodos = document.querySelector(".todosProject");
  displayTodos.innerHTML = "";

  const buttonTodo = document.createElement("button");
  buttonTodo.textContent = "+";
  buttonTodo.classList.add("todoButton");
  displayTodos.appendChild(buttonTodo);

  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let selectedProject = projects.find(
    (project) => project.title === projectTitle
  );

  if (selectedProject) {
    console.log("Selected project todos:", selectedProject.todo);
    selectedProject.todo.forEach((todo, index) => {
      displayTodos.appendChild(
        createTodoButton(
          index,
          todo.text,
          todo.description,
          todo.date,
          selectedProject,
          projects
        )
      );
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
  if (projects.length < 1) {
    empty();
  }
});

export { addProjectSelectedListeners, displayProjectTodos };
