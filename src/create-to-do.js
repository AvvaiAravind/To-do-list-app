/* let toDoArray = [];

export function createToDo(title, description, dueDate, prority, checklist) {
  console.log("creating to do");
  const toDo = { title, description, dueDate, prority, checklist };
  console.log("pushing new todo into the array");
  toDoArray.push(toDo);
  return { title, description, dueDate, prority, checklist };
}
 */
export class CreateToDo {
  static toDoArray = [];

  constructor(title, description, dueDate, priority, checklist) {
    console.log("creating to do");
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;

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
