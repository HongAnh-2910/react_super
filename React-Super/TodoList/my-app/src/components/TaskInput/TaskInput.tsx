import { useEffect, useMemo, useState } from 'react'
import style from './taskInput.module.scss'
import { Todo } from '../@types/todo.type'
import PropTypes from 'prop-types'
import { todoType } from '../@types/propTypes.type'
import { debug, showClg } from '../../constants'
import connect from '../../HOC/connect'
import Title from '../Title'
interface TaskInputProps {
  getValueSubmitForm: (value: string) => void
  currentTodo: Todo | null
  changeInputEdit: (value: string) => void
  handleEditTodo: () => void
}
function TaskInput({
  getValueSubmitForm,
  currentTodo,
  changeInputEdit,
  handleEditTodo,
  debug,
  fucClg
}: TaskInputProps & typeof injectProps) {
  const [name, setName] = useState<string>('')
  const titles = useMemo(() => {
    return { title: 'Day la tieu de' }
  }, [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      changeInputEdit(value)
    } else {
      setName(value)
    }
  }

  const handleSubmitInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    if (currentTodo) {
      handleEditTodo()
    } else {
      getValueSubmitForm(name)
      setName('')
    }
    if (name) {
      setName('')
    }
  }
  console.log(debug)
  return (
    <div className={style.inputTask}>
      <Title titles={titles} />
      <form>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={handleChange}
        />
        <button onClick={handleSubmitInput}>
          <i className={!currentTodo ? 'fa-solid fa-plus' : 'fa-solid fa-check'}></i>
        </button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  getValueSubmitForm: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([todoType, PropTypes.oneOf([null])]),
  changeInputEdit: PropTypes.func.isRequired,
  handleEditTodo: PropTypes.func.isRequired
}
const injectProps = { debug: debug, fucClg: showClg }
export default connect(injectProps)(TaskInput)
