import ToggleIconSVG from "@/components/common/ToggleIcon";
import AssetItem from "@/components/home/AssetItem";
import { SELECTED_ASSETS } from "@/constants/assets";
import { Colors, Fonts } from "@/constants/theme";
import { selectedNetworks } from "@/stores/networks/networksSlice";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const networksSelection = useSelector(selectedNetworks);

  const filteredAssets = useMemo(
    () => SELECTED_ASSETS.filter((asset) => networksSelection[asset.id]),
    [networksSelection]
  );

  const handleTogglePress = () => {
    router.push("/select-networks");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <FlatList
        style={styles.list}
        data={filteredAssets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AssetItem asset={item} />}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              {t("home.assets").toUpperCase()}
            </Text>
            <TouchableOpacity
              onPress={handleTogglePress}
              hitSlop={responsiveWidth(10)}
              style={styles.toggleButton}
              testID="home-toggle-button"
            >
              <ToggleIconSVG size={responsiveWidth(18)} color={Colors.tint} />
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>{t("home.empty")}</Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: responsiveWidth(16),
  },
  list: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(20),
  },
  headerTitle: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(12),
    letterSpacing: 1.5,
    color: Colors.text,
  },
  listContent: {
    paddingTop: responsiveHeight(12),
    paddingBottom: responsiveHeight(24),
  },
  separator: {
    height: responsiveHeight(8),
  },
  toggleButton: {
    paddingRight: responsiveWidth(8),
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: responsiveHeight(40),
  },
  emptyStateText: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(14),
    color: Colors.text,
  },
});

export default HomeScreen;
