import { title } from "../components/title";
import { stateManager } from "../index";

export const mountShipmentsPage = () => {
  const rootDiv = document.getElementById("container");

  const bodyContainer = document.createElement("div");
  const pageTitle = title("Shipments");

  const shipments = document.createElement("div");
  shipments.innerHTML = JSON.stringify(stateManager.state.shipments);

  bodyContainer.appendChild(pageTitle);
  bodyContainer.appendChild(shipments);

  bodyContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

  rootDiv.appendChild(bodyContainer);
};
