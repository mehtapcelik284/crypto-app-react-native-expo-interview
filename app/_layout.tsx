import { CustomTheme } from "@/constants/theme";
import i18n from "@/i18n";
import { store } from "@/stores";
import { ThemeProvider } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as Font from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";

const FONT_ASSETS = {
  "Satoshi-Regular": require("../assets/fonts/Satoshi-Regular.otf"),
  "Satoshi-Medium": require("../assets/fonts/Satoshi-Medium.otf"),
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = Font.useFonts(FONT_ASSETS);
  const queryClient = useMemo(() => new QueryClient(), []);

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
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
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
                  options={{ headerShown: true }}
                />
              </Stack>
            </I18nextProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}
