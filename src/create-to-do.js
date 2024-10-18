import { compareAsc, format } from "date-fns";
import { dateValidation, formValidation } from "./uitility-function";

export class CreateToDo {
  static toDoArray = [];

  constructor() {
    console.log("creating to do");
    this.title = document.getElementById("title").value;
    this.description = document.getElementById("description").value;
    this.dueDate = document.getElementById("due-date").value;
    this.priority = document.getElementById("due-date").value;
    this.checklistItems = document.querySelectorAll("checklist-li");
    console.log(this.checklistItems);

    console.log("pushing new todo into the array");
    CreateToDo.toDoArray.push(this);
  }
  getDetails() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      checklist: this.checklist,
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
