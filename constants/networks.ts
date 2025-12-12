export enum NetworkNames {
  ETHEREUM = "Ethereum",
  SOLANA = "Solana",
  POLYGON = "Polygon",
}

export type Network = {
  id: string;
  name: NetworkNames;
};

export const SELECTED_NETWORKS: Network[] = [
  { id: "eth", name: NetworkNames.ETHEREUM },
  { id: "sol", name: NetworkNames.SOLANA },
  { id: "poly", name: NetworkNames.POLYGON },
];
