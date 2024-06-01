const form = document.getElementById("project-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const projectName = document.getElementById("project-name").value;
  const projectDescription = document.getElementById(
    "project-description"
  ).value;

  console.log("Project Name:", projectName);
  console.log("Project Description:", projectDescription);

  closeModal(document.getElementById("modal"));
});

export { form };
