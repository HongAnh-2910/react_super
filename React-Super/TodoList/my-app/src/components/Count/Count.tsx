import { useRef, useState } from 'react'
import ChildCount from './ChildCount'

export default function Count() {
  const [count, setCount] = useState<number>(60)
  let timeSet = useRef<any>(null)
  let h3Elment = useRef<any>(null)
  const handleStart: () => void = () => {
    timeSet.current = setInterval(() => {
      setCount((prev) => prev - 1)
    }, 1000)
    h3Elment.current.style.color = 'red'
  }

  const handleCancel: () => void = () => {
    clearInterval(timeSet.current)
    h3Elment.current.style.color = 'black'
  }
  return <ChildCount ref={h3Elment} count={count} handleStart={handleStart} handleCancel={handleCancel} />
}
