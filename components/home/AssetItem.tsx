import { Asset } from "@/constants/assets";
import { Colors, Fonts } from "@/constants/theme";
import {
  formatFiatValue,
  formatPercentage,
  formatTokenBalance,
} from "@/utils/formatters";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const AssetItem = ({ asset }: { asset: Asset }) => {
  const {
    icon,
    symbol,
    name,
    priceTRY,
    changePercentage,
    balance,
    balanceSymbol,
    balanceFiat,
  } = asset;

  return (
    <View style={styles.item}>
      <View style={styles.leftSection}>
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.symbol}>{symbol}</Text>
            <View style={styles.assetTag}>
              <Text style={styles.assetTagText}>{name}</Text>
            </View>
          </View>
          <View style={styles.metaRow}>
            <Text style={styles.priceText}>{formatFiatValue(priceTRY)}</Text>
            <View style={styles.changePill}>
              <Text style={styles.changeText}>
                {formatPercentage(changePercentage)}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceMain}>
          {formatTokenBalance(balance)} {balanceSymbol}
        </Text>
        <Text style={styles.balanceSub}>{formatFiatValue(balanceFiat)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(8)
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: responsiveWidth(12),
  },
  iconWrapper: {
    marginRight: responsiveWidth(12),
    paddingVertical: responsiveHeight(9),
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(20),
  },
  textContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(6),
  },
  symbol: {
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.satoshiMedium,
    color: Colors.textPrimary,
    marginRight: responsiveWidth(4),
  },
  assetTag: {
    backgroundColor: Colors.graySurface,
    borderRadius: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  assetTagText: {
    fontSize: responsiveFontSize(12),
    color: Colors.grayTextLight,
    fontFamily: Fonts.satoshiRegular,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceText: {
    fontSize: responsiveFontSize(12),
    color: Colors.text,
    fontFamily: Fonts.satoshiMedium,
    marginRight: responsiveWidth(6),
  },
  changePill: {
    backgroundColor: Colors.greenSurfaceDark,
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(12),
  },
  changeText: {
    fontSize: responsiveFontSize(12),
    color: Colors.greenBright,
    fontFamily: Fonts.satoshiMedium,
  },
  balanceContainer: {
    alignItems: "flex-end",
  },
  balanceMain: {
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.satoshiMedium,
    color: Colors.textPrimary,
  },
  balanceSub: {
    fontSize: responsiveFontSize(12),
    color: Colors.text,
    marginTop: responsiveHeight(4),
    fontFamily: Fonts.satoshiRegular,
  },
});

export default AssetItem;
