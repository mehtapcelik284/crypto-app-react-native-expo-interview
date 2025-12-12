import { MarketToken } from "@/services/api/markets";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";
import BrowseScreen from "../index";

const mockUseMarketTokens = jest.fn() as jest.Mock;
jest.mock("@/hooks/useMarketTokens", () => ({
  useMarketTokens: () => mockUseMarketTokens(),
}));

const mockPush = jest.fn() as jest.Mock;
jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("BrowseScreen", () => {
  const token: MarketToken = {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "btc",
    image: "https://example.com/btc.png",
    current_price: 1000,
    price_change_percentage_24h: 2.5,
    price_change_24h: 25,
    market_cap: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseMarketTokens.mockReturnValue({
      data: { pages: [[token]] },
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
      refetch: jest.fn(),
      isRefetching: false,
      isLoading: false,
      error: null,
    });
  });

  it("renders fetched tokens", async () => {
    const { getByText } = render(<BrowseScreen />);

    await waitFor(() => {
      expect(getByText("Bitcoin")).toBeTruthy();
    });
  });

  it("navigates to detail screen when a token is pressed", async () => {
    const { getByTestId } = render(<BrowseScreen />);

    await waitFor(() => {
      expect(getByTestId("browse-token-bitcoin")).toBeTruthy();
    });

    fireEvent.press(getByTestId("browse-token-bitcoin"));

    expect(mockPush).toHaveBeenCalledWith({
      pathname: "/(tabs)/(browse)/[id]",
      params: expect.objectContaining({
        id: token.id,
        name: token.name,
        symbol: token.symbol.toUpperCase(),
      }),
    });
  });
});
