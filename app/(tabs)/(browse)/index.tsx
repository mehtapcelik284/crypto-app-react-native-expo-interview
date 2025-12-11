import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const BrowseScreen = () => {
  const router = useRouter();
  const sampleId = "1";

  const handleNavigateToDetail = () => {
    router.push(`/(browse)/${sampleId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrowseScreen</Text>

      <Button title={`${sampleId}`} onPress={handleNavigateToDetail} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  idText: { fontSize: 18 },
});

export default BrowseScreen;
