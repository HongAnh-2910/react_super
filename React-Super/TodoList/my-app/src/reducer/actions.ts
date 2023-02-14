export type ActionType = TypeIncrease | TypeDecrease | TypeIncrease3
type TypeIncrease = { type: 'increase_type' }
type TypeDecrease = { type: 'decrease_type' }
type TypeIncrease3 = { type: 'decrease_tgx'; payload: number }
export const increaseType = () => {
  return { type: 'increase_type' } as TypeIncrease
}

export const decreaseType = () => {
  return { type: 'decrease_type' } as TypeDecrease
}

export const increase3 = (value: number) => {
  return { type: 'decrease_tgx', payload: value } as TypeIncrease3
}
