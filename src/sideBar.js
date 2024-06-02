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

  /*const personalLogo = document.createElement("img");
  personalLogo.src = personal;
  defaultProject.appendChild(personalLogo);*/

  const personal = document.createElement("button");
  personal.classList.add("defaultProject");
  personal.innerHTML = "Personal Development";
  defaultProject.appendChild(personal);

  const work = document.createElement("button");
  work.classList.add("defaultProject");
  work.innerHTML = "Work";
  defaultProject.appendChild(work);

  const home = document.createElement("button");
  home.classList.add("defaultProject");
  home.innerHTML = "Home Improvement";
  defaultProject.appendChild(home);

  const health = document.createElement("button");
  health.classList.add("defaultProject");
  health.innerHTML = "Health & Improvement";
  defaultProject.appendChild(health);

  const events = document.createElement("button");
  events.classList.add("defaultProject");
  events.innerHTML = "Events Planning";
  defaultProject.appendChild(events);

  const finance = document.createElement("button");
  finance.classList.add("defaultProject");
  finance.innerHTML = "Finance";
  defaultProject.appendChild(finance);

  const hobbies = document.createElement("button");
  hobbies.classList.add("defaultProject");
  hobbies.innerHTML = "Hobbies";
  defaultProject.appendChild(hobbies);
}

export { logoTextCont, buttonTodo, defaultProjects };
