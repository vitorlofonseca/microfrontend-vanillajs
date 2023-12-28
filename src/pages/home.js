import { title } from "../components/title";
import { button } from "../components/button";
import { input } from "../components/input";
import { stateManager } from "../index";
import { v4 as uuidv4 } from "uuid";

export const mountHomePage = () => {
  const rootDiv = document.getElementById("container");

  const bodyContainer = document.createElement("div");
  const pageTitle = title(
    "Here you can add a new random shipment. To check your shipment, you can go to shipments tab, or go to tracking tab and search for the specific shipment code"
  );

  const shipmentItem = input("Item of your shipment");

  const increaseCounterBtn = button("Add", () => {
    stateManager.updateState({
      shipments: [
        ...stateManager.state.shipments,
        { id: uuidv4(), name: shipmentItem.value },
      ],
    });

    shipmentItem.value = "";
  });

  bodyContainer.appendChild(pageTitle);
  bodyContainer.appendChild(shipmentItem);
  bodyContainer.appendChild(increaseCounterBtn);

  bodyContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

  rootDiv.appendChild(bodyContainer);
};
