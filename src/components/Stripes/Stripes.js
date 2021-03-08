import React from "react";
import { css, cx } from "@emotion/css";

const Stripes = ({
  children,
  background,
  foreground,
  stripeSize,
  rotation,
}) => {
  const stripeWidth = stripeSize || 100;
  const rotate = rotation || 0;

  return (
    <div
      className={css`
        background-color: ${background || "black"};
        background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><rect width="0.5" height="1" fill="${
          foreground || "red"
        }" /></svg>');
        background-size: ${stripeWidth}px ${stripeWidth}px;
        width: 100%;
        height: 100vh;
        min-height: 100vh;
        display: inline-block;
        transform: rotate(${rotate}deg)
      `}
    >
      {children}
    </div>
  );
};

export default Stripes;
