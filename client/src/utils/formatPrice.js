/**
 * Formats a number into Ghanaian Cedis currency.
 * @param {number} amount - The amount in USD (or any number)
 * @param {string} currencySymbol - Optional currency symbol, default is ₵
 * @returns {string} - Formatted price string, e.g., ₵399.99
 */
export const formatPrice = (amount, currencySymbol = "₵") => {
  // Ensure it's a number
  const num = Number(amount) || 0;

  // Format with comma as thousands separator and two decimal places
  return `${currencySymbol}${num.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
