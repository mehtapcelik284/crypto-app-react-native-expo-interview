import { Colors, Fonts } from "@/constants/theme";
import { MarketToken } from "@/services/api/markets";
import { formatFiatValue } from "@/utils/formatters";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  token: MarketToken;
  onPress?: (token: MarketToken) => void;
};

const BrowseTokenItem = ({ token, onPress }: Props) => {
  const changePositive = (token.price_change_percentage_24h ?? 0) >= 0;
  const changeDisplay = `${changePositive ? "+" : ""}${(
    token.price_change_percentage_24h ?? 0
  ).toFixed(2)}%`;

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => onPress?.(token)}
    >
      <View style={styles.leftSection}>
        <Image source={{ uri: token.image }} style={styles.icon} />
        <View style={styles.textContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>{token.name}</Text>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{token.symbol.toUpperCase()}</Text>
            </View>
          </View>
          <Text style={styles.symbolText}>{token.symbol.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.priceText}>{formatFiatValue(token.current_price)}</Text>
        <View
          style={[
            styles.changePill,
            changePositive ? styles.changePositive : styles.changeNegative,
          ]}
        >
          <Text
            style={[
              styles.changeText,
              changePositive ? styles.changePositiveText : styles.changeNegativeText,
            ]}
          >
            {changeDisplay}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(8)
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: responsiveWidth(12),
  },
  icon: {
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(20),
    marginRight: responsiveWidth(8),
  },
  textContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(4),
  },
  nameText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(14),
    color: Colors.textPrimary,
    marginRight: responsiveWidth(4),
  },
  tag: {
    backgroundColor: Colors.graySurface,
    borderRadius: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(2),
  },
  tagText: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(12),
    color: Colors.grayTextLight,
  },
  symbolText: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(14),
    color: Colors.text,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  priceText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(14),
    color: Colors.textPrimary,
  },
  changePill: {
    marginTop: responsiveHeight(4),
    borderRadius: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(2),
  },
  changePositive: {
    backgroundColor: Colors.greenSurfaceDark,
  },
  changeNegative: {
    backgroundColor: Colors.redDark
  },
  changeText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(12),
  },
  changePositiveText: {
    color: Colors.greenBright
  },
  changeNegativeText: {
    color: Colors.redLight
  },
});

export default BrowseTokenItem;
