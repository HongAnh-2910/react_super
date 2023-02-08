export interface TypeNewProps {
  debug: Boolean
  fucClg: (string: string) => void
}

export interface TypeLogProps {
  debug: Boolean
}

export default function connect<P>(newProps: P) {
  function newComponent<T>(Component: React.ComponentType<T & P>) {
    return function (props: Omit<T, keyof P>) {
      return <Component {...(props as T & {})} {...newProps} />
    }
  }
  return newComponent
}
