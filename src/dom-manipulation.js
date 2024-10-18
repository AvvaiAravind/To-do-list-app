import {
  createElementWithClass,
  createElementWithId,
  appendElement,
  createButton,
} from "./uitility-function";

import { BlankProjectLoad } from "./blank-project-load";

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
    const checkDisplayDiv = document.querySelector(".project-display");
    console.log(checkDisplayDiv);

    if (!checkDisplayDiv) {
      inputAttributes.forEach((attr) =>
        inputField.setAttribute(attr, attributeValue)
      );

      const projectDisplay = createElementWithClass("div", "project-display");
      const saveButton = createButton("save-project", "Save", saveProjectFunc);
      const clearButton = createButton(
        "clear-project-input",
        "Clear",
        clearFunc
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
    console.log(inputText);
    if (inputText !== "") {
      li.textContent = inputText;
      console.log(li.textContent);

      appendElement(".checklist-ul", li);

      appendElement(`#checklist-li-${this.checklistCounter}`, i);
    }
    this.checklistCounter++;
    clearFunc();
  }
}

export function saveProjectFunc() {
  console.log("project saved");
}

function clearFunc() {
  const inputField = document.getElementById("project-list");
  inputField.value = "";
}

function cancelProjectDiv() {
  console.log("cancel the div");
  clearFunc();
  const projectDisDiv = document.querySelector(".project-display");
  projectDisDiv.remove();
}
