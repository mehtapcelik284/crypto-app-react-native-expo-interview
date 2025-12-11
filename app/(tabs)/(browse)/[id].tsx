import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

const BrowseDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const dynamicTitle = t("browse.detail.title", { id: id });

    navigation.setOptions({ title: dynamicTitle });
  }, [navigation, id, t]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrowseDetailScreen</Text>
      <Text style={styles.idText}>Selected Id: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  idText: { fontSize: 18 },
});

export default BrowseDetailScreen;
