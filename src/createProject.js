class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addProject() {
    const projectsDiv = document.querySelector(".projects");
    const projectButton = document.createElement("button");
    projectButton.classList.add("defaultProject");
    projectButton.textContent = this.title;
    projectsDiv.appendChild(projectButton);

    // Add event listener to the user projects
    projectButton.addEventListener("click", () => {
      const displayProject = document.querySelector(".selectedProject");
      displayProject.innerHTML = this.title;
    });
  }
}

function addProjectToDiv(title, description) {
  const newProject = new Project(title, description);
  newProject.addProject();
}

export { addProjectToDiv };
