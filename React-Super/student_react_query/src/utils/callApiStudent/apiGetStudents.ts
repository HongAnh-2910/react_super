import { TypeStudents } from 'types/typeStudent'
import http from 'utils/axios/Http'

export const getStudents = (page: number | string, limit: number | string) => {
  let response = http.get<TypeStudents>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
  return response
}
