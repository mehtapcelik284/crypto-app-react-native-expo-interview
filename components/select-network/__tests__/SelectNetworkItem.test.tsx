import { Asset } from "@/constants/assets";
import { describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import SelectNetworkItem from "../SelectNetworkItem";

const mockAsset: Asset = {
  id: "asset-1",
  symbol: "AAA",
  name: "Asset One" as any,
  shortName: "Asset One" as any,
  icon: {} as any,
  priceTRY: 100,
  changePercentage: 1,
  balance: 1,
  balanceSymbol: "AAA",
  balanceFiat: 100,
};

describe("SelectNetworkItem", () => {
  it("renders asset details and calls onToggle", () => {
    const handleToggle = jest.fn();
    const { getAllByText, getByText, getByTestId } = render(
      <SelectNetworkItem asset={mockAsset} isEnabled onToggle={handleToggle} />
    );

    expect(getAllByText("Asset One")[0]).toBeTruthy();
    expect(getByText("AAA")).toBeTruthy();

    fireEvent.press(getByTestId("select-network-toggle-asset-1"));

    expect(handleToggle).toHaveBeenCalled();
  });
});
