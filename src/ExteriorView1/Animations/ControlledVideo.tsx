import React, { useEffect, useRef } from "react";
import { animated } from "react-spring";

import { OffsetAware } from "../types";

interface ControlledVideoProps
  extends React.ComponentProps<"video">,
    OffsetAware {}

const ControlledVideo: React.FC<ControlledVideoProps> = ({ offset }) => {
  const player = useRef<HTMLVideoElement>(null);

  console.info("ControlledVideo offset prop", offset);
  useEffect(() => {
    if (player && player.current) {
      player.current.muted = true;
      const duration = player.current.duration;

      if (duration && !isNaN(duration)) {
        const videoOffset =
          (100 * parseFloat(((duration * offset) / 100).toFixed(2))) / 100;
        console.info(
          `scroll offset: ${offset}% - video offset: ${videoOffset}s`
        );
        player.current.currentTime = videoOffset;
      }
    }
  }, [offset, player]);

  return (
    <video preload="auto" muted playsInline ref={player}>
      <source
        src="https://webrtc.github.io/samples/src/video/chrome.mp4"
        type="video/mp4"
      />
      <source
        src="https://webrtc.github.io/samples/src/video/chrome.webm"
        type="video/webm"
      />
    </video>
  );
};

export default animated(ControlledVideo);
