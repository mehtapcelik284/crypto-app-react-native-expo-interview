import { Colors } from "@/constants/theme";
import { responsiveHeight } from "@/utils/responsive";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  inline?: boolean;
};

const LoadingIndicator = ({ inline }: Props) => {
  return (
    <View style={inline ? styles.inlineContainer : styles.container}>
      <ActivityIndicator color={Colors.tint} />
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
