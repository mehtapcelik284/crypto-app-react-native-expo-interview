import Constants from "expo-constants";

const extra = Constants.expoConfig?.extra;

if (!extra) throw new Error("Expo extra config not found");

export const API_BASE_URL = extra.API_BASE_URL;
export const APP_ENV = extra.APP_ENV;
