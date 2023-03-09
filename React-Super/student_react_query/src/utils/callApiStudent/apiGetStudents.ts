import { TypeStudent, TypeStudents } from 'types/typeStudent'
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

export const addStudent = (body: Omit<TypeStudent, 'id'>) => http.post<TypeStudent>('students', body)

export const getStudent = (id: string | number) => http.get<TypeStudent>(`students/${id}`)

export const updateStudent = (id: string | number, body: Omit<TypeStudent, 'id'>) =>
  http.put<TypeStudent>(`students/${id}`, body)

export const deleteStudent = (id: string | number) => http.delete<{}>(`students/${id}`)
