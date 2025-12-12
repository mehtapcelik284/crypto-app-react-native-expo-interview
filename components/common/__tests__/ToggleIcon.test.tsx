import React from "react";
import { render } from "@testing-library/react-native";
import ToggleIconSVG from "../ToggleIcon";

describe("ToggleIconSVG", () => {
  it("respects provided size and color", () => {
    const instance = render(
      <ToggleIconSVG size={30} color="red" testID="toggle-icon" />
    );

    const svg = instance.getByTestId("toggle-icon");
    expect(svg.props.width).toBe(30);
    expect(svg.props.height).toBe(30);

    expect(svg.props.children).toBeTruthy();
  });
});
