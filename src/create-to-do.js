import { compareAsc, format } from "date-fns";
import { dateValidation, formValidation } from "./uitility-function";

export class CreateToDo {
  static toDoArray = [];

  constructor(title, description, dueDate, priority, checklistItems) {
    console.log("creating to do");
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklistItems = checklistItems;
    console.log(this.checklistItems);

    if (this.checklistItems.length > 0) {
      this.checklistItems = Array.from(this.checklistItems).map(
        (items) => items.textContent
      );
      console.log(this.checklistItems);
    }
    console.log("pushing new todo into the array");
    CreateToDo.toDoArray.push(this);
  }

  static gatherData() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const checklistItems = document.querySelectorAll(".checklist-li");

    if (
      !dateValidation(dueDate) ||
      !formValidation(title, description, dueDate)
    ) {
      console.log("something is wrong");
      return null;
    }
    return new CreateToDo(
      title,
      description,
      dueDate,
      priority,
      checklistItems
    );
  }

  getDetails() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      checklists: this.checklistItems,
    };
  }
  getAllToDo() {
    return CreateToDo.toDoArray;
  }
}

/* let toDoArray = [];

export function createToDo(title, description, dueDate, prority, checklist) {
  console.log("creating to do");
  const toDo = { title, description, dueDate, prority, checklist };
  console.log("pushing new todo into the array");
  toDoArray.push(toDo);
  return { title, description, dueDate, prority, checklist };
}
 */
