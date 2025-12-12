import { IconSymbol } from "@/components/ui/icon-symbol";
import { CustomTheme } from "@/constants/theme";
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
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="browse"
          options={{
            headerShown: false,
            title: t("tabs.browse"),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="globe" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          redirect
        />
      </Tabs>
    </ThemeProvider>
  );
}
