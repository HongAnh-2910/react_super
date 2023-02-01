import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import style from './todoList.module.scss'

function TodoList() {
  return (
    <>
      <div className={style.todoList}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </>
  )
}

export default TodoList
