import style from './taskList.module.scss'

interface taskListProps {
  doneTaskList?: Boolean
}
export default function TaskList(props: taskListProps) {
  const { doneTaskList } = props
  return (
    <>
      <div className={style.taskList}>
        <h3>{!doneTaskList ? 'Chưa hoàn thành' : 'Hoàn thành'}</h3>
        <div className={style.list}>
          {!doneTaskList && (
            <div className={style.item}>
              <div className={style.task}>
                <input type='checkbox' />
                <span className={style.taskName}>Code HTML</span>
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
          )}
          {doneTaskList && (
            <div className={style.item}>
              <div className={style.task}>
                <input type='checkbox' />
                <span className={`${style.taskName} ${style.taskNameDone}`}>Code HTML</span>
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
          )}
        </div>
      </div>
    </>
  )
}
