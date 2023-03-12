import { useRoutes } from 'react-router-dom'
import RegisterLayout from 'src/layouts/RegisterLayout/RegisterLayout'
import Login from 'src/pages/Login'
import ProductList from 'src/pages/ProductList'
import Register from 'src/pages/Register'
export default function useRouteComponent() {
  const elementRouter = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    }
  ])
  return elementRouter
}
