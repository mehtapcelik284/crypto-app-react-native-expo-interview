import AssetItem from "@/components/home/AssetItem";
import ToggleIconSVG from "@/components/home/ToggleIcon";
import { SELECTED_ASSETS } from "@/constants/assets";
import { Colors, Fonts } from "@/constants/theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleTogglePress = () => {
    router.push("/select-networks");
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "bottom"]}>
      <FlatList
        style={styles.list}
        data={SELECTED_ASSETS}
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
            >
              <ToggleIconSVG size={responsiveWidth(18)} color={Colors.tint} />
            </TouchableOpacity>
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
  },
  list: {
    flex: 1,
    paddingHorizontal: responsiveWidth(16),
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
    paddingTop: responsiveHeight(24),
    paddingBottom: responsiveHeight(24),
  },
  separator: {
    height: responsiveHeight(16),
  },
});

export default HomeScreen;
