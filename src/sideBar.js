import logo from "./icons/rectangle-list-regular.svg";

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
  const todos = document.querySelector(".todos");

  const creatBtn = document.createElement("button");
  creatBtn.innerHTML = "Add";
  todos.appendChild(creatBtn);
}

export { logoTextCont, buttonTodo };
