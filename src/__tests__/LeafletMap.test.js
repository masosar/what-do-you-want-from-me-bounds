import React from "react";
import { render } from "@testing-library/react";
import { MapContainer } from "react-leaflet";

it("should render component MapContainer", async () => {
  render(<MapContainer />);
});
