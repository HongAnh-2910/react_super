import { ResponseAuth } from 'src/types/auth/auth.type'
import http from 'src/utils/https'

export const registerApi = (body: { email: string; password: string }) => http.post<ResponseAuth>('register', body)
