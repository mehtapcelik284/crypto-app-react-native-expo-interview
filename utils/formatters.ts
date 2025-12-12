export const formatFiatValue = (value: number) => {
  return `₺ ${value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const formatPercentage = (value: number) => `+${value.toFixed(2)}%`;

export const formatTokenBalance = (value: number) => value.toFixed(2);
