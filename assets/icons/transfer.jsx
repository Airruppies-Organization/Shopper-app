import * as React from "react";
import Svg, { Path, Line } from "react-native-svg";
const Transfer = ({ color, ...props }) => (
  <Svg
    width={30}
    height={24}
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 7H8V8H0V7Z" fill={color} />
    <Path d="M2 9H10V10H2V9Z" fill={color} />
    <Path d="M0 11.5H8V12.5H0V11.5Z" fill={color} />
    <Path d="M2 14H10V15H2V14Z" fill={color} />
    <Path d="M0 16H8V17H0V16Z" fill={color} />
    <Path
      d="M5 19H18V24L30 12L18 0V5H5V6H19V2.414L28.586 12L19 21.586V18H5"
      fill={color}
    />
    <Path
      d="M17.5576 16H16.6006L12.709 10.0039H12.6699C12.6797 10.1634 12.6911 10.3457 12.7041 10.5508C12.7171 10.7526 12.7269 10.9691 12.7334 11.2002C12.7432 11.4281 12.748 11.6608 12.748 11.8984V16H11.9766V8.86133H12.9287L16.8057 14.8379H16.8398C16.8333 14.724 16.8252 14.5628 16.8154 14.3545C16.8057 14.1429 16.7959 13.9167 16.7861 13.6758C16.7796 13.4316 16.7764 13.2054 16.7764 12.9971V8.86133H17.5576V16Z"
      fill={color}
    />
    <Line
      x1={11}
      y1={12.75}
      x2={19}
      y2={12.75}
      stroke={color}
      strokeWidth={0.5}
    />
    <Line
      x1={11}
      y1={11.75}
      x2={19}
      y2={11.75}
      stroke={color}
      strokeWidth={0.5}
    />
  </Svg>
);
export default Transfer;
