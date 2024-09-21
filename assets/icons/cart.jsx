import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CartIcon = ({ color = "#000000", ...props }) => (
  <Svg
    width={30}
    height={29}
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.33642 17.055L3.44337 5.41557C3.22741 4.53371 3.2634 4.72568 2.57502 4.0673C1.88812 3.41042 0.77082 2.41157 0.209888 1.67068C-0.312037 0.979288 0.214387 0.170946 0.967281 0.00596756C1.76065 -0.0720217 2.19408 0.631364 2.698 1.1248L4.44672 2.83152C5.2776 3.63541 5.2116 3.36991 5.46653 4.49927C5.53852 4.81572 5.61351 5.12916 5.69749 5.4426C6.44886 5.4681 7.20775 5.4471 7.96061 5.4471L23.3511 5.4456C25.2048 5.4456 27.0616 5.4246 28.9152 5.4471C30.2409 5.4621 30.0925 6.42046 29.8075 7.35631C29.659 7.84222 29.5061 8.33116 29.3756 8.82157L27.0105 17.6283C26.8425 18.2477 26.793 19.0006 25.9831 19.0861C25.4597 19.1416 24.7803 19.1041 24.2449 19.1041L8.15562 19.1026C7.57222 19.1011 6.72184 18.9661 6.25693 19.4086C5.64804 19.9875 5.97347 21.0478 6.80584 21.1363C7.28876 21.1873 7.88866 21.1498 8.3821 21.1498H21.388L24.9649 21.1483C25.3758 21.1483 26.2502 21.1018 26.6161 21.1753C27.432 21.3372 27.672 22.4141 27.0556 22.996C26.6236 23.4039 25.8993 23.3034 25.3533 23.2869C27.336 26.3344 23.5971 29.9083 20.6904 27.8416C19.2657 26.8278 18.7227 24.7776 19.7951 23.305C18.8652 23.2705 17.9264 23.2945 16.995 23.2945L12.2376 23.2975C12.4926 23.6199 12.6591 24.0384 12.7416 24.4373C13.346 27.3633 10.048 29.5064 7.63788 27.8838C6.11261 26.8564 5.67169 24.7778 6.71101 23.2481C3.01711 23.0471 2.74724 17.6856 6.33907 17.0525L6.33642 17.055ZM27.1862 7.60517C26.4933 7.62617 25.7989 7.61417 25.106 7.61417L8.00424 7.61267C7.42684 7.61267 6.84794 7.60217 6.27054 7.62017C6.52249 8.88897 6.85393 10.1472 7.17041 11.4011L8.15275 15.3334C8.28173 15.8748 8.41221 16.4162 8.56218 16.9531L24.9621 16.9486L26.4649 11.2556C26.7858 10.0408 27.1397 8.82899 27.4262 7.60668L27.1847 7.60368L27.1862 7.60517ZM9.40523 23.8926C7.87996 24.1025 7.90999 26.2502 9.51922 26.2562C11.118 26.1617 10.8495 23.7786 9.40523 23.8926ZM22.3735 23.9076C20.8662 24.254 21.2307 26.5471 22.7964 26.2427C24.2767 25.8767 23.8208 23.7366 22.3735 23.9076Z"
      fill={color}
    />
  </Svg>
);
export default CartIcon;