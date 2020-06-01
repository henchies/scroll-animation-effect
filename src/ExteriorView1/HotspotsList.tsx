import React from "react";
import { OffsetAware } from "./types";

import { Hotspot } from "../data";

interface HotspotsListProps extends React.ComponentPropsWithRef<"div">, OffsetAware {
  activeHotspot?: Hotspot;
  hotspots: Hotspot[];
}

const HotspotsList: React.FC<HotspotsListProps> = React.forwardRef(({ activeHotspot, hotspots, offset }, ref) => (
  <div className="hotspots-list" ref={ref}>
    {hotspots.map((hotspot, index) => (
      <h3
        key={hotspot.id}
        className={[
          'hotspot',
          activeHotspot?.id === hotspot.id ? "active" : ""
        ].join(' ')}
      >
        {hotspot.title}
      </h3>
    ))}
  </div>
));

HotspotsList.defaultProps = {
  hotspots: []
};

export default HotspotsList;
