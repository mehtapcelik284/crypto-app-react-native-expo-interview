import React from "react";
import { render } from "@testing-library/react-native";
import LoadingIndicator from "../LoadingIndicator";
import { Colors } from "@/constants/theme";

describe("LoadingIndicator", () => {
  it("renders default container and spinner", () => {
    const { getByTestId } = render(<LoadingIndicator />);

    const container = getByTestId("loading-indicator");
    const spinner = getByTestId("loading-indicator-spinner");

    expect(container).toBeTruthy();
    expect(spinner.props.color).toBe(Colors.loader);
  });

  it("uses inline styles and test ids when inline prop is set", () => {
    const { getByTestId } = render(<LoadingIndicator inline />);

    expect(getByTestId("loading-indicator-inline")).toBeTruthy();
  });
});
