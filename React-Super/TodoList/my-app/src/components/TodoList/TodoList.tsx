import { useEffect, useState } from 'react'
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

function TodoList() {
  const [todo, setTodo] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTask = todo.filter((x) => x.done)
  const notDoneTask = todo.filter((x) => !x.done)

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
    setTodo((prev) => [...prev, todo])
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
      setCurrentTodo(filterTodoById)
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
