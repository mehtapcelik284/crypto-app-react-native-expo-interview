import type { MarketToken } from "@/services/api/markets";
import * as formatters from "@/utils/formatters";
import { beforeEach, describe, expect, it } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import BrowseTokenItem from "../BrowseTokenItem";

jest.mock("@/utils/formatters", () => ({
  formatFiatValue: jest.fn((value: number) => `₺ ${value.toFixed(2)}`),
  formatPercentage: jest.fn((value: number) => `+${value.toFixed(2)}%`),
}));

const token: MarketToken = {
  id: "bitcoin",
  name: "Bitcoin",
  symbol: "btc",
  image: "https://example.com/btc.png",
  current_price: 100000,
  price_change_percentage_24h: 5.25,
  price_change_24h: 1200,
  market_cap: 10,
};

const formatFiatValueMock = formatters.formatFiatValue as jest.Mock;
const formatPercentageMock = formatters.formatPercentage as jest.Mock;

describe("BrowseTokenItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders token information with formatted values", () => {
    const { getByText } = render(
      <BrowseTokenItem token={token} onPress={jest.fn()} isFirst />
    );

    expect(getByText("Bitcoin")).toBeTruthy();
    expect(formatFiatValueMock).toHaveBeenCalledWith(token.current_price);
    expect(formatPercentageMock).toHaveBeenCalledWith(
      token.price_change_percentage_24h
    );
    expect(getByText("₺ 100000.00")).toBeTruthy();
    expect(getByText("+5.25%")).toBeTruthy();
  });

  it("invokes onPress with the token when pressed", () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <BrowseTokenItem token={token} onPress={handlePress} />
    );

    fireEvent.press(getByTestId("browse-token-bitcoin"));

    expect(handlePress).toHaveBeenCalledWith(token);
  });
});
