import { idDefault } from 'App'
import React, { useContext } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import routes from 'routes/routes'

interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  const { idActive } = useContext(idDefault)
  const { pathname } = useLocation()

  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            {routes.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) => {
                    let classActive =
                      isActive || (pathname.includes(`staff/${idActive}`) && pathname === `/staff/${idActive}`)
                        ? 'bg-gray-300'
                        : ''
                    return ` ${classActive} flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                  }}
                >
                  {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>{item.name}</span>}
                </NavLink>
              </li>
            ))}
            {/* <li>
              <NavLink
                to={'/staff'}
                className={({ isActive }) => {
                  let classActive = isActive ? 'bg-gray-300' : ''
                  return ` ${classActive} flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Staff</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/about'}
                className={({ isActive }) => {
                  let classActive = isActive ? 'bg-gray-300' : ''
                  return ` ${classActive} flex items-center rounded-lg  p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>}
              </NavLink>
            </li> */}
          </ul>
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
