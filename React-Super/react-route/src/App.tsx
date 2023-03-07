import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import Staff from 'pages/Staff'
import { createContext, useCallback, useMemo, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
export const idDefault = createContext<any>(null)
function App() {
  const [idActive, setIdActive] = useState<null | string>(null)
  const getId = useCallback((id: string | null) => {
    setIdActive(id)
  }, [])
  const objectContext = useMemo(() => {
    return { idActive, getId }
  }, [idActive, getId])
  return (
    <div className='App'>
      <idDefault.Provider value={{ ...objectContext }}>
        <MainLayout>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/about' element={<About />} />
            <Route path='/staff/*' element={<Staff />}>
              {/* <Route path=':id' element={<StaffItem />} />
            <Route path='add' element={<AddStaff />} />
            <Route index element={<StaffList />} /> */}
            </Route>
            {/* <Route path='/staff' element={<StaffList />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}
            <Route path='*' element={<span>Lỗi 404</span>} />
          </Routes>
        </MainLayout>
      </idDefault.Provider>
    </div>
  )
}

export default App
