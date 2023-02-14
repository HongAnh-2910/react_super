import { ActionType } from './actions'

export const initState = { age: 20 }
export default function reducer(state: typeof initState, action: ActionType) {
  switch (action.type) {
    case 'increase_type':
      return { ...state, age: state.age + 1 }
    case 'decrease_type':
      return { ...state, age: state.age - 1 }
    case 'decrease_tgx':
      return { ...state, age: state.age + action.payload }
    default:
      throw new Error('Invalid action', action)
  }
}
