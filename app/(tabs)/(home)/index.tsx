import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const router = useRouter();

  const handleNavigateToNetworks = () => {
    router.push("/select-networks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Button
        title="Select Network"
        onPress={handleNavigateToNetworks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
