import logo from "./icons/rectangle-list-regular.svg";

function header() {
  const logoText = document.querySelector(".logoText");

  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.classList.add("logoImg");
  logoText.appendChild(logoImg);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "Todo List";
  logoText.append(title);
}
export { header };
