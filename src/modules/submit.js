import { addProjectToDiv, Project } from "./createProject.js";
import { removeEmptyProject } from "./sideBar.js";
import { displayProjectTodos } from "./rightContent.js";

const displayProject = document.querySelector(".selectedProject");
document.addEventListener("DOMContentLoaded", () => {
  Project.loadProjects();
});

const form = document.getElementById("project-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    addProjectToDiv(title, description);
    closeModal(document.getElementById("modal"));
  });
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove("active");
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
  removeEmptyProject();
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  displayProject.innerHTML = projects[0].title;
  displayProjectTodos(projects[0].title);
}

export { form };
