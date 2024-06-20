import logo from "../icons/rectangle-list-regular.svg";

let emptyProjectElement;

function logoTextCont() {
  const logoTextCont = document.querySelector(".logoText");

  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.classList.add("logoImg");
  logoTextCont.appendChild(logoImg);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "Todo List";
  logoTextCont.append(title);
}

function buttonTodo() {
  const projects = document.querySelector(".projects");

  const creatBtn = document.createElement("button");
  creatBtn.classList.add("createBtn");
  creatBtn.innerHTML = "+";
  creatBtn.setAttribute("data-modal-target", "modal");
  projects.appendChild(creatBtn);
}

function defaultProjects() {
  const defaultProject = document.querySelector(".projects");
}

function empty() {
  const sideBarEmpty = document.querySelector(".sideBar");

  // Check if the element already exists to avoid creating duplicates
  if (!emptyProjectElement) {
    emptyProjectElement = document.createElement("p");
    emptyProjectElement.classList.add("emptyProject");
    emptyProjectElement.innerHTML = "Create a project!";
    sideBarEmpty.appendChild(emptyProjectElement);
  }
}

function removeEmptyProject() {
  const sideBarEmpty = document.querySelector(".sideBar");

  // Check if the element exists before attempting to remove it
  if (emptyProjectElement) {
    sideBarEmpty.removeChild(emptyProjectElement);
    emptyProjectElement = null;
  }
}

export { logoTextCont, buttonTodo, defaultProjects, empty, removeEmptyProject };
