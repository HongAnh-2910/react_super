import { initStateType } from '../../reducer/actionTodos'

export const initState12 = (initState1312: initStateType) => {
  let getLocal = JSON.parse(localStorage.getItem('todos') as string)
  if (Array.isArray(getLocal) && getLocal.length > 0) {
    return { ...initState1312, todos: getLocal } as initStateType
  }
  return { ...initState1312 } as initStateType
}
