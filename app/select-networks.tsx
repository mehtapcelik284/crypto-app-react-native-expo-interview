import SelectNetworkItem from "@/components/select-network/SelectNetworkItem";
import { Asset, SELECTED_ASSETS } from "@/constants/assets";
import { Colors, Fonts } from "@/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, View } from "react-native";

const SelectNetworksScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [selectedState, setSelectedState] = useState<Record<string, boolean>>(
    () =>
      SELECTED_ASSETS.reduce<Record<string, boolean>>((acc, asset) => {
        acc[asset.id] = true;
        return acc;
      }, {})
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: t("select_networks.title"),
      headerTintColor: Colors.textPrimary,
      headerBackTitleVisible: false,
      headerBackVisible: false,
      headerTitleStyle: {
        color: Colors.textPrimary,
        fontFamily: Fonts.satoshiMedium,
        fontWeight: Fonts.weight.medium,
        fontSize: responsiveFontSize(20),
      },
      headerStyle: {
        backgroundColor: Colors.background,
        height: responsiveHeight(48),
        paddingVertical: responsiveHeight(4),
      },
      headerShadowVisible: false,
    });
  }, [navigation, t]);

  const handleToggle = (asset: Asset) => {
    setSelectedState((current) => ({
      ...current,
      [asset.id]: !current[asset.id],
    }));
  };

  const data = useMemo(() => SELECTED_ASSETS, []);

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SelectNetworkItem
              asset={item}
              isEnabled={!!selectedState[item.id]}
              onToggle={() => handleToggle(item)}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingVertical: responsiveWidth(12),
    paddingHorizontal: responsiveWidth(16),
  },
  list: {
    flex: 1,
    paddingHorizontal: responsiveWidth(8),
  },
  listContent: {
    paddingTop: responsiveHeight(8),
    paddingBottom: responsiveHeight(24),
  },
  assetName: {
    fontSize: responsiveFontSize(14),
    color: Colors.textPrimary,
    fontFamily: Fonts.satoshiMedium,
    marginRight: responsiveWidth(6),
  },
  separator: {
    height: responsiveHeight(24),
  },
});

export default SelectNetworksScreen;
