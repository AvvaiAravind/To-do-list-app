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
