import AutoInput from './components/AutoInput/AutoInput'
import ContextWelcome from './components/ContextWelcome/ContextWelcome'
import Count from './components/Count'
import Ads from './components/MouseTracker/Ads'
import MouseTracker from './components/MouseTracker/MouseTracker'
import ListProduct from './components/ProductSearch/ListProduct'
import ProductSearch from './components/ProductSearch/ProductSearch'
import CountAge from './components/Reducer'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      {/* <TodoList /> */}
      {/* <Count /> */}
      {/* <CountAge /> */}
      {/* <ContextWelcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductSearch>
        <ListProduct />
      </ProductSearch> */}
      <MouseTracker render={(value) => <Ads postion={value} />} />
    </div>
  )
}

export default App
