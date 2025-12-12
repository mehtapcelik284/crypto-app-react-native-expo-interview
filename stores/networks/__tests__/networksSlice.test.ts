import { describe, expect, it, jest } from "@jest/globals";
import reducer, {
  NetworksState,
  addNetwork,
  removeNetwork,
  selectedNetworks,
  toggleNetwork,
} from "../networksSlice";

jest.mock("@/constants/assets", () => ({
  SELECTED_ASSETS: [{ id: "asset-1" }, { id: "asset-2" }],
}));

describe("networksSlice", () => {
  const initialState: NetworksState = {
    selectedNetworks: {
      "asset-1": true,
      "asset-2": true,
    },
  };

  it("returns the initial state with all assets enabled", () => {
    const state = reducer(undefined, { type: "init" });
    expect(state.selectedNetworks).toEqual(initialState.selectedNetworks);
  });

  it("toggles a network", () => {
    const state = reducer(initialState, toggleNetwork("asset-1"));
    expect(state.selectedNetworks["asset-1"]).toBe(false);
  });

  it("adds a network", () => {
    const state = reducer(
      { selectedNetworks: { "asset-1": false } },
      addNetwork("asset-2")
    );
    expect(state.selectedNetworks["asset-2"]).toBe(true);
  });

  it("removes a network", () => {
    const state = reducer(
      { selectedNetworks: { "asset-1": true } },
      removeNetwork("asset-1")
    );
    expect(state.selectedNetworks["asset-1"]).toBe(false);
  });

  it("selector returns selected networks map", () => {
    const map = selectedNetworks({ networks: initialState });
    expect(map).toEqual(initialState.selectedNetworks);
  });
});
