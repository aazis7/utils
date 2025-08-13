export function randomInt(min: number = 5, max: number = 10): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
