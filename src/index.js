import "./style.css";
import { BlankProjectLoad } from "./blank-project-load";
import { DomManip } from "./dom-manipulation";
import { CreateToDo } from "./create-to-do";

const initialDomObject = new DomManip();
const addTask = document.querySelector(".task-button");
const dialog = document.querySelector("dialog");
const addProject = document.querySelector(".add-project");

addTask.addEventListener("click", () => {
  dialog.showModal();
});

addProject.addEventListener("click", () => {
  initialDomObject.addAProjectFunc();
});

dialog.addEventListener("click", dialogEventFunc);

function dialogEventFunc(e) {
  let target = e.target;

  switch (target.id) {
    case "dialog-close-button":
      dialog.close();
      break;
    case "add-checklist-button":
      initialDomObject.addChecklistItems();
      break;
    case "include-button":
      const todo = new CreateToDo();
      // return todo;
      break;
  }
  console.log(target.className);
  if (target.classList.contains("fa-solid")) {
    initialDomObject.removeChecklistItems(e);
  }
}
