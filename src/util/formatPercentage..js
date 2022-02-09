export default function formatPercentage(number, decimalPlaces = 2) {
  if (number === null || number === undefined) {
    return;
  }

  return `${number.toFixed(decimalPlaces)}%`;
}
