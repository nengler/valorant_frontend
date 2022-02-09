export default function formatNumberCommas(number) {
  if (number === null || number === undefined) {
    return;
  }

  return number.toLocaleString();
}
