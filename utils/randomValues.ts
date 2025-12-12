const randomBetween = (min: number, max: number, decimals = 2) => {
  const value = Math.random() * (max - min) + min;
  return value.toFixed(decimals);
};

const randomPercentage = () => {
  const value = randomBetween(0.1, 8, 2);
  return value;
};

const randomPriceTRY = () => {
  return Number(randomBetween(10000, 250000, 2));
};

const randomBalance = () => {
  return randomBetween(0.01, 5, 2);
};

export { randomBalance, randomBetween, randomPercentage, randomPriceTRY };
