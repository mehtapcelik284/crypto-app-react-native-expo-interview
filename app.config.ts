import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appEnv = process.env.APP_ENV || "development";
  const apiBaseUrl = "https://api.coingecko.com/api/v3";

  return {
    ...config,

    name: `KriptoK (${appEnv})`,
    slug: "kriptoK",

    extra: {
      APP_ENV: appEnv,
      API_BASE_URL: apiBaseUrl,
    },
  };
};
