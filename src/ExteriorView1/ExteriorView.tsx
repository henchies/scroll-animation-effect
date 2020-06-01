import React, { useEffect, useState, useRef } from "react";
import { useSpring } from "react-spring";

import { exteriorHotspots as hotspots } from "../data";
// import Animation from './Animations/ControlledImage';
import Animation from "./Animations/ControlledVideo";
import HotspotsList from "./HotspotsList";
import HotspotLocator from "./HotspotLocator";

const ExteriorView: React.FC = () => {
  // position of the scroll in %
  // const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollOffset, setScrollOffset] = useSpring(() => ({
    offset: 0,
    config: {
      precision: 1,
      duration: undefined,
      tension: 280,
      friction: 60

      // onStart: console.log("▶ key is about to be animated")
    }
  }));
  // boolean flag: used to listen to scroll event or ignore
  // we will listen to the scroll only if the scroll container is full-screen, e.g. not when the header is shown.
  const [isContainerSticky, setIsContainerSticky] = useState<boolean>(false);
  // Refs of the DOM element we will use for scroll offset calculation
  const header = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLDivElement>(null);

  // useEffect hook: listen to the scroll on the window
  // once the list container has been scrolled entirely,
  // stick the container so we can start listen to scroll events on it
  // NOTE: we could use an intersection observer for that perhaps?
  useEffect(() => {
    const onWindowScroll = () => {
      if (header && header.current) {
        const { top } = header.current.getBoundingClientRect();

        console.info(
          "header scroll offset",
          top,
          top + window.innerHeight,
          top + window.innerHeight <= 0
        );

        // Now we scrolled the header all the way: stick the next container!
        setIsContainerSticky(top + window.innerHeight <= 0);
      }
    };

    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, [header, setIsContainerSticky]);

  // useEffect hook: listen to the scroll on the list container to calculate the scroll offset
  useEffect(() => {
    const onElementScroll = () => {
      if (container && container.current && list && list.current) {
        // this calculates the scroll offset on the list, relative to the window.
        // To be used if the eventListener is set on the window object!
        // const offset = Math.round(
        //   (100 * window.scrollY) /
        //     (container.current.offsetHeight - window.innerHeight)
        // );

        // this calculates the scroll offset on the list, relative ot its container.
        // to be used if the eventListener is set on the container object.
        const offset = Math.round(
          (100 * container.current.scrollTop) /
            (list.current.offsetHeight - container.current.offsetHeight)
        );
        console.info("___", offset);
        setScrollOffset({ offset: offset });
      }
    };

    if (container && container.current && isContainerSticky) {
      const { current: target } = container;
      target.addEventListener("scroll", onElementScroll);

      return () => {
        target.removeEventListener("scroll", onElementScroll);
      };
    }
  }, [container, isContainerSticky, setScrollOffset]);

  const length = hotspots.length;
  const activeHotspot = hotspots.find(
    (hotspot, index) =>
      scrollOffset.offset >= (100 * index) / length &&
      (index === length - 1 ||
        scrollOffset.offset < (100 * (index + 1)) / length)
  );

  return (
    <div className="exterior">
      <header className="header" ref={header}>
        HEADER
      </header>
      <div
        className={[
          "animation-wrapper",
          isContainerSticky ? "sticky" : ""
        ].join(" ")}
      >
        <div className="animation-container">
          <Animation offset={scrollOffset.offset} />
          {/* <Animation offset={scrollOffset.offset} /> */}
        </div>
        <div className="hotspots-list-container" ref={container}>
          <HotspotsList
            activeHotspot={activeHotspot}
            hotspots={hotspots}
            offset={60}
            ref={list}
          />
        </div>
        {activeHotspot && (
          <HotspotLocator
            coordinates={activeHotspot.hotspot.coordinates}
            onClick={(event: React.MouseEvent) => {
              console.info("Clicked on hotspot", activeHotspot);
              alert(`You just clicked on Hotspot: ${activeHotspot.title}`);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ExteriorView;
