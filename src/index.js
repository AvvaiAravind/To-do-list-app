import "./style.css";
import { BlankProjectLoad } from "./blank-project-load";
import { InitialDomManip } from "./initial-dom-manipulation";
import { CreateToDo } from "./create-to-do";

const blankproject = new BlankProjectLoad();

new InitialDomManip(blankproject);

const myFirstToDo = new CreateToDo(
  "Homework",
  "History home work",
  "20 / 12 / 2024",
  "important",
  ["chapter1", "south indian kings topic"]
);

window.myFirstToDo = myFirstToDo;
