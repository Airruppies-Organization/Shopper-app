import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Notification = ({ color = "#000000", ...props }) => (
  <Svg width={14} height={15} viewBox="0 0 14 15" fill="none" {...props}>
    <Path
      d="M12.5069 10.9548L12.5068 10.9546C12.4745 10.9199 12.4393 10.883 12.4018 10.8437C12.1284 10.557 11.7291 10.1382 11.3997 9.47108C11.0235 8.70937 10.7477 7.6525 10.7477 6.09375C10.7477 4.0673 9.33083 2.43916 7.39774 2.0376L6.99943 1.95485V1.54805V0.9375C6.99943 0.695661 6.80345 0.5 6.56252 0.5C6.32158 0.5 6.12561 0.695661 6.12561 0.9375V1.54805V1.95485L5.7273 2.0376C3.79421 2.43916 2.37736 4.0673 2.37736 6.09375C2.37736 7.6525 2.10156 8.70937 1.72538 9.47108C1.39591 10.1382 0.996639 10.557 0.723258 10.8437C0.685754 10.883 0.65062 10.9199 0.61836 10.9545L12.5069 10.9548ZM12.5069 10.9548C12.5928 11.047 12.6257 11.1488 12.625 11.2467L12.625 11.247M12.5069 10.9548L12.625 11.247M12.625 11.247C12.6236 11.4824 12.4408 11.6875 12.1846 11.6875H0.94045C0.684501 11.6875 0.501613 11.4826 0.500009 11.2467L12.625 11.247ZM7.84295 13.625C7.64299 14.1373 7.14485 14.5 6.56252 14.5C5.98019 14.5 5.48205 14.1373 5.28209 13.625H7.84295ZM0.500009 11.2466C0.499371 11.149 0.53208 11.0473 0.618286 10.9546L0.500009 11.2466Z"
      stroke={color}
    />
  </Svg>
);
export default Notification;
