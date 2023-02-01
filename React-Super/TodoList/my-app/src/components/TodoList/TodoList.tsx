import { useState } from 'react'
import { Todo } from '../@types/todo.type'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import style from './todoList.module.scss'

function TodoList() {
  const [todo, setTodo] = useState<Todo[]>([])
  const doneTask = todo.filter((x) => x.done)
  const notDoneTask = todo.filter((x) => !x.done)
  const getValueSubmitForm = (value: string) => {
    const todo = {
      name: value,
      done: false,
      id: new Date().toISOString()
    }
    setTodo((prev) => [...prev, todo])
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
  return (
    <>
      <div className={style.todoList}>
        <TaskInput getValueSubmitForm={getValueSubmitForm} />
        <TaskList todos={notDoneTask} handleTaskListState={handleTaskListState} />
        <TaskList doneTaskList todos={doneTask} handleTaskListState={handleTaskListState} />
      </div>
    </>
  )
}

export default TodoList
