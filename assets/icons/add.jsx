import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Add = ({ color = "#000000", ...props }) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8 3.33337V12.6667"
      stroke={color}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.33301 8H12.6663"
      stroke={color}
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Add;
