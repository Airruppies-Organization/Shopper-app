import * as React from "react";
import Svg, { Line } from "react-native-svg";
const Minus = ({ stroke, ...props }) => (
  <Svg
    width={5}
    height={1}
    viewBox="0 0 5 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Line y1={0.5} x2={5} y2={0.5} stroke={stroke} />
  </Svg>
);
export default Minus;
