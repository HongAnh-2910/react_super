import { debug, showClg } from '../constants'

export interface typePropHOC {
  debug: boolean
  clg: (str: string) => void
}

export default function connectHOC<T>(Component: React.ComponentType<T>) {
  return function newComponent(props: Omit<T, keyof typePropHOC>) {
    return <Component {...(props as T)} debug={debug} clg={showClg} />
  }
}
