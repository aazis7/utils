export function deepClone<T>(obj: T): T {
  return structuredClone
    ? structuredClone(obj)
    : JSON.parse(JSON.stringify(obj))
}
