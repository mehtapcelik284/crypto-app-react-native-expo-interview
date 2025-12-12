import { jest } from "@jest/globals";
import React from "react";
import { render } from "@testing-library/react-native";
import AssetItem from "../AssetItem";
import { Asset } from "@/constants/assets";

const mockFormatFiatValue = jest.fn((value: number) => `TRY-${value}`);
const mockFormatPercentage = jest.fn((value: number) => `${value}%`);
const mockFormatTokenBalance = jest.fn((value: number) => `${value.toFixed(2)}`);

jest.mock("@/utils/formatters", () => ({
  formatFiatValue: (value: number) => mockFormatFiatValue(value),
  formatPercentage: (value: number) => mockFormatPercentage(value),
  formatTokenBalance: (value: number) => mockFormatTokenBalance(value),
}));

describe("AssetItem", () => {
  const asset: Asset = {
    id: "asset-eth",
    symbol: "ETH",
    name: "Ethereum" as any,
    shortName: "Ether" as any,
    icon: {} as any,
    priceTRY: 1000,
    changePercentage: 2.5,
    balance: 1.23,
    balanceSymbol: "ETH",
    balanceFiat: 2000,
  };

  it("renders asset info with formatted values", () => {
    const { getByText } = render(<AssetItem asset={asset} />);

    expect(getByText("ETH")).toBeTruthy();
    expect(getByText("Ethereum")).toBeTruthy();
    expect(mockFormatFiatValue).toHaveBeenCalledWith(asset.priceTRY);
    expect(mockFormatPercentage).toHaveBeenCalledWith(asset.changePercentage);
    expect(mockFormatTokenBalance).toHaveBeenCalledWith(asset.balance);
    expect(mockFormatFiatValue).toHaveBeenCalledWith(asset.balanceFiat);
    expect(getByText("TRY-1000")).toBeTruthy();
  });
});
