import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import "react-native-reanimated";

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen
          name="(home)/index"
          options={{
            headerShown: false,
            title: t("tabs.home"),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(browse)/index"
          options={{
            headerShown: false,
            title: t("tabs.browse"),
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(browse)/[id]"
          options={{
            headerShown: true,
            title: t("browse.detail"),
            href: null,
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
};
export default TabsLayout;
