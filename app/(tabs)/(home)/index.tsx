import ToggleIconSVG from "@/components/home/ToggleIcon";
import { SELECTED_NETWORKS } from "@/constants/networks";
import { Colors, Fonts } from "@/constants/theme";
import { useNavigation, useRouter } from "expo-router";
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AssetItem from "../../../components/home/AssetItem";

const HomeScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => router.push("/select-networks")}
          hitSlop={8}
        >
          <ToggleIconSVG size={20} color={Colors.tint} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <Text style={headerStyles.headerLeftTitle}>{t("home.assets")}</Text>
      ),
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black",
        elevation: 0,
        shadowOpacity: 0,
      },
    });
  }, [navigation, router, t]);

  return (
    <View style={styles.container}>
      <FlatList
        data={SELECTED_NETWORKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AssetItem network={item} />}
        style={styles.list}
      />
    </View>
  );
};

const headerStyles = StyleSheet.create({
  headerLeftTitle: {
    fontSize: Fonts.size.small,
    color: Colors.text,
    fontFamily: Fonts.satoshiMedium,
  },
});

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  list: { paddingHorizontal: 0 },
});

export default HomeScreen;
