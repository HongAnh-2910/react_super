import React from 'react'

type TtileProps = {
  titles: {
    title: string
  }
  handleClickTitle: (value: any) => void
  number: number
}

function Title({ titles, handleClickTitle, number }: TtileProps) {
  console.log('component con render')
  return (
    <h3 onClick={() => handleClickTitle(100)}>
      {titles.title} - {number}
    </h3>
  )
}

// function areEqual(prevProps: TtileProps, nextProps: TtileProps) {
//   return prevProps.titles.title === nextProps.titles.title
// }
// memo khong render lai khi props k thay doi , van render binh thuong khi set state , thay doi prop , thay doi tham chieu object , array , fun
export default React.memo(Title)
