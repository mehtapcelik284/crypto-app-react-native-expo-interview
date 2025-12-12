import { Colors } from "@/constants/theme";
import { responsiveHeight } from "@/utils/responsive";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  inline?: boolean;
  testID?: string;
};

const LoadingIndicator = ({ inline, testID }: Props) => {
  const containerTestID =
    testID ?? (inline ? "loading-indicator-inline" : "loading-indicator");

  return (
    <View
      style={inline ? styles.inlineContainer : styles.container}
      testID={containerTestID}
    >
      <ActivityIndicator
        color={Colors.loader}
        testID={`${containerTestID}-spinner`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: responsiveHeight(24),
  },
  inlineContainer: {
    paddingVertical: responsiveHeight(16),
    width: "100%",
    alignItems: "center",
  },
});

export default LoadingIndicator;
