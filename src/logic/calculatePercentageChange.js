/**
 * Calculate the percentage change between two values.
 *
 * @param {number} current - The current value.
 * @param {number} bought - The initial value when it was bought.
 * @returns {string} - The percentage change formatted as a string with a '+' or '-' sign.
 */
export const calculatePercentageChange = (current, bought) => {
  if (bought === 0) {
    throw new Error("The 'bought' value cannot be zero");
  }

  const change = ((current - bought) / bought) * 100;
  const formattedChange = change.toFixed(2);

  return change > 0 ? `+${formattedChange}%` : `${formattedChange}%`;
};
