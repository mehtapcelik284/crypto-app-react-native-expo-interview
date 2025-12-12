import { Network } from "@/constants/networks";
import {
  randomBalance,
  randomPercentage,
  randomPriceTRY,
} from "@/utils/randomValues";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const AssetItem = ({ network }: { network: Network }) => {
  const price = randomPriceTRY();
  const change = randomPercentage();
  const balance = randomBalance();
  const balanceTRY = randomPriceTRY();
  const iconSource = network.icon;

  return (
    <View style={networkStyles.item}>
      <View style={networkStyles.iconWrapper}>
        {iconSource ? (
          <Image source={iconSource} style={networkStyles.icon} />
        ) : (
          <View style={networkStyles.iconPlaceholder} />
        )}
      </View>

      <View style={networkStyles.textContainer}>
        <Text style={networkStyles.name}>{network.name}</Text>

        <View style={networkStyles.subRow}>
          <Text style={networkStyles.priceText}>₺ {price}</Text>

          <View style={networkStyles.changePill}>
            <Text style={networkStyles.changeText}>+{change}</Text>
          </View>
        </View>
      </View>

      <View style={networkStyles.balanceContainer}>
        <Text style={networkStyles.balanceMain}>
          {balance} {network.name}
        </Text>
        <Text style={networkStyles.balanceSub}>₺ {balanceTRY}</Text>
      </View>
    </View>
  );
};

const networkStyles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: responsiveHeight(15),
    paddingHorizontal: responsiveWidth(15),
  },
  iconWrapper: {
    marginRight: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(9),
    alignItems: "center",
    justifyContent: "center",
  },
  iconPlaceholder: {
    width: responsiveWidth(36),
    height: responsiveHeight(36),
    borderRadius: responsiveWidth(18),
    backgroundColor: "#4A4A4A",
  },
  icon: {
    width: responsiveWidth(36),
    height: responsiveHeight(36),
    borderRadius: responsiveWidth(18),
  },
  textContainer: {
    flex: 1,
    marginRight: responsiveWidth(10),
  },
  name: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
    color: "white",
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: responsiveHeight(2),
  },
  priceText: {
    fontSize: responsiveFontSize(12),
    color: "gray",
    marginRight: responsiveWidth(8),
  },
  changePill: {
    backgroundColor: "#1E4620",
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveHeight(2),
    borderRadius: responsiveWidth(4),
  },
  changeText: {
    fontSize: responsiveFontSize(10),
    color: "#4CAF50",
    fontWeight: "bold",
  },
  balanceContainer: {
    alignItems: "flex-end",
  },
  balanceMain: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
    color: "white",
  },
  balanceSub: {
    fontSize: responsiveFontSize(12),
    color: "gray",
    marginTop: responsiveHeight(2),
  },
});

export default AssetItem;
