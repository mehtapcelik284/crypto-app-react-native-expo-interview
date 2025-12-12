import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { StyleSheet } from "react-native";
import Toggle from "../Toggle";
import { Colors } from "@/constants/theme";

describe("Toggle", () => {
  it("invokes onToggle when pressed", () => {
    const handleToggle = jest.fn();
    const { getByTestId } = render(
      <Toggle isOn onToggle={handleToggle} testID="toggle-component" />
    );

    fireEvent.press(getByTestId("toggle-component"));

    expect(handleToggle).toHaveBeenCalled();
  });

  it("applies the correct track and thumb colors", () => {
    const { getByTestId } = render(
      <Toggle isOn={false} testID="toggle-component" />
    );

    const trackStyle = StyleSheet.flatten(
      getByTestId("toggle-component").props.style
    );

    expect(trackStyle.backgroundColor).toBe(Colors.toggle.trackOff);
  });
});
