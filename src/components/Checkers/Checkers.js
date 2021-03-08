import React from "react";
import { css, cx } from "@emotion/css";

const Checkers = ({
  children,
  background,
  foreground,
  stripeSize,
  rotation,
  dimensionsOfBoard,
  dimensionsOfSquares,
}) => {
  return (
    <svg width="100%" height="100%">
      <pattern
        id="checkers"
        x="0"
        y="0"
        width={dimensionsOfBoard || 200}
        height={dimensionsOfBoard || 200}
        patternUnits="userSpaceOnUse"
      >
        <rect
          class="checker"
          x="0"
          width={dimensionsOfSquares || 100}
          height={dimensionsOfSquares || 100}
          y="0"
        ></rect>
        <rect
          class="checker"
          x={dimensionsOfSquares || 100}
          width={dimensionsOfSquares || 100}
          height={dimensionsOfSquares || 100}
          y={dimensionsOfSquares || 100}
        ></rect>
      </pattern>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#checkers)"></rect>
      {children}
    </svg>
  );
};

export default Checkers;
