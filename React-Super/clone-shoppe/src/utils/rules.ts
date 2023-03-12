import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
type Rules = { [key in 'email' | 'password' | 'password_confirm']: RegisterOptions }
const rules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống'
    },
    pattern: {
      // eslint-disable-next-line no-useless-escape
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email không đúng định dạng'
    },
    minLength: {
      value: 5,
      message: 'Độ dài nhỏ nhất 5 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài lớn nhất 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Mật khẩu không được để trống'
    },
    minLength: {
      value: 6,
      message: 'Độ dài nhỏ nhất 6 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài lớn nhất 160 ký tự'
    }
  },
  password_confirm: {
    required: {
      value: true,
      message: 'Nhập lại mật khẩu không được để trống'
    },
    minLength: {
      value: 6,
      message: 'Độ dài nhỏ nhất 6 ký tự'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài lớn nhất 160 ký tự'
    },
    validate:
      typeof getValues === 'function' ? (value) => value === getValues('password') || 'Mật khẩu không khớp' : undefined
  }
})
export default rules
