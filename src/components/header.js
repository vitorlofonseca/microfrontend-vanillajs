import { mountLink } from "./link.js";

export const mountHeader = () => {
  const homeLink = mountLink("Home", "home");
  const detailsLink = mountLink("Tracking", "tracking");
  const shipmentsLink = mountLink("Shipments", "shipments");

  const header = document.createElement("header");
  header.appendChild(homeLink);
  header.appendChild(detailsLink);
  header.appendChild(shipmentsLink);
  header.style.cssText = `
        display: flex;
        gap: 20px;
        background-color: #d1d1d1;
        padding: 20px;
        `;

  return header;
};
