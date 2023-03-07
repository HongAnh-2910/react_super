import React, { useState } from 'react'

interface TypeMouse {
  x: null | number
  y: null | number
}
function MouseTracker({ children }: { children: (value: TypeMouse) => JSX.Element }) {
  const [postion, setPostion] = useState<TypeMouse>({ x: null, y: null })
  function onMauseTracker(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    setPostion({ x: event.clientX, y: event.clientY })
  }
  return (
    <div style={{ width: '500px', height: '400px' }} onMouseMove={onMauseTracker}>
      <div className='mouse_tecket' style={{ color: 'red' }}>
        mouse tracker
      </div>
      {children({ ...postion })}
    </div>
  )
}
export default React.memo(MouseTracker)
// export function mouseTrackerHoc<T>(Component: React.ComponentType<T & { postion: TypeMouse }>) {
//   return function (props: Omit<T, keyof { postion: TypeMouse }>) {
//     const [postion, setPostion] = useState<TypeMouse>({ x: null, y: null })
//     function onMauseTracker(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//       setPostion({ x: event.clientX, y: event.clientY })
//     }
//     return (
//       <div style={{ width: '500px', height: '400px' }} onMouseMove={onMauseTracker}>
//         <div className='mouse_tecket' style={{ color: 'red' }}>
//           mouse tracker
//         </div>
//         <Component {...(props as T)} postion={postion} />
//       </div>
//     )
//   }
// }
