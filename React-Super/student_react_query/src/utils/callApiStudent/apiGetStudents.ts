import http from 'utils/axios/Http'

export const getStudents = (page: number, limit: number, signal: AbortSignal) => {
  let response = http.get('students', {
    signal,
    params: {
      _page: page,
      _limit: limit
    }
  })
  return response
}
