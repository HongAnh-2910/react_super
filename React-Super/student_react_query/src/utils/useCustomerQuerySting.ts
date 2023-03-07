import { useSearchParams } from 'react-router-dom'

const useCustomerQuerySting = () => {
  const [searchParams] = useSearchParams()
  const paramsUrl = Object.fromEntries([...searchParams])
  return paramsUrl
}
export default useCustomerQuerySting
