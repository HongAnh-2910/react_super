import { useReducer } from 'react'
import reducer, { initState } from '../../reducer/reducer'
import { decreaseType, increase3, increaseType } from '../../reducer/actions'

export default function CountAge() {
  const [state, dispatch] = useReducer(reducer, initState)
  const handleIncrease = () => {
    dispatch(increaseType())
  }
  const handleDecrease = () => {
    dispatch(decreaseType())
  }
  const handleIncrease3 = (value: number) => {
    dispatch(increase3(value))
  }
  return (
    <div>
      <button onClick={handleIncrease}>increase</button>
      <p>Tuổi:{state.age}</p>
      <button onClick={handleDecrease}>decrease</button>
      <br></br>
      <button onClick={() => handleIncrease3(3)}>increase + 3</button>
    </div>
  )
}
