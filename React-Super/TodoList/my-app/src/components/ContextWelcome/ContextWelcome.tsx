import React, { useCallback, useContext, useDebugValue, useId, useMemo, useReducer, useState } from 'react'
import styles from './cssWelcome.module.scss'

const CONST_ACTION = {
  handle_click_set_color_Action: 'handle_click_set_color_Action'
}
interface StateType {
  color: 'light' | 'dark'
}

const initStateColor: StateType = { color: 'light' }
const valueContext = React.createContext(null as any)

function handleClickSetColorAction(payload: StateType['color']) {
  return { type: CONST_ACTION.handle_click_set_color_Action, payload: payload } as {
    type: 'handle_click_set_color_Action'
    payload: StateType['color']
  }
}

function reducer(
  state: typeof initStateColor,
  action: {
    type: 'handle_click_set_color_Action'
    payload: StateType['color']
  }
) {
  switch (action.type) {
    case CONST_ACTION.handle_click_set_color_Action:
      return { ...state, color: action.payload }

    default:
      throw new Error('Unknown action: ' + action)
  }
}

const useCustomerWelCome = () => {
  const [state, dispatch] = useReducer(reducer, initStateColor)
  const [, renderState] = useState({})

  const handleClickSetColor = useCallback((status: 'light' | 'dark') => {
    dispatch(handleClickSetColorAction(status))
  }, [])
  useDebugValue(state.color === 'light' ? 'hehelight' : 'âadark')
  return {
    state,
    handleClickSetColor,
    renderState
  }
}

function ContextWelcome() {
  const { state, handleClickSetColor, renderState } = useCustomerWelCome()

  const valueContex = useMemo(() => {
    return { state, handleClickSetColor }
  }, [state, handleClickSetColor])

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
  const { state, handleClickSetColor } = useContext(valueContext)
  const id = useId()
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      handleClickSetColor('dark')
    } else {
      return handleClickSetColor('light')
    }
  }
  return (
    <>
      <input id={id} type='checkbox' checked={state.color === 'dark'} onChange={handleChecked} />
      <label htmlFor={id}>Use dark mode</label>
    </>
  )
})

function Form() {
  const { state } = useContext(valueContext)
  return (
    <div className={`${styles.wrapperForm}  ${state.color === 'light' ? styles.bgclickLight : styles.bgclickDark}`}>
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
