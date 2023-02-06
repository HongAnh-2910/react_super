import { useEffect, useState } from 'react'
import { Todo } from '../@types/todo.type'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import style from './todoList.module.scss'

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
    let getTodoLocal = localStorage.getItem('todos')
    let parseTodo = JSON.parse(getTodoLocal || '[]')
    const todoSet = [...parseTodo, todo]
    localStorage.setItem('todos', JSON.stringify(todoSet))
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
    let getTodoLocal = localStorage.getItem('todos')
    let parseTodo: Todo[] = JSON.parse(getTodoLocal || '[]')
    let newTodo = handlelocalStr(parseTodo)
    localStorage.setItem('todos', JSON.stringify(newTodo))
    setTodo(newTodo)
  }

  const handleRemoveTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    let indexTodo = todo.findIndex((item) => item.id === id)
    todo.splice(indexTodo, 1)
    const newTodo = [...todo]
    setTodo(newTodo)
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
