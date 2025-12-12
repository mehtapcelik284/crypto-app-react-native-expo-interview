import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import BrowseDetailScreen from "../[id]";

const mockUseLocalSearchParams = jest.fn();
const mockReplace = jest.fn();
const mockSetOptions = jest.fn();

jest.mock("expo-router", () => ({
  useLocalSearchParams: () => mockUseLocalSearchParams(),
  useRouter: () => ({
    replace: mockReplace,
  }),
  useNavigation: () => ({
    setOptions: mockSetOptions,
  }),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string, opts?: Record<string, any>) =>
      opts?.name ? `${key}:${opts.name}` : key,
  }),
}));

describe("BrowseDetailScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseLocalSearchParams.mockReturnValue({
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      price: "1000",
      marketCap: "1",
      image: "https://example.com/btc.png",
      priceChangePct: "5.5",
      priceChangeValue: "100",
    });
  });

  it("displays the token details with localized values", () => {
    const { getByText } = render(<BrowseDetailScreen />);

    expect(getByText("browse.price_label")).toBeTruthy();
    expect(getByText("₺1.00K")).toBeTruthy();
    expect(getByText("+5.50%")).toBeTruthy();
    expect(getByText("₺100.00")).toBeTruthy();
  });

  it("navigates back to browse list when back button is pressed", () => {
    const { getByTestId } = render(<BrowseDetailScreen />);

    fireEvent.press(getByTestId("browse-detail-back-button"));

    expect(mockReplace).toHaveBeenCalledWith("/(tabs)/browse");
  });
});
