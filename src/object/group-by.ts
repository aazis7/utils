export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce(
    (acc, curr) => {
      const group = String(curr[key])
      acc[group] = acc[group] || []
      acc[group].push(curr)
      return acc
    },
    {} as Record<string, T[]>,
  )
}
