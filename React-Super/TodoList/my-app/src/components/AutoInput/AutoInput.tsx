import React, { useImperativeHandle, useRef, useState } from 'react'

export default function AutoInput() {
  const refFocus = useRef<{
    type: () => void
    currrentRef: { current: HTMLInputElement | null }
  }>({
    type: () => {},
    currrentRef: { current: null }
  })
  const handleAutoInput = () => {
    refFocus.current.type()
    refFocus.current.currrentRef.current?.focus()
  }
  return (
    <div>
      AutoInput
      <button onClick={handleAutoInput} style={{ display: 'block' }}>
        Click change autoInput
      </button>
      <Input ref={refFocus}>input auto</Input>
    </div>
  )
}

interface InputProp {
  children: string
}

const Input = React.forwardRef(function ({ children }: InputProp, ref) {
  const currrentRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  useImperativeHandle(ref, () => {
    return {
      type,
      currrentRef
    }
  })
  function type() {
    let currentIndex = 0
    let name = 'Nguyễn Văn A'
    let intavel = setInterval(() => {
      setValue(name.slice(0, currentIndex))
      if (name.length === currentIndex) {
        clearInterval(intavel)
      }
      currentIndex++
    }, 100)
  }
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
})
