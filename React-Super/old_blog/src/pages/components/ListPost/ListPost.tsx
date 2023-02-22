import { useSelector } from 'react-redux'
import ItemPost from '../ItemPost'
import { RootState, useAppDispatch } from '../../../store'
import { getListPost, removePost, startEditPost } from '../../post.reducer'
import { useEffect } from 'react'

export default function ListPost() {
  const postList = useSelector((state: RootState) => state.post.postList)
  const disphatch = useAppDispatch()
  const handleDelete = (postId: string) => {
    disphatch(removePost(postId))
  }
  const handleStartEdit = (postId: string) => {
    disphatch(startEditPost(postId))
  }

  useEffect(() => {
    let promise = disphatch(getListPost())
    return () => {
      promise.abort()
    }
  }, [disphatch])

  return (
    <div>
      <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>Được Dev Blog</h2>
            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              Đừng bao giờ từ bỏ. Hôm nay khó khăn, ngày mai sẽ trở nên tồi tệ. Nhưng ngày mốt sẽ có nắng
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            {postList.map((item) => (
              <ItemPost handleStartEdit={handleStartEdit} handleDelete={handleDelete} key={item.id} post={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
