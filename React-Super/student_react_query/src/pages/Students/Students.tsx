import { useIsFetching, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { deleteStudent, getStudent, getStudents } from 'utils/callApiStudent/apiGetStudents'
import useCustomerQuerySting from 'utils/useCustomerQuerySting'
import classNames from 'classnames'
import { toast } from 'react-toastify'
const LIMIT = 10
export default function Students() {
  const { _page } = useCustomerQuerySting()
  const queryClient = useQueryClient()

  const page: number | 1 = Number(_page) || 1
  const { isLoading, data } = useQuery({
    queryKey: ['students', page],
    queryFn: ({ signal }) => getStudents(page, LIMIT, signal),
    staleTime: 10 * 1000,
    cacheTime: 3 * 60 * 1000,
    keepPreviousData: true
  })
  const isFetch = useIsFetching(['students', page])
  console.log(isFetch)
  const deleteRow = useMutation({
    mutationFn: (id: string | number) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['students', page],
        exact: true
      })
    }
  })
  const totalRow = data?.headers['x-total-count']
  const totalPage = Math.ceil(Number(totalRow || 0) / LIMIT)
  const handleDelete = (id: string | number) => {
    deleteRow.mutate(id, {
      onSuccess: () => {
        toast.success('Delete Success')
        // refetch()
      }
    })
  }
  const handleMouseEnter = async (id: string | number) => {
    await queryClient.prefetchQuery({
      queryKey: ['student', String(id)],
      queryFn: () => getStudent(id),
      staleTime: 10 * 1000
    })
  }
  const handleFetchApi10 = () => {
    const id = '7'
    queryClient.prefetchQuery({
      queryKey: ['student', String(id)],
      queryFn: () => getStudent(id),
      staleTime: 10 * 1000
    })
  }

  const handleFetchApi10s = () => {
    const id = '7'
    queryClient.prefetchQuery({
      queryKey: ['student', String(id)],
      queryFn: () => getStudent(id),
      staleTime: 3 * 1000
    })
  }

  const cancelFetchApi = () => {
    queryClient.cancelQueries({ queryKey: ['students', page], exact: true })
  }

  return (
    <div>
      <h1 className='text-lg'>Students</h1>
      <Link
        to={`add`}
        type='button'
        className='mb-2 mt-4 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'
      >
        Thêm mới
      </Link>
      <button
        className=' mx-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
        onClick={handleFetchApi10}
      >
        Click 10s
      </button>
      <button
        onClick={handleFetchApi10s}
        className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
      >
        Click 10s
      </button>
      <button onClick={cancelFetchApi} className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'>
        Cancel Api
      </button>
      {isLoading && (
        <div role='status' className='mt-6 animate-pulse'>
          <div className='mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <div className='h-10  rounded bg-gray-200 dark:bg-gray-700' />
          <span className='sr-only'>Loading...</span>
        </div>
      )}
      {!isLoading && (
        <>
          <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
            <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
              <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='py-3 px-6'>
                    #
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Avatar
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Name
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    Email
                  </th>
                  <th scope='col' className='py-3 px-6'>
                    <span className='sr-only'>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.data.map((item) => (
                  <tr
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    key={item.id}
                    className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
                  >
                    <td className='py-4 px-6'>{item.id}</td>
                    <td className='py-4 px-6'>
                      <img src={item.avatar} alt='student' className='h-5 w-5' />
                    </td>
                    <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'>
                      {item.last_name}
                    </th>
                    <td className='py-4 px-6'>{item.email}</td>
                    <td className='py-4 px-6 text-right'>
                      <Link
                        to={`/students/${item.id}`}
                        className='mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className='font-medium text-red-600 dark:text-red-500'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='mt-6 flex justify-center'>
            <nav aria-label='Page navigation example'>
              <ul className='inline-flex -space-x-px'>
                <li>
                  {page === 1 ? (
                    <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                      Previous
                    </span>
                  ) : (
                    <Link
                      to={`/students?_page=${page - 1}`}
                      className=' rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    >
                      Previous
                    </Link>
                  )}
                </li>
                {Array(totalPage)
                  .fill(0)
                  .map((_, index) => {
                    let pageT = index + 1
                    let active = pageT === page
                    return (
                      <li key={index}>
                        <Link
                          className={classNames(
                            'border border-gray-300 py-2 px-3 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700',
                            { ' bg-gray-300 text-gray-700': active, 'bg-white': !active }
                          )}
                          to={`/students?_page=${pageT}`}
                        >
                          {pageT}
                        </Link>
                      </li>
                    )
                  })}
                <li>
                  {page === totalPage ? (
                    <span className='cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
                      Next
                    </span>
                  ) : (
                    <Link
                      className='rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                      to={`/students?_page=${page + 1}`}
                    >
                      Next
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}
