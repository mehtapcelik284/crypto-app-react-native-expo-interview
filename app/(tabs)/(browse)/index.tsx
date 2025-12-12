import { useRouter } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";

const BrowseScreen = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const sampleId = "1";

  const handleNavigateToDetail = () => {
    router.push(`/(browse)/${sampleId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("browse.title")}</Text>
      <Button title={`${sampleId}`} onPress={handleNavigateToDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, marginBottom: 20 },
});

export default BrowseScreen;
