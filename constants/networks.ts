import { ImageSource } from "expo-image";

export enum NetworkNames {
  ETHEREUM = "Ethereum",
  SOLANA = "Solana",
  POLYGON = "Polygon",
}

export type NetworkId = "eth" | "sol" | "poly";

export const NetworkIcons: Record<NetworkId, ImageSource> = {
  eth: require("@/assets/images/tokens/eth.png"),
  sol: require("@/assets/images/tokens/sol.png"),
  poly: require("@/assets/images/tokens/poly.png"),
};

export type Network = {
  id: NetworkId;
  name: NetworkNames;
  icon: ImageSource;
};

export const SELECTED_NETWORKS: Network[] = [
  { id: "eth", name: NetworkNames.ETHEREUM, icon: NetworkIcons.eth },
  { id: "sol", name: NetworkNames.SOLANA, icon: NetworkIcons.sol },
  { id: "poly", name: NetworkNames.POLYGON, icon: NetworkIcons.poly },
];
