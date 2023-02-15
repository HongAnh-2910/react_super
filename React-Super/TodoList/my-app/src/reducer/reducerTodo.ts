import { Todo } from '../components/@types/todo.type'
import { ActionTodo, initState } from './actionTodos'

function reducer(state: typeof initState, action: ActionTodo) {
  switch (action.type) {
    case 'add_todo_action':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'start_edit_todo':
      return { ...state, currentTodo: action.payload }
    case 'change_input_edit_todo':
      return { ...state, currentTodo: { ...(state.currentTodo as Todo), name: action.payload } }
    case 'handle_taskList_state':
      let stateNew = state.todos.map((item: Todo) => {
        if (item.id === action.payload.id) {
          return { ...item, done: action.payload.done }
        }
        return item
      })
      return { ...state, todos: stateNew }
    case 'handle_edit_todo':
      let stateNewEdit = state.todos.map((item) => {
        if (item.id === (state.currentTodo as Todo).id) {
          return state.currentTodo as Todo
        }
        return item as Todo
      })
      return { ...state, todos: stateNewEdit, currentTodo: null }
    case 'handle_remove_todo':
      let index = state.todos.findIndex((item) => item.id === action.payload)
      const arrayLet = [...state.todos]
      arrayLet.splice(index, 1)
      return { ...state, todos: arrayLet, currentTodo: null }
    default:
      throw new Error('Invalid action', action)
  }
}
export default reducer
