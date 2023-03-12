export function exclude<Entity, Key extends keyof Entity>(entity: Entity, keys: Key[]): Omit<Entity, Key> {
  for (let key of keys) delete entity[key]
  return entity
}

export function round(num: number, decimalPlaces: number = 0): number {
  const factor = 10 ** decimalPlaces
  if (decimalPlaces === 0) {
    return Math.round(num)
  } else {
    return Math.round((num + Number.EPSILON) * factor) / factor
  }
}
