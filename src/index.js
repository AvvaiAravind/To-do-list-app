import "./style.css";
import { BlankProjectLoad } from "./blank-project-load";
import {
  DomManip,
  displayToDo,
  displayFromSession,
  displayFromLocal,
  displayAllTask,
  displayImportant,
  displayToday,
} from "./dom-manipulation";
import { CreateToDo } from "./create-to-do";
import { removeChecklistChild } from "./uitility-function";
import { saveToLocal } from "./manage-local-storage";

window.onload = (function () {
  const lastOpened = sessionStorage.getItem("lastOpened");
  const currentTime = new Date().getTime();
  const toDoArticle = document.querySelector(".todo-lists");

  if (lastOpened) {
    displayFromSession(sessionStorage.getItem("todoArray"));
  }
  if (!toDoArticle.firstChild) {
    displayFromLocal(localStorage.getItem("todoArray"));
  }
  // displayFromLocal(localStorage.getItem("todoArray"));
  const initialDomObject = new DomManip();
  const addTask = document.querySelector(".task-button");
  const dialog = document.querySelector("dialog");
  const addProject = document.querySelector(".add-project");
  const form = document.querySelector("form");
  const checklistUl = document.querySelector(".checklist-ul");

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
        form.reset();
        removeChecklistChild();
        dialog.close();
        break;
      case "add-checklist-button":
        initialDomObject.addChecklistItems();
        break;
      case "include-button":
        e.preventDefault();
        let todo = CreateToDo.gatherData();
        if (todo) {
          console.log(todo);
          saveToLocal(todo.getDetails());
          displayToDo(todo.getDetails());
          removeChecklistChild();
          form.reset();
          dialog.close();
        }

      // return todo;
      // dialog.break;
    }
    console.log(target.className);
    if (target.classList.contains("fa-solid")) {
      initialDomObject.removeChecklistItems(e);
    }
  }

  sessionStorage.setItem("lastOpened", currentTime);

  const allTask = document.querySelector(".all-task");
  allTask.addEventListener("click", displayAllTask);

  const important = document.querySelector(".important");
  important.addEventListener("click", displayImportant);

  const today = document.querySelector(".today");
  today.addEventListener("click", displayToday);
})();
