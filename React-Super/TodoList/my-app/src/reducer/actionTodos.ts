import { Todo } from '../components/@types/todo.type'

export type initStateType = { todos: Todo[] | []; currentTodo: Todo | null }

export const initState: initStateType = { todos: [], currentTodo: null }

type AddTodoAction = { type: 'add_todo_action'; payload: Todo }

type StartEditTodo = { type: 'start_edit_todo'; payload: Todo }

type ChangeInputEditTodo = { type: 'change_input_edit_todo'; payload: string }

type HandleTaskListState = { type: 'handle_taskList_state'; payload: { id: string; done: boolean } }

type HandleEditTodo = { type: 'handle_edit_todo' }

type HandleRemoveTodo = { type: 'handle_remove_todo'; payload: string }

export type ActionTodo =
  | AddTodoAction
  | StartEditTodo
  | ChangeInputEditTodo
  | HandleTaskListState
  | HandleEditTodo
  | HandleRemoveTodo

export function addTodoAction(todo: Todo) {
  return { type: 'add_todo_action', payload: todo } as AddTodoAction
}

export function startEditTodoAction(todo: Todo) {
  return { type: 'start_edit_todo', payload: todo } as StartEditTodo
}

export function changeInputEditAction(name: string) {
  return { type: 'change_input_edit_todo', payload: name } as ChangeInputEditTodo
}

export function handleTaskListStateAcion(payload: { id: string; done: boolean }) {
  return { type: 'handle_taskList_state', payload: payload } as HandleTaskListState
}

export function handleEditTodoAction() {
  return { type: 'handle_edit_todo' } as HandleEditTodo
}

export function handleRemoveTodoAction(id: string) {
  return { type: 'handle_remove_todo', payload: id } as HandleRemoveTodo
}
