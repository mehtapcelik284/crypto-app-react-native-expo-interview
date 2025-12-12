import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const responsiveWidth = (value: number) => {
  return (SCREEN_WIDTH / BASE_WIDTH) * value;
};

export const responsiveHeight = (value: number) => {
  return (SCREEN_HEIGHT / BASE_HEIGHT) * value;
};

export const responsiveFontSize = (value: number) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = value * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
