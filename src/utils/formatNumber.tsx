enum ENumberToLocaleString {
  FR = "fr-FR",
}

/**
 * @description Formats number to conventional string format.
 * @param {number} value
 * @param {number} precision
 * @param {ENumberToLocaleString} locale
 * @param {Intl.NumberFormatOptions} formatOptions
 * @returns {string}
 */
function formatNumberToLocaleStandard(
  value: number,
  precision = 0,
  locale: ENumberToLocaleString = ENumberToLocaleString.FR,
  formatOptions: Intl.NumberFormatOptions = {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: precision,
  }
): string {
  return value.toLocaleString(locale, formatOptions);
}

/**
 * @description Formats number to conventional string format.
 * @param {number} value
 * @param {string} unite
 * @param {number} precision
 * @param {boolean} round
 * @returns {string}
 */
function formatNumber(
  value: number | undefined | null,
  unite?: string,
  precision = 2,
  round = true,
  noValue = "-"
): string {
  if (value === undefined || value === null) return noValue;
  if (round)
    value =
      Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
  const formatNumb =
    formatNumberToLocaleStandard(value, Math.max(precision, 0)) + (unite ?? "");
  return formatNumb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
export { formatNumberToLocaleStandard, formatNumber };
