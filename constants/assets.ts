import { ImageSource } from "expo-image";

export enum AssetName {
  ETHEREUM = "Ethereum",
  SOLANA = "Solana",
  POLYGON = "Polygon",
}

export enum AssetShortName {
  ETHER = "Ether",
  SOLANA = "Solana",
  POLYGON = "Polygon",
}

export type AssetId = "eth" | "sol" | "poly";

export const AssetIcons: Record<AssetId, ImageSource> = {
  eth: require("@/assets/images/tokens/eth.png"),
  sol: require("@/assets/images/tokens/sol.png"),
  poly: require("@/assets/images/tokens/poly.png"),
};

export type Asset = {
  id: string;
  symbol: string;
  name: AssetName;
  shortName: AssetShortName;
  icon: ImageSource;
  priceTRY: number;
  changePercentage: number;
  balance: number;
  balanceSymbol: string;
  balanceFiat: number;
};

export const SELECTED_ASSETS: Asset[] = [
  {
    id: "asset-eth",
    symbol: "ETH",
    icon: AssetIcons.eth,
    priceTRY: 163281.09,
    changePercentage: 4.82,
    balance: 1.23,
    balanceSymbol: "ETH",
    balanceFiat: 172096.21,
    name: AssetName.ETHEREUM,
    shortName: AssetShortName.ETHER,
  },
  {
    id: "asset-sol",
    symbol: "SOL",
    icon: AssetIcons.sol,
    priceTRY: 163281.09,
    changePercentage: 4.82,
    balance: 2.35,
    balanceSymbol: "SOL",
    balanceFiat: 172096.21,
    name: AssetName.SOLANA,
    shortName: AssetShortName.SOLANA,
  },
  {
    id: "asset-poly",
    symbol: "POLYGON",
    icon: AssetIcons.poly,
    priceTRY: 163281.09,
    changePercentage: 4.82,
    balance: 2.11,
    balanceSymbol: "POLYGON",
    balanceFiat: 4834.02,
    name: AssetName.POLYGON,
    shortName: AssetShortName.POLYGON,
  },
];
