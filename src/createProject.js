class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addProject() {
    const projectsDiv = document.querySelector(".projects");
    const projectButton = document.createElement("button");
    projectButton.textContent = this.title;
    projectsDiv.appendChild(projectButton);
  }
}

function addProjectToDiv(title, description) {
  const newProject = new Project(title, description);
  newProject.addProject();
}

export { Project, addProjectToDiv };
