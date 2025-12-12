import ArrowLeft from "@/components/common/ArrowLeft";
import { Colors, Fonts } from "@/constants/theme";
import { formatFiatValue } from "@/utils/formatters";
import { paramToNumber, paramToString } from "@/utils/params";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import React, { useCallback, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type RouteParams = {
  id?: string | string[];
  name?: string | string[];
  symbol?: string | string[];
  price?: string | string[];
  marketCap?: string | string[];
  image?: string | string[];
  priceChangePct?: string | string[];
  priceChangeValue?: string | string[];
};

const BrowseDetailScreen = () => {
  const params = useLocalSearchParams<RouteParams>();
  const navigation = useNavigation();
  const router = useRouter();
  const { t } = useTranslation();

  const tokenSymbol = paramToString(params.symbol).toUpperCase();
  const tokenName = paramToString(params.name);
  const tokenImage = paramToString(params.image);
  const tokenPrice = paramToNumber(params.price);
  const tokenChangePct = paramToNumber(params.priceChangePct);
  const tokenChangeValue = paramToNumber(params.priceChangeValue);
  const isChangePositive = tokenChangePct >= 0;
  const priceDisplay = formatFiatValue(tokenPrice, {
    compact: true,
    noSpace: true,
  });
  const changePercentDisplay = `${isChangePositive ? "+" : "-"}${Math.abs(
    tokenChangePct
  ).toFixed(2)}%`;
  const changeValueDisplay = formatFiatValue(Math.abs(tokenChangeValue), {
    compact: true,
    noSpace: true,
  });
  const networkLabel = tokenName
    ? t("browse.network_label", { name: tokenName })
    : undefined;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleBackPress = useCallback(() => {
    router.replace("/(tabs)/(browse)");
  }, [router]);

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.gradientWrapper} pointerEvents="none">
          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0.08)",
              "rgba(37, 39, 44, 0.4)",
              "rgba(5, 5, 5, 0)",
            ]}
            locations={[0, 0.65, 1]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradientOverlay}
          />
        </View>
        <View style={styles.customHeader}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={styles.backButton}
            hitSlop={responsiveWidth(12)}
          >
            <ArrowLeft
              size={responsiveFontSize(22)}
              color={Colors.textPrimary}
            />
          </TouchableOpacity>
          <View style={styles.headerTitle}>
            {!!tokenImage && (
              <Image source={{ uri: tokenImage }} style={styles.headerIcon} />
            )}
            <Text style={styles.headerTitleText}>
              {tokenSymbol || t("browse.title")}
            </Text>
          </View>
          <View style={styles.headerPlaceholder} />
        </View>
        <View style={styles.tokenHeader}>
          {networkLabel && (
            <Text style={styles.tokenNameText}>{networkLabel}</Text>
          )}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>{t("browse.price_label")}</Text>
          <Text style={styles.priceValue}>{priceDisplay}</Text>
          <View
            style={[
              styles.changePill,
              isChangePositive ? styles.changePositive : styles.changeNegative,
            ]}
          >
            <View style={styles.changeTextRow}>
              <Text
                style={[
                  styles.changeText,
                  isChangePositive
                    ? styles.changePositiveText
                    : styles.changeNegativeText,
                ]}
              >
                {changePercentDisplay}
              </Text>
              <Text
                style={[
                  styles.changeText,
                  styles.changeValueText,
                  isChangePositive
                    ? styles.changePositiveText
                    : styles.changeNegativeText,
                ]}
              >
                {changeValueDisplay}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: responsiveWidth(24),
    paddingTop: responsiveHeight(24),
    alignItems: "center",
    overflow: "hidden",
  },
  gradientWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: responsiveHeight(8),
  },
  gradientOverlay: {
    width: responsiveWidth(350),
    height: responsiveHeight(210),
    borderRadius: responsiveHeight(150),
    opacity: 0.25,
    transform: [{ translateY: responsiveHeight(-45) }, { scaleX: 1.3 }],
  },
  customHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backButton: {
    paddingVertical: responsiveHeight(4),
    paddingRight: responsiveWidth(8),
  },
  headerTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(8),
  },
  headerPlaceholder: {
    width: responsiveWidth(30),
  },
  headerIcon: {
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: responsiveWidth(14),
  },
  headerTitleText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(24),
    color: Colors.textPrimary,
  },
  tokenHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: responsiveHeight(8),
  },
  icon: {
    width: responsiveWidth(64),
    height: responsiveWidth(64),
    borderRadius: responsiveWidth(32),
  },
  headerTexts: {
    alignItems: "center",
  },
  tokenSymbolText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(24),
    color: Colors.textPrimary,
  },
  tokenNameText: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(14),
    color: Colors.text,
  },
  section: {
    alignItems: "center",
    marginTop: responsiveHeight(24),
  },
  sectionLabel: {
    fontFamily: Fonts.satoshiRegular,
    fontSize: responsiveFontSize(14),
    color: Colors.text,
    paddingBottom: responsiveHeight(4),
  },
  priceValue: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(32),
    color: Colors.textPrimary,
    paddingBottom: responsiveHeight(8),
  },
  changePill: {
    borderRadius: responsiveWidth(14),
    paddingHorizontal: responsiveWidth(6),
    paddingVertical: responsiveHeight(2),
  },
  changeTextRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  changeText: {
    fontFamily: Fonts.satoshiMedium,
    fontSize: responsiveFontSize(12),
  },
  changeValueText: {
    marginLeft: responsiveWidth(4),
  },
  changePositiveText: {
    color: Colors.greenBright,
  },
  changeNegativeText: {
    color: Colors.redLight,
  },
  changePositive: {
    backgroundColor: Colors.greenSurfaceDark,
  },
  changeNegative: {
    backgroundColor: Colors.redDark,
  },
});

export default BrowseDetailScreen;
