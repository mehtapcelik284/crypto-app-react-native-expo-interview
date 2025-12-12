import { CustomTheme } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import "react-native-reanimated";

export default function TabsLayout() {
  const { t } = useTranslation();

  return (
    <ThemeProvider value={CustomTheme}>
      <StatusBar style="light" />
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: t("tabs.home"),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            headerShown: false,
            title: t("tabs.browse"),
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "globe" : "globe-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen name="index" redirect />
      </Tabs>
    </ThemeProvider>
  );
}
