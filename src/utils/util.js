export function formatCurrency(num) {
  if (isNaN(num)) return "";
  const formatted = Number(num).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
}
