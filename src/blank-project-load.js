export class BlankProjectLoad {
  constructor() {
    this.projectArray = [];
    console.log("Created project array");

    this.projectTitle = "Default Project";
    console.log("Created project Title");

    this.projectArray.push(this.projectTitle);
    console.log("Pushed project Title to the array");
  }
}
