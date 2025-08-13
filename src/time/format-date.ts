export function formatDate(
  date: Date | string,
  locale = 'id-ID',
  options?: Intl.DateTimeFormatOptions,
) {
  return new Date(date).toLocaleDateString(locale, options)
}
