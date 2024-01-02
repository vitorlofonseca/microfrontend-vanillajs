import { title } from "../../components/title";

export const mountShipmentsPage = (rootDiv) => {
  const bodyContainer = document.createElement("div");
  const pageTitle = title("Shipments");

  const shipments = document.createElement("div");
  shipments.innerHTML = JSON.stringify(window.stateManager.state.shipments);

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
