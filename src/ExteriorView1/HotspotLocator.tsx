import React from "react";

import { HotspotCoordinates } from "../data";

interface HotspotLocatorProps extends React.ComponentProps<"button"> {
  coordinates: HotspotCoordinates;
}

const HotspotLocator: React.FC<HotspotLocatorProps> = ({
  coordinates,
  className,
  ...props
}) => (
  <button
    {...props}
    className={["hotspot-locator", className].join(" ")}
    style={{ top: coordinates.top, left: coordinates.left }}
  />
);

export default HotspotLocator;
