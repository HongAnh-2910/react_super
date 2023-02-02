import { useState } from 'react'
import style from './taskInput.module.scss'
import { Todo } from '../@types/todo.type'
interface TaskInputProps {
  getValueSubmitForm: (value: string) => void
  currentTodo: Todo | null
  changeInputEdit: (value: string) => void
  handleEditTodo: () => void
}
export default function TaskInput({
  getValueSubmitForm,
  currentTodo,
  changeInputEdit,
  handleEditTodo
}: TaskInputProps) {
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
