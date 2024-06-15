import logo from "./icons/rectangle-list-regular.svg";
//import personal from "./icons/personal.svg";
//import work from "./icons/work.svg";
//import home from "./icons/home.svg";
//import health from "./icons/health.svg";
//import events from "./icons/event.svg"
//import finance from "./icons/finance.svg"
//import hobbies from "./hobbies.svg"

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
  creatBtn.innerHTML = "Add";
  creatBtn.setAttribute("data-modal-target", "modal");
  projects.appendChild(creatBtn);
}

function defaultProjects() {
  const defaultProject = document.querySelector(".projects");
}

export { logoTextCont, buttonTodo, defaultProjects };
