import { CustomTheme } from "@/constants/theme";
import i18n from "@/i18n";
import { ThemeProvider } from "@react-navigation/native";
import * as Font from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

const FONT_ASSETS = {
  "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
  "Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = Font.useFonts(FONT_ASSETS);

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);
  
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; 
  }


  return (
    <SafeAreaProvider>
      <ThemeProvider value={CustomTheme}>
        <I18nextProvider i18n={i18n}>
          <Stack
            screenOptions={{
              contentStyle: {
                padding: 0,
                backgroundColor: CustomTheme.colors.background,
              },
            }}
          >
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, contentStyle: { padding: 0 } }}
            />
            <Stack.Screen
              name="select-networks"
              options={{ headerShown: true, title: "Select Network" }}
            />
          </Stack>
        </I18nextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
