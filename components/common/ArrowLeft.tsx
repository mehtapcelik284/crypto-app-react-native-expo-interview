import * as React from "react";
import Svg, { Path } from "react-native-svg";

type ArrowLeftProps = React.ComponentProps<typeof Svg> & {
  size?: number;
  color?: string;
};

const ArrowLeft = ({
  size = 24,
  color = "white",
  ...props
}: ArrowLeftProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeft;
