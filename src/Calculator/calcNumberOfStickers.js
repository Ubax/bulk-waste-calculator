const MAX_SIZES = [200, 90, 40];
const MAX_WEIGHT = 30;

export function calcNumberOfStickers(sizes, weight) {
  if (weight > MAX_WEIGHT * 2) return NaN;
  const sortedSizes = [...sizes].sort((a, b) => b - a);
  const percentages = sortedSizes
    .map((size, index) => size / MAX_SIZES[index])
    .filter((diff) => diff > 1);
  if (percentages.length === 0) return weight > MAX_WEIGHT ? 2 : 1;
  if (percentages.length === 1) {
    if (percentages[0] > 2) return NaN;
    return 2;
  }
  if (percentages.some((s) => s > 1.5)) return NaN;
  if (percentages.some((s) => s > 1.25)) return 3;
  return 2;
}
