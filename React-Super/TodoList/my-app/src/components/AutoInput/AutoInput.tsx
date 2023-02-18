import { useEffect, useRef, useState } from 'react'

export default function AutoInput() {
  const handleAutoInput = () => {
    console.log('123')
  }
  return (
    <div>
      AutoInput
      <button onClick={handleAutoInput} style={{ display: 'block' }}>
        Click change autoInput
      </button>
      <Input>input auto</Input>
    </div>
  )
}

interface InputProp {
  children: string
}

function Input({ children }: InputProp) {
  const currrentRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  useEffect(() => {
    let currentIndex = 0
    let name = 'Nguyễn Văn A'
    currrentRef.current?.focus()
    let intavel = setInterval(() => {
      setValue(name.slice(0, currentIndex))
      if (name.length === currentIndex) {
        clearInterval(intavel)
      }
      currentIndex++
    }, 100)
  }, [])
  console.log('123')
  return (
    <input
      onChange={(event) => setValue(event.target.value)}
      ref={currrentRef}
      style={{ padding: '5px' }}
      type='text'
      placeholder={children}
      value={value}
    />
  )
}
