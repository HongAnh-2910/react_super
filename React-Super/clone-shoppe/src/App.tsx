import useRouteComponent from './routes/useRouteComponent'

function App() {
  const elementRoutes = useRouteComponent()
  return <div>{elementRoutes}</div>
}

export default App
