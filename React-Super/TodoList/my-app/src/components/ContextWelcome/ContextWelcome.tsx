import React, { useCallback, useContext, useMemo, useState } from 'react'
import styles from './cssWelcome.module.scss'

interface StateType {
  color: 'light' | 'dark'
}
const valueContext = React.createContext(null as any)
function ContextWelcome() {
  const [theme, setTheme] = useState<StateType>({ color: 'light' })
  const [, renderState] = useState({})

  const handleClickSetColor = useCallback((status: 'light' | 'dark') => {
    setTheme((prev) => {
      return { ...prev, color: status }
    })
  }, [])

  const valueContex = useMemo(() => {
    return { theme, handleClickSetColor }
  }, [theme, handleClickSetColor])

  const handleRender = () => {
    renderState({})
  }

  return (
    <div className='welcome'>
      <div>
        <button onClick={handleRender}>Click render</button>
      </div>
      <valueContext.Provider value={valueContex}>
        <Form />
        <Label />
      </valueContext.Provider>
    </div>
  )
}

const Label = React.memo(function () {
  const { theme, handleClickSetColor } = useContext(valueContext)
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      handleClickSetColor('dark')
    } else {
      return handleClickSetColor('light')
    }
  }
  return (
    <label>
      <input type='checkbox' checked={theme.color === 'dark'} onChange={handleChecked} /> Use dark mode
    </label>
  )
})

function Form() {
  const { theme } = useContext(valueContext)
  return (
    <div className={`${styles.wrapperForm}  ${theme.color === 'light' ? styles.bgclickLight : styles.bgclickDark}`}>
      <Button status='dark'>Dark</Button>
      <Button status='light'>Light</Button>
    </div>
  )
}

type PropButton = {
  children: string
  status: 'light' | 'dark'
}
function Button({ status, children }: PropButton) {
  const { handleClickSetColor } = useContext(valueContext)
  return (
    <button className={styles.css_button} onClick={() => handleClickSetColor(status)}>
      {children}
    </button>
  )
}

export default ContextWelcome
