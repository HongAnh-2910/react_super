import style from './taskInput.module.scss'
export default function TaskInput() {
  return (
    <div className={style.inputTask}>
      <h3>To do list typescript</h3>
      <form>
        <input type='text' placeholder='caption goes here' />
        <button>
          <i className='fa-solid fa-plus'></i>
        </button>
      </form>
    </div>
  )
}
