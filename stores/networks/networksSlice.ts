import { SELECTED_ASSETS } from "@/constants/assets";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SelectedNetworksMap = Record<string, boolean>;

export interface NetworksState {
  selectedNetworks: SelectedNetworksMap;
}

const initialState: NetworksState = {
  selectedNetworks: SELECTED_ASSETS.reduce<SelectedNetworksMap>((acc, asset) => {
    acc[asset.id] = true;
    return acc;
  }, {}),
};

const networksSlice = createSlice({
  name: "selectedNetworks",
  initialState,
  reducers: {
    toggleNetwork: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.selectedNetworks[id] = !state.selectedNetworks[id];
    },
    addNetwork: (state, action: PayloadAction<string>) => {
      state.selectedNetworks[action.payload] = true;
    },
    removeNetwork: (state, action: PayloadAction<string>) => {
      state.selectedNetworks[action.payload] = false;
    },
  },
});

export const { toggleNetwork, addNetwork, removeNetwork } = networksSlice.actions;
export const selectedNetworks = (state: { networks: NetworksState }) =>
  state.networks.selectedNetworks;

export default networksSlice.reducer;
