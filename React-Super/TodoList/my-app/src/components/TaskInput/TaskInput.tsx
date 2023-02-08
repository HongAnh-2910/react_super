import { useState } from 'react'
import style from './taskInput.module.scss'
import { Todo } from '../@types/todo.type'
import PropTypes from 'prop-types'
import { todoType } from '../@types/propTypes.type'
import connectHOC, { typePropHOC } from '../../HOC/connectHOC'
interface TaskInputProps extends typePropHOC {
  getValueSubmitForm: (value: string) => void
  currentTodo: Todo | null
  changeInputEdit: (value: string) => void
  handleEditTodo: () => void
}
function TaskInput({ getValueSubmitForm, currentTodo, changeInputEdit, handleEditTodo, debug, clg }: TaskInputProps) {
  const [name, setName] = useState<string>('')
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
  console.log(debug, clg('hehe'))
  return (
    <div className={style.inputTask}>
      <h3>To do list typescript</h3>
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

export default connectHOC(TaskInput)
