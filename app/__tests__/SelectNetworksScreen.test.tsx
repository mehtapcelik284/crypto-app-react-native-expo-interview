import networksReducer from "@/stores/networks/networksSlice";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import SelectNetworksScreen from "../select-networks";

const mockSetOptions = jest.fn();

jest.mock("@/constants/assets", () => ({
  SELECTED_ASSETS: [
    {
      id: "asset-1",
      symbol: "AAA",
      name: "Asset One",
      shortName: "Asset One",
      icon: {},
      priceTRY: 100,
      changePercentage: 1,
      balance: 1,
      balanceSymbol: "AAA",
      balanceFiat: 100,
    },
    {
      id: "asset-2",
      symbol: "BBB",
      name: "Asset Two",
      shortName: "Asset Two",
      icon: {},
      priceTRY: 200,
      changePercentage: -1,
      balance: 2,
      balanceSymbol: "BBB",
      balanceFiat: 200,
    },
  ],
}));

jest.mock("expo-router", () => ({
  useNavigation: () => ({
    setOptions: mockSetOptions,
  }),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const createStore = () =>
  configureStore({
    reducer: { networks: networksReducer },
  });

describe("SelectNetworksScreen", () => {
  beforeEach(() => {
    mockSetOptions.mockClear();
  });

  it("updates redux state when a network is toggled", () => {
    const store = createStore();

    const { getByTestId } = render(
      <Provider store={store}>
        <SelectNetworksScreen />
      </Provider>
    );

    fireEvent.press(getByTestId("select-network-toggle-asset-1"));

    expect(
      store.getState().networks.selectedNetworks["asset-1"]
    ).toBe(false);
  });

  it("sets navigation options on mount", () => {
    const store = createStore();

    render(
      <Provider store={store}>
        <SelectNetworksScreen />
      </Provider>
    );

    expect(mockSetOptions).toHaveBeenCalled();
  });
});
