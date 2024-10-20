export function saveToLocal(todoDetails) {
  debugger;
  console.log("Saving object to session and local storage....");

  // save to session storage
  const existingtodoArrayS = sessionStorage.getItem("todoArray");
  if (existingtodoArrayS) {
    const todoArray = JSON.parse(existingtodoArrayS);
    const updatedArray = todoArray.concat(todoDetails);
    sessionStorage.setItem("todoArray", JSON.stringify(updatedArray));
  } else {
    sessionStorage.setItem("todoArray", JSON.stringify([todoDetails]));
  }

  const existingtodoArrayL = localStorage.getItem("todoArray");
  if (existingtodoArrayL) {
    const todoArray = JSON.parse(existingtodoArrayL);
    const updatedArray = todoArray.concat(todoDetails);
    localStorage.setItem("todoArray", JSON.stringify(updatedArray));
    // sessionStorage.setItem("todoArray", JSON.stringify(updatedArray));
  } else {
    localStorage.setItem("todoArray", JSON.stringify([todoDetails]));
  }

  //save to local storage

  return { todoDetails };
}
