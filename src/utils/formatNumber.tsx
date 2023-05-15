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

function getMonthName(monthNumber: number): string {
  const monthNames = [
    "janv.",
    "fév.",
    "mars",
    "avril",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc.",
  ];

  return monthNames[monthNumber - 1];
}

export function getDateInYear(dayOfYear: number) {
  const date = new Date();
  date.setMonth(0); // Set the month to January
  date.setDate(dayOfYear); // Set the day of the month

  // Obtenez la date au format souhaité (par exemple, "YYYY-MM-DD")
  const year = date.getFullYear();
  const monthNumber = date.getMonth() + 1;
  const monthName = getMonthName(monthNumber);
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${day} ${monthName} ${year}`;

  return formattedDate;
}
