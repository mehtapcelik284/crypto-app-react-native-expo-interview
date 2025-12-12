import { Network } from "@/constants/networks";
import { randomBalance, randomPercentage, randomPriceTRY } from "@/utils/randomValues";
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
      {iconSource ? (
        <Image source={iconSource} style={networkStyles.icon} />
      ) : (
        <View style={networkStyles.iconPlaceholder} />
      )}

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
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  iconPlaceholder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#4A4A4A",
    marginRight: 15,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  priceText: {
    fontSize: 12,
    color: "gray",
    marginRight: 8,
  },
  changePill: {
    backgroundColor: "#1E4620",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  changeText: {
    fontSize: 10,
    color: "#4CAF50",
    fontWeight: "bold",
  },
  balanceContainer: {
    alignItems: "flex-end",
  },
  balanceMain: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  balanceSub: {
    fontSize: 12,
    color: "gray",
    marginTop: 2,
  },
});

export default AssetItem;
