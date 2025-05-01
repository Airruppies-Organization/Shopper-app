import * as React from "react";
import Svg, { G, Polyline } from "react-native-svg";

const Dropdown = ({ color, ...props }) => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100px"
    height="100px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    xmlSpace="preserve"
    {...props}
  >
    <G>
      <Polyline
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinejoin="bevel"
        strokeMiterlimit={10}
        points="15,24 32,41  49,24  "
      />
    </G>
  </Svg>
);
export default Dropdown;
