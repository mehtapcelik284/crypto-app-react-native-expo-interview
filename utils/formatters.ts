type FormatFiatValueOptions = {
  compact?: boolean;
  noSpace?: boolean;
};

export const formatFiatValue = (
  value: number,
  options: FormatFiatValueOptions = {}
) => {
  const { compact = false, noSpace = false } = options;

  const formatted = value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...(compact
      ? {
          notation: "compact",
          compactDisplay: "short",
        }
      : {}),
  });

  const separator = noSpace ? "" : " ";

  return `₺${separator}${formatted}`;
};

export const formatPercentage = (value: number) => {
  const formatted = Math.abs(value).toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const sign = value >= 0 ? "+" : "-";
  return `${sign}${formatted}%`;
};

export const formatTokenBalance = (value: number) => value.toFixed(2);
