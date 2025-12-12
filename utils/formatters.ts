export const formatFiatValue = (value: number) => {
  return `₺ ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const formatPercentage = (value: number) => `+${value.toFixed(2)}%`;

export const formatTokenBalance = (value: number) => value.toFixed(2);

export const formatUsdValue = (value: number) => {
  return `$ ${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
