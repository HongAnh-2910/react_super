import { useState } from 'react'
import style from './taskInput.module.scss'
interface TaskInputProps {
  getValueSubmitForm: (value: string) => void
}
export default function TaskInput(props: TaskInputProps) {
  const [name, setName] = useState<string>('')
  const { getValueSubmitForm } = props
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }

  const handleSubmitInput = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    getValueSubmitForm(name)
    setName('')
  }
  return (
    <div className={style.inputTask}>
      <h3>To do list typescript</h3>
      <form>
        <input type='text' placeholder='caption goes here' value={name} onChange={handleChange} />
        <button onClick={handleSubmitInput}>
          <i className='fa-solid fa-plus'></i>
        </button>
      </form>
    </div>
  )
}
