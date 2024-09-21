import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Card = ({ color, ...props }) => (
  <Svg
    width={45}
    height={30}
    viewBox="0 0 45 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M41.6129 0H2.90323C1.30606 0 0 1.30606 0 2.90323V27.0968C0 28.6939 1.30606 30 2.90323 30H41.6129C43.2101 30 44.5161 28.6939 44.5161 27.0968V2.90323C44.5161 1.30606 43.2101 0 41.6129 0ZM42.5806 27.0968C42.5806 27.6298 42.1459 28.0645 41.6129 28.0645H2.90323C2.37019 28.0645 1.93548 27.6298 1.93548 27.0968V10.9834H42.5806V27.0968ZM42.5806 9.0479H1.93548V7.20881H42.5806V9.0479ZM42.5806 5.27332H1.93548V2.90313C1.93548 2.3701 2.37021 1.93539 2.90323 1.93539H41.6129C42.1459 1.93539 42.5806 2.37012 42.5806 2.90313V5.27332Z"
      fill={color}
    />
    <Path
      d="M30.2907 23.9517C31.2093 23.9517 32.0807 23.6606 32.8065 23.1767C33.5323 23.7098 34.4036 23.9517 35.3222 23.9517C37.7416 23.9517 39.7262 21.9671 39.7262 19.5477C39.7262 17.1284 37.7416 15.1929 35.3222 15.1929C34.4036 15.1929 33.5323 15.4839 32.8065 15.9678C32.0807 15.484 31.2585 15.1929 30.2907 15.1929C27.8714 15.1929 25.8867 17.1775 25.8867 19.5969C25.8867 22.0162 27.8714 23.9517 30.2907 23.9517ZM34.1125 17.4688C34.4509 17.276 34.8875 17.1777 35.273 17.1777C36.6283 17.1777 37.7416 18.291 37.7416 19.5971C37.7416 20.9523 36.6283 22.0656 35.273 22.0656C34.8383 22.0656 34.4508 21.9692 34.1125 21.7745C34.4509 21.1451 34.6928 20.4193 34.6928 19.6463C34.6928 18.8222 34.5 18.0963 34.1125 17.4688ZM30.2907 17.1286C31.6459 17.1286 32.7592 18.2419 32.7592 19.5971C32.7592 20.9523 31.6459 22.0656 30.2907 22.0656C28.9355 22.0656 27.8222 20.9523 27.8222 19.5971C27.8222 18.2419 28.9355 17.1286 30.2907 17.1286Z"
      fill={color}
    />
    <Path
      d="M5.99899 17.8071H17.0317C17.5648 17.8071 17.9995 17.3723 17.9995 16.8393C17.9995 16.3063 17.5647 15.8716 17.0317 15.8716H5.99899C5.46596 15.8716 5.03125 16.3063 5.03125 16.8393C5.03125 17.3705 5.46787 17.8071 5.99899 17.8071Z"
      fill={color}
    />
    <Path
      d="M5.99899 22.2089H17.0317C17.5648 22.2089 17.9995 21.7742 17.9995 21.2412C17.9995 20.7081 17.5647 20.2734 17.0317 20.2734H5.99899C5.46596 20.2734 5.03125 20.7082 5.03125 21.2412C5.03125 21.7742 5.46787 22.2089 5.99899 22.2089Z"
      fill={color}
    />
  </Svg>
);
export default Card;
