import { Theme } from "@react-navigation/native";

export const Colors = {
  text: "#8D96A3",
  background: "#151718",
  tint: "#789BE3",
  icon: "#9BA1A6",
  tabIconDefault: "#9BA1A6",
  tabIconSelected: "#789BE3",
  textPrimary: "#FFFFFF",
  graySurface: "#49505B40",
  grayTextLight: "#D9DBDF",
  greenSurfaceDark: "#0F554480",
  greenBright: "#7BD9B7",
  redLight: "#F96A6A",
  redDark: "#4C1D1D",
  toggle: {
    trackOn: "#789BE3",
    thumbOn: "#EDEEF1",
    trackOff: "#8D96A3",
    thumbOff: "#49505B",
  },
};

export const FontStyles = {
  size: {
    xsmall: 10,
    small: 12,
    medium: 14,
    large: 16,
    xlarge: 20,
    xxlarge: 24,
  },

  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
};

export type CustomFonts = typeof FontStyles & {
  satoshiRegular: string;
  satoshiMedium: string;
};

export const Fonts: CustomFonts = {
  satoshiRegular: "Satoshi-Regular",
  satoshiMedium: "Satoshi-Medium",
  ...FontStyles,
};

export interface AppTheme extends Theme {
  customFonts: CustomFonts;
}

const navigationFonts: Theme["fonts"] = {
  regular: {
    fontFamily: Fonts.satoshiRegular,
    fontWeight: "400",
  },
  medium: {
    fontFamily: Fonts.satoshiMedium,
    fontWeight: "500",
  },
  bold: {
    fontFamily: Fonts.satoshiMedium,
    fontWeight: "700",
  },
  heavy: {
    fontFamily: Fonts.satoshiMedium,
    fontWeight: "800",
  },
};

export const CustomTheme: AppTheme = {
  dark: true,
  colors: {
    primary: Colors.tint,
    background: Colors.background,
    card: Colors.background,
    text: Colors.text,
    border: "#333333",
    notification: "rgb(255, 59, 48)",
  },
  fonts: navigationFonts,
  customFonts: Fonts,
};
