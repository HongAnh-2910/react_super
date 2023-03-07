export interface TypeStudent {
  id: number | string
  first_name: string
  last_name: string
  email: string
  gender: string
  country: string
  avatar: string
  btc_address: string
}

export type TypeStudents = Pick<TypeStudent, 'id' | 'avatar' | 'email' | 'last_name'>[]
