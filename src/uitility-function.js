import { parseISO, startOfToday } from "date-fns";

export function createElementWithClass(element, ...classattribute) {
  const newElement = document.createElement(element);
  const classattributes = [...classattribute];

  classattributes.forEach((attribute) => {
    newElement.classList.add(attribute);
  });
  return newElement;
}

export function createElementWithId(element, id) {
  const newElement = document.createElement(element);

  newElement.id = id;
  return newElement;
}

export function appendElement(parent, child) {
  const parentElement = document.querySelector(parent);

  if (parentElement) {
    parentElement.appendChild(child);
    // return appendedElement;
  } else {
    console.warn(`Parent element ${parent} not found`);
    return null;
  }
}

export function dateValidation(duedate) {
  let dateObj = parseISO(duedate);

  if (dateObj < startOfToday) {
    alert("You've entered a past date, Please enter present or future date");
    return false;
  } else {
    return true;
  }
}

export function formValidation(title, description, dueDate) {
  if (title == "" || description == "" || dueDate == "") {
    alert("Title, Description, Due Date are requried fields");
    return false;
  } else {
    return true;
  }
}

export function createButton(idname, buttonname, callbackfunc) {
  const button = createElementWithId("button", idname);
  button.textContent = buttonname;
  button.addEventListener("click", callbackfunc);
  return button;
}
