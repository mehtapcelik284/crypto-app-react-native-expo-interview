import Toggle from "@/components/common/Toggle";
import { Asset } from "@/constants/assets";
import { Colors, Fonts } from "@/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  asset: Asset;
  isEnabled: boolean;
  onToggle: () => void;
};

const SelectNetworkItem = ({ asset, isEnabled, onToggle }: Props) => {
  return (
    <View style={styles.itemRow}>
      <View style={styles.assetLeftSection}>
        <Image source={asset.icon} style={styles.assetIcon} />
        <View>
          <View style={styles.assetNameRow}>
            <Text style={styles.assetName}>
              {asset.shortName ?? asset.name}
            </Text>
            <View style={styles.assetNetworkTag}>
              <Text style={styles.assetNetworkText}>{asset.name}</Text>
            </View>
          </View>
          <Text style={styles.assetSymbol}>{asset.symbol}</Text>
        </View>
      </View>
      <Toggle
        isOn={isEnabled}
        onToggle={onToggle}
        testID={`select-network-toggle-${asset.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  assetLeftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  assetIcon: {
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(20),
    marginRight: responsiveWidth(8),
  },
  assetNameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(2),
  },
  assetName: {
    fontSize: responsiveFontSize(14),
    color: Colors.textPrimary,
    fontFamily: Fonts.satoshiMedium,
    marginRight: responsiveWidth(4),
  },
  assetNetworkTag: {
    backgroundColor: Colors.graySurface,
    borderRadius: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
  },
  assetNetworkText: {
    fontSize: responsiveFontSize(12),
    color: Colors.grayTextLight,
    fontFamily: Fonts.satoshiRegular,
  },
  assetSymbol: {
    fontSize: responsiveFontSize(14),
    color: Colors.text,
    fontFamily: Fonts.satoshiRegular,
  },
});

export default SelectNetworkItem;
