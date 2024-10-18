import {
  createElementWithClass,
  createElementWithId,
  appendElement,
} from "./uitility-function";

import { BlankProjectLoad } from "./blank-project-load";

export class InitialDomManip {
  constructor(project) {
    // heading
    this.heading = createElementWithClass("h1", "h1");
    this.heading.textContent = "To Do WebApp";
    appendElement(".header", this.heading);
    console.log("Created and appended  heading to the header");

    /* // default project load
    this.projectInfoSection = createElementWithClass(
      "section",
      "project-info-section"
    );
    this.projectInfoSection.textContent = project.projectTitle;
    appendElement(".content", this.projectInfoSection);
    console.log("Created and appended projectinfo section "); */
  }
}
