import networksReducer from "@/stores/networks/networksSlice";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import { Provider } from "react-redux";
import HomeScreen from "../index";

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

const mockPush = jest.fn();

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

const renderHome = (selectedNetworks: Record<string, boolean>) => {
  const store = configureStore({
    reducer: { networks: networksReducer },
    preloadedState: {
      networks: {
        selectedNetworks,
      },
    },
  });

  return render(
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

describe("HomeScreen", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders only the enabled assets", () => {
    const { getByText, queryByText } = renderHome({
      "asset-1": true,
      "asset-2": false,
    });

    expect(getByText("Asset One")).toBeTruthy();
    expect(queryByText("Asset Two")).toBeNull();
  });

  it("navigates to select networks when toggle pressed", () => {
    const { getByTestId } = renderHome({
      "asset-1": true,
      "asset-2": true,
    });

    fireEvent.press(getByTestId("home-toggle-button"));

    expect(mockPush).toHaveBeenCalledWith("/select-networks");
  });
});
