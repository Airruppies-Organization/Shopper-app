import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Cancel = ({ color, ...props }) => (
  <Svg
    width={43}
    height={40}
    viewBox="0 0 43 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.41406 2.58594L40.4141 37.5859"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M2.58594 37.5859L37.5859 2.58594"
      stroke={color}
      strokeWidth={4}
      strokeLinecap="round"
    />
  </Svg>
);
export default Cancel;
