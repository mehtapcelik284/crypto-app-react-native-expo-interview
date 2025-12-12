import axios from "axios";
import { apiClient } from "./client";

export type MarketToken = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
};

const PER_PAGE = 20;

export const fetchMarketTokens = async (page = 1) => {
  try {
    const response = await apiClient.get<MarketToken[]>("/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: PER_PAGE,
        page,
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiMessage =
        (error.response?.data as { status?: { error_message?: string } })?.status
          ?.error_message;
      if (apiMessage) {
        throw new Error(apiMessage);
      }
    }
    throw error;
  }
};

export { PER_PAGE };
