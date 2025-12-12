import * as dotenv from "dotenv";
import { ConfigContext, ExpoConfig } from "expo/config";
import * as fs from "fs";

export default ({ config }: ConfigContext): ExpoConfig => {
  const appEnv = process.env.APP_ENV || "development";

  const envFilePath = `.env.${appEnv}`;

  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath });
  } else {
    console.warn(`ENV file not found: ${envFilePath}`);
  }

  return {
    ...config,

    name: `KriptoK (${appEnv})`,
    slug: "kriptoK",

    extra: {
      APP_ENV: appEnv,
      API_BASE_URL: process.env.API_BASE_URL,
    },
  };
};
