import {
  createElementWithClass,
  createElementWithId,
  appendElement,
  createButton,
  removeToDolist,
} from "./uitility-function";
import { parseISO, startOfToday } from "date-fns";

import { BlankProjectLoad } from "./blank-project-load";
import { getDataFromStorage } from "./manage-local-storage";

export class DomManip {
  constructor(project) {
    this.checklistCounter = 0;
    // heading
    /*  this.heading = createElementWithClass("h1", "h1");
    this.heading.textContent = "To Do WebApp";
    appendElement(".header", this.heading);
    console.log("Created and appended  heading to the header"); */
    /* // default project load
    this.projectInfoSection = createElementWithClass(
      "section",
      "project-info-section"
    );
    this.projectInfoSection.textContent = project.projectTitle;
    appendElement(".content", this.projectInfoSection);
    console.log("Created and appended projectinfo section "); */
  }

  addAProjectFunc() {
    const inputAttributes = ["type", "name", "id"];
    const attributeValue = "project-list";
    const inputField = document.createElement("input");
    inputField.value = "This feature need to be implemented in future";
    const checkDisplayDiv = document.querySelector(".project-display");
    console.log(checkDisplayDiv);

    if (!checkDisplayDiv) {
      inputAttributes.forEach((attr) =>
        inputField.setAttribute(attr, attributeValue)
      );

      const projectDisplay = createElementWithClass("div", "project-display");
      const saveButton = createButton("save-project", "Save", saveProjectFunc);
      saveButton.setAttribute("disabled", "");
      const clearButton = createButton("clear-project-input", "Clear", () =>
        clearFunc("id", "clear-project-input")
      );
      const cancelButton = createButton(
        "cancel-project-div",
        "Cancel",
        cancelProjectDiv
      );

      appendElement(".project", projectDisplay);
      appendElement(".project-display", inputField);
      appendElement(".project-display", saveButton);
      appendElement(".project-display", clearButton);
      appendElement(".project", projectDisplay);
      appendElement(".project-display", cancelButton);
    }
  }

  removeChecklistItems(e) {
    console.log(e);
    const target = e.target;
    target.parentElement.remove();
  }

  addChecklistItems() {
    const li = createElementWithId(
      "li",
      `checklist-li-${this.checklistCounter}`
    );
    const i = createElementWithClass(
      "i",
      "fa-solid",
      "fa-square-xmark",
      "checklist-close-button"
    );
    const inputText = document.getElementById("checklist").value;
    li.className = "checklist-li";
    console.log(inputText);
    if (inputText !== "") {
      li.textContent = inputText;
      console.log(li.textContent);

      appendElement(".checklist-ul", li);

      appendElement(`#checklist-li-${this.checklistCounter}`, i);
    }
    this.checklistCounter++;
    clearFunc("id", "checklist");
  }
}

export function saveProjectFunc() {
  console.log("project saved");
}

function clearFunc(targetname, target) {
  if (targetname === "id") {
    const inputField = document.getElementById(target);
    inputField.value = "";
  } else if (targetname === "class") {
    const inputField = document.getElementsByClassName(target);
    inputField.value = "";
  }
}

function cancelProjectDiv() {
  console.log("cancel the div");
  clearFunc("id", "project-list");
  const projectDisDiv = document.querySelector(".project-display");
  projectDisDiv.remove();
}

export function displayToDo(todoDetails) {
  if (todoDetails) {
    console.log(todoDetails);
    const toDoArticle = document.querySelector(".todo-lists");
    const card = createElementWithClass("div", "card");

    for (let key in todoDetails) {
      const p = pTextContent(`${key} :${todoDetails[key]}`);
      card.appendChild(p);
    }

    appendElement(".todo-lists", card);
  } else {
    retrieveDateFromStorage();
  }
}

function pTextContent(textContent) {
  const p = document.createElement("p");

  p.textContent = textContent;
  return p;
}

export function displayFromSession(todoArray) {
  if (todoArray === null) return;
  const parsedArray = JSON.parse(todoArray);
  console.log(parsedArray);
  for (let array of parsedArray) {
    console.log(array);
    displayToDo(array);
  }
}

export function displayFromLocal(todoArray) {
  if (todoArray === null) return;

  console.log(todoArray);
  const parsedArray = JSON.parse(todoArray);
  console.log(parsedArray);

  for (let array of parsedArray) {
    console.log(array);
    if (array.priority === "High") {
      const toDoArticle = document.querySelector(".todo-lists");
      const card = createElementWithClass("div", "card");

      for (let key in array) {
        const p = pTextContent(`${key} :${array[key]}`);
        card.appendChild(p);
      }

      appendElement(".todo-lists", card);
    }
  }
}

export function displayAllTask() {
  removeToDolist();

  const dataFromStorage = getDataFromStorage();

  const todoArray = dataFromStorage.existingtodoArrayL
    ? dataFromStorage.existingtodoArrayL
    : dataFromStorage.existingtodoArrayS;

  if (todoArray === null) return;

  for (let array of todoArray) {
    console.log(array);

    const toDoArticle = document.querySelector(".todo-lists");
    const card = createElementWithClass("div", "card");

    for (let key in array) {
      const p = pTextContent(`${key} :${array[key]}`);
      card.appendChild(p);
    }

    appendElement(".todo-lists", card);
  }
}

export function displayImportant() {
  removeToDolist();
  const dataFromStorage = getDataFromStorage();

  const todoArray = dataFromStorage.existingtodoArrayL
    ? dataFromStorage.existingtodoArrayL
    : dataFromStorage.existingtodoArrayS;

  if (todoArray === null) return;

  for (let array of todoArray) {
    console.log(array);
    if (array.priority === "High" || array.priority === "Medium") {
      const toDoArticle = document.querySelector(".todo-lists");
      const card = createElementWithClass("div", "card");

      for (let key in array) {
        const p = pTextContent(`${key} :${array[key]}`);
        card.appendChild(p);
      }

      appendElement(".todo-lists", card);
    }
  }
}
export function displayToday() {
  removeToDolist();

  const dataFromStorage = getDataFromStorage();
  const todoArray = dataFromStorage.existingtodoArrayS || null;
  if (todoArray === null) return;

  for (let array of todoArray) {
    console.log(array);

    const toDoArticle = document.querySelector(".todo-lists");
    const card = createElementWithClass("div", "card");

    for (let key in array) {
      const p = pTextContent(`${key} :${array[key]}`);
      card.appendChild(p);
    }

    appendElement(".todo-lists", card);
  }
}
