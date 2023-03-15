import { User } from './user.type'
import { ResponseUtils } from './utils.type'

export type ResponseAuth = ResponseUtils<{
  access_token: string
  expires: string | number
  refresh_token: string
  expires_refresh_token: string
  user: User
}>
