import React from 'react'

interface ChildCountProps {
  count: number
  handleStart: () => void
  handleCancel: () => void
}

const ChildCount = React.forwardRef(
  ({ count, handleStart, handleCancel }: ChildCountProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    console.log(ref)
    return (
      <div>
        <h3 ref={ref}>Count:{count}</h3>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleCancel}>Stop</button>
      </div>
    )
  }
)

export default ChildCount
