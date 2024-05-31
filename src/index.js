import "./style.css";
import { logoTextCont, buttonTodo } from "./sideBar";
import { Todos } from "./todo";

function displaySideBar() {
  logoTextCont();
  buttonTodo();
  // let todo = new Todos("Clean", "clean the fuucntion house");
  // todo.sayInfo();
}

displaySideBar();
