import { idDefault } from 'App'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function StaffItem() {
  const { id } = useParams()
  const { getId } = useContext(idDefault)
  useEffect(() => {
    getId(id)
    return () => {
      getId(null)
    }
  }, [id, getId])
  return <div>StaffItem {id}</div>
}
