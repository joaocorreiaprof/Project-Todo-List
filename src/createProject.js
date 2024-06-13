class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }

  addProject() {
    const projectsDiv = document.querySelector(".projects");

    const projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    const projectButton = document.createElement("button");
    projectButton.classList.add("defaultProject");
    projectButton.textContent = this.title;
    projectContainer.appendChild(projectButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteProject");
    deleteButton.textContent = "Delete";
    projectContainer.appendChild(deleteButton);

    projectsDiv.appendChild(projectContainer);

    // Add event listener to the project button
    projectButton.addEventListener("click", () => {
      const displayProject = document.querySelector(".selectedProject");
      displayProject.innerHTML = this.title;
    });

    // Add event listener to the delete button
    deleteButton.addEventListener("click", () => {
      this.deleteProject();
      projectsDiv.removeChild(projectContainer);
    });
  }

  saveProject() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    if (
      !projects.find(
        (project) =>
          project.title === this.title &&
          project.description === this.description
      )
    ) {
      projects.push({ title: this.title, description: this.description });
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  deleteProject() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects = projects.filter(
      (project) =>
        project.title !== this.title || project.description !== this.description
    );
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  static loadProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    projects.forEach((projectData) => {
      const project = new Project(projectData.title, projectData.description);
      project.addProject();
    });
  }
}

function addProjectToDiv(title, description) {
  const newProject = new Project(title, description);
  newProject.addProject();
  newProject.saveProject();
}

export { addProjectToDiv, Project };
