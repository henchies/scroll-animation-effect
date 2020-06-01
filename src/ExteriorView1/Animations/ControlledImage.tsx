import React, { useEffect, useState } from "react";

import { OffsetAware } from "../types";

interface ControlledImageProps
  extends React.ComponentProps<"img">,
    OffsetAware {}

const generateRandomHexString = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const ControlledImage: React.FC<ControlledImageProps> = ({ offset }) => {
  const [source, setSource] = useState<string>(
    "https://dummyimage.com/1920x1080.jpg/ff4444/ffffff"
  );

  useEffect(() => {
    const randomColor = generateRandomHexString();
    setSource(`https://dummyimage.com/1920x1080.jpg/${randomColor}/ffffff`);
  }, [offset]);

  return <img alt="placeholder" src={source} />;
};

export default ControlledImage;
