import { Todo } from '../@types/todo.type'
import style from './taskList.module.scss'

interface taskListProps {
  doneTaskList?: Boolean
  todos: Todo[]
  handleTaskListState: (id: string, done: boolean) => void
}
export default function TaskList(props: taskListProps) {
  const { doneTaskList, todos, handleTaskListState } = props
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
                <button>
                  <i className='fa-solid fa-pen'></i>
                </button>
                <button>
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
