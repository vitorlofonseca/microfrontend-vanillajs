import { navigate } from "./routes/index";
import { mountHeader } from "./components/header.js";
export { stateManager } from "./state-management";

const headerDiv = document.getElementById("header");

const header = mountHeader();

headerDiv.appendChild(header);

navigate("");
