import CreatePost from '../components/CreatePost'
import ListPost from '../components/ListPost'

export default function Post() {
  return (
    <div className='p-5'>
      <CreatePost />
      <ListPost />
    </div>
  )
}
