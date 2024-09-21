import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ScanIcon = ({ color = "#000000", ...props }) => (
  <Svg
    width={30}
    height={26}
    viewBox="0 0 30 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.15818 7.60871H2.18701V0.985584C2.18701 0.441147 2.62816 0 3.1726 0H10.8546V1.97117H4.15818V7.60871Z"
      fill={color}
    />
    <Path
      d="M10.8546 25.6253H3.1726C2.62816 25.6253 2.18701 25.1842 2.18701 24.6397V18.0166H4.15818V23.6541H10.8546V25.6253Z"
      fill={color}
    />
    <Path
      d="M27.8126 7.60871H25.8415V1.97117H19.145V0H26.8271C27.3715 0 27.8126 0.441147 27.8126 0.985584V7.60871Z"
      fill={color}
    />
    <Path
      d="M26.8271 25.6253H19.145V23.6541H25.8415V18.0166H27.8126V24.6397C27.8126 25.1842 27.3715 25.6253 26.8271 25.6253Z"
      fill={color}
    />
    <Path d="M30 11.4326H0V14.1923H30V11.4326Z" fill={color} />
  </Svg>
);
export default ScanIcon;
