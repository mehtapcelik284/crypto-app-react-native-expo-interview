import { Colors } from "@/constants/theme";
import {
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import React from "react";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";

type ToggleProps = {
  isOn: boolean;
  onToggle?: () => void;
  style?: ViewStyle;
  testID?: string;
};

const Toggle = ({ isOn, onToggle, style, testID }: ToggleProps) => {
  const translateX = responsiveWidth(20);

  return (
    <Pressable
      onPress={onToggle}
      style={[
        styles.track,
        {
          backgroundColor: isOn
            ? Colors.toggle.trackOn
            : Colors.toggle.trackOff,
        },
        style,
      ]}
      testID={testID}
      hitSlop={12}
    >
      <View
        style={[
          styles.thumb,
          {
            backgroundColor: isOn
              ? Colors.toggle.thumbOn
              : Colors.toggle.thumbOff,
            transform: [
              { translateX: isOn ? translateX : 0 },
            ],
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  track: {
    width: responsiveWidth(48),
    height: responsiveHeight(28),
    borderRadius: responsiveHeight(14),
    paddingHorizontal: responsiveWidth(4),
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    overflow: "hidden",
  },
  thumb: {
    width: responsiveWidth(20),
    height: responsiveHeight(20),
    borderRadius: responsiveWidth(10),
  },
});

export default Toggle;
