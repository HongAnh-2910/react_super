import { useEffect, useReducer, useState } from 'react'
import { Todo } from '../@types/todo.type'
import TaskInput from '../TaskInput/TaskInput'
import style from './todoList.module.scss'
import TaskList from '../TaskList/TaskList'

const syncLocalStorage = (handle: (newTodo: Todo[]) => Todo[]) => {
  let getTodoLocal = localStorage.getItem('todos')
  let parseTodo = JSON.parse(getTodoLocal || '[]')
  const todoSet = handle(parseTodo)
  localStorage.setItem('todos', JSON.stringify(todoSet))
}

type initStateType = { todos: Todo[]; currentTodo: Todo | null }

const initState: initStateType = { todos: [], currentTodo: null }

type ActionTodo = { type: 'add_todo_action'; payload: Todo }

function addTodoAction(todo: Todo) {
  return { type: 'add_todo_action', payload: todo } as { type: 'add_todo_action'; payload: Todo }
}

function startEditTodoAction(todo: Todo) {
  return { type: 'start_edit_todo', payload2: todo } as { type: 'start_edit_todo'; payload2: Todo }
}

function reducer(state: typeof initState, action: ActionTodo | any) {
  switch (action.type) {
    case 'add_todo_action':
      return { ...state, todos: [...state.todos, action.payload] }
    case 'start_edit_todo':
      return { ...state, currentTodo: { done: false, id: '2023-02-07T13:57:31.879Z', name: '123' } }
    default:
      throw new Error('Invalid action', action)
  }
}

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [todo, setTodo] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTask = state.todos.filter((x) => x.done)
  const notDoneTask = state.todos.filter((x) => !x.done)

  useEffect(() => {
    let getTodoLocal = localStorage.getItem('todos')
    let parseTodo = JSON.parse(getTodoLocal || '[]')
    setTodo(parseTodo)
  }, [])
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
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, done }
        }
        return item
      })
    )
  }

  const startEditTodo = (id: string) => {
    const filterTodoById = todo.find((x) => x.id === id)
    if (filterTodoById) {
      dispatch(startEditTodoAction(filterTodoById))
    }
  }

  const changeInputEdit = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return { ...prev, name }
      }
      return prev
    })
  }

  const handleEditTodo = () => {
    const handlelocalStr = (objTodo: Todo[]) => {
      return objTodo.map((item) => {
        if (item.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return item
      })
    }
    setCurrentTodo(null)
    setTodo(handlelocalStr)
    syncLocalStorage(handlelocalStr)
  }

  const handleRemoveTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    const handleRemove = (objTodo: Todo[]) => {
      let indexTodo = objTodo.findIndex((item) => item.id === id)
      objTodo.splice(indexTodo, 1)
      return [...objTodo]
    }
    setTodo(handleRemove)
    syncLocalStorage(handleRemove)
  }
  return (
    <>
      <div className={style.todoList}>
        <TaskInput
          getValueSubmitForm={getValueSubmitForm}
          currentTodo={currentTodo}
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
