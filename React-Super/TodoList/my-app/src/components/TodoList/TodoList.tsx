import { useEffect, useReducer } from 'react'
import { Todo } from '../@types/todo.type'
import TaskInput from '../TaskInput/TaskInput'
import style from './todoList.module.scss'
import TaskList from '../TaskList/TaskList'
import {
  addTodoAction,
  changeInputEditAction,
  handleEditTodoAction,
  handleRemoveTodoAction,
  handleTaskListStateAcion,
  initState,
  startEditTodoAction
} from '../../reducer/actionTodos'
import reducer from '../../reducer/reducerTodo'
import { initState12 } from '../LodashFunc/lodashFuncTodo'

const syncLocalStorage = (handle: (newTodo: Todo[]) => Todo[]) => {
  let getTodoLocal = localStorage.getItem('todos')
  let parseTodo = JSON.parse(getTodoLocal || '[]')
  const todoSet = handle(parseTodo)
  localStorage.setItem('todos', JSON.stringify(todoSet))
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState, initState12)
  const doneTask = state.todos.filter((x) => x.done)
  const notDoneTask = state.todos.filter((x) => !x.done)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos))
  }, [state.todos])
  const getValueSubmitForm = (value: string) => {
    const todo = {
      name: value,
      done: false,
      id: new Date().toISOString()
    }
    dispatch(addTodoAction(todo))
    const handle = (newTodo: Todo[]) => {
      return [...newTodo, todo]
    }

    syncLocalStorage(handle)
  }

  const handleTaskListState = (id: string, done: boolean) => {
    dispatch(handleTaskListStateAcion({ id, done }))
  }

  const startEditTodo = (id: string) => {
    const filterTodoById = state.todos.find((x) => x.id === id)
    if (filterTodoById) {
      dispatch(startEditTodoAction(filterTodoById))
    }
  }

  const changeInputEdit = (name: string) => {
    dispatch(changeInputEditAction(name))
  }

  const handleEditTodo = () => {
    dispatch(handleEditTodoAction())
  }

  const handleRemoveTodo = (id: string) => {
    dispatch(handleRemoveTodoAction(id))
  }
  return (
    <>
      <div className={style.todoList}>
        <TaskInput
          getValueSubmitForm={getValueSubmitForm}
          currentTodo={state.currentTodo}
          changeInputEdit={changeInputEdit}
          handleEditTodo={handleEditTodo}
        />
        <TaskList
          todos={notDoneTask}
          handleTaskListState={handleTaskListState}
          startEditTodo={startEditTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
        <TaskList
          doneTaskList
          todos={doneTask}
          handleTaskListState={handleTaskListState}
          startEditTodo={startEditTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      </div>
    </>
  )
}

export default TodoList
