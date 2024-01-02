import { navigate } from "../../routes/index.js";
import { mountHeader } from "../../components/header.js";

const headerDiv = document.getElementById("header");

const header = mountHeader();

headerDiv.appendChild(header);

navigate("");
