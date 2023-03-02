import { NavLink, Outlet } from 'react-router-dom'
export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff List</h1>
      <div className='border-b border-gray-200 text-center text-sm font-medium text-gray-500  '>
        <ul className='-mb-px flex flex-wrap'>
          <li className='mr-2'>
            <NavLink
              to={'/staff'}
              end
              className={({ isActive }) => {
                let active = isActive
                  ? 'active rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600'
                  : ' hover:border-gray-300 hover:text-gray-600'
                return `${active} inline-block rounded-t-lg border-b-2 border-transparent p-4 `
              }}
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to={'/staff/add'}
              className={({ isActive }) => {
                let active = isActive
                  ? 'active rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600'
                  : ' hover:border-gray-300 hover:text-gray-600'
                return `${active} inline-block rounded-t-lg border-b-2 border-transparent p-4 `
              }}
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
      {/* <AddStaff /> */}
    </div>
  )
}
