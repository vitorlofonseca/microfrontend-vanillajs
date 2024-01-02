import { mountHomePage } from "../container/src/home";
import { mountShipmentsPage } from "shipments/ShipmentsIndex";
import { mountTrackingPage } from "tracker/TrackerIndex";

export const ROUTES = {
  "": mountHomePage,
  home: mountHomePage,
  tracking: mountTrackingPage,
  shipments: mountShipmentsPage,
};

export const navigate = (destinationRoute) => {
  const functionDestinationRoute = ROUTES[destinationRoute];

  if (!functionDestinationRoute) {
    console.error("destinationRoute not defined as possible route", ROUTES);
  }

  const rootDiv = document.getElementById("container");
  rootDiv.innerHTML = "";
  functionDestinationRoute(rootDiv);
};
