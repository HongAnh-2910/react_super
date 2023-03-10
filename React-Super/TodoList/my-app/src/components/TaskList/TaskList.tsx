import connect, { TypeLogProps } from '../../HOC/connect'
import { debug } from '../../constants'
import { todoType } from '../@types/propTypes.type'
import { Todo } from '../@types/todo.type'
import style from './taskList.module.scss'
import PropTypes from 'prop-types'

interface taskListProps extends TypeLogProps {
  doneTaskList?: Boolean
  todos: Todo[]
  handleTaskListState: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  handleRemoveTodo: (id: string) => void
}
function TaskList(props: taskListProps & typeof injectProps) {
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

TaskList.propTypes = {
  doneTaskList: PropTypes.bool,
  todos: PropTypes.arrayOf(todoType).isRequired,
  handleTaskListState: PropTypes.func.isRequired,
  startEditTodo: PropTypes.func.isRequired,
  handleRemoveTodo: PropTypes.func.isRequired
}
const injectProps = { debug: debug }
export default connect(injectProps)(TaskList)
