import { useCallback, useState } from 'react'
import AutoInput from './components/AutoInput/AutoInput'
import ContextWelcome from './components/ContextWelcome/ContextWelcome'
import Count from './components/Count'
import Ads from './components/MouseTracker/Ads'
import ListProduct from './components/ProductSearch/ListProduct'
import ProductSearch from './components/ProductSearch/ProductSearch'
import CountAge from './components/Reducer'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import MouseTracker from './components/MouseTracker/MouseTracker'

function App() {
  const [, render] = useState({})
  const renderProps = useCallback((value: { x: null | number; y: null | number }) => <Ads {...value} />, [])
  return (
    <div className='App'>
      <button onClick={() => render({})}>Render</button>
      {/* <TodoList /> */}
      {/* <Count /> */}
      {/* <CountAge /> */}
      {/* <ContextWelcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductSearch>
        <ListProduct />
      </ProductSearch> */}
      <MouseTracker>{renderProps}</MouseTracker>
    </div>
  )
}

export default App
