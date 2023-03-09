import axios, { AxiosError } from 'axios'

export function isErrorAxios<P>(error: unknown): error is AxiosError<P> {
  return axios.isAxiosError(error)
}
