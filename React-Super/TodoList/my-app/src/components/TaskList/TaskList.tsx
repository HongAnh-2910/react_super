import { Todo } from '../@types/todo.type'
import style from './taskList.module.scss'

interface taskListProps {
  doneTaskList?: Boolean
  todos: Todo[]
  handleTaskListState: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  handleRemoveTodo: (id: string) => void
}
export default function TaskList(props: taskListProps) {
  const { doneTaskList, todos, handleTaskListState, startEditTodo, handleRemoveTodo } = props
  const handleChangeCheckBox = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    handleTaskListState(id, event.target.checked)
  }
  return (
    <>
      <div className={style.taskList}>
        <h3>{!doneTaskList ? 'Chưa hoàn thành' : 'Hoàn thành'}</h3>
        <div className={style.list}>
          {todos.map((item) => (
            <div className={style.item} key={item.id}>
              <div className={style.task}>
                <input type='checkbox' checked={item.done} onChange={handleChangeCheckBox(item.id)} />
                <span className={`${style.taskName} ${item.done ? style.taskNameDone : ''}`}>{item.name}</span>
              </div>
              <div className={style.itemAction}>
                <button onClick={() => startEditTodo(item.id)}>
                  <i className='fa-solid fa-pen'></i>
                </button>
                <button onClick={() => handleRemoveTodo(item.id)}>
                  <i className='fa-solid fa-trash'></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
