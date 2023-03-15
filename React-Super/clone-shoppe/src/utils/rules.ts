/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
type Rules = { [key in 'email' | 'password' | 'password_confirm']: RegisterOptions }
// cách 1 validate react hook form
export const rules = (getValues?: UseFormGetValues<any>): Rules => ({
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

// cách 2 validate bằng thư viện yup
import * as yup from 'yup'
export const rulesYup = yup.object({
  email: yup
    .string()
    .required('Email không được để trống')
    // eslint-disable-next-line no-useless-escape
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Email không đúng định dạng')
    .min(5, 'Độ dài nhỏ nhất 5 ký tự')
    .max(160, 'Độ dài lớn nhất 160 ký tự'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(6, 'Độ dài nhỏ nhất 6 ký tự')
    .max(160, 'Độ dài lớn nhất 160 ký tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại mật khẩu không được để trống')
    .min(6, 'Độ dài nhỏ nhất 6 ký tự')
    .max(160, 'Độ dài lớn nhất 160 ký tự')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp')
})
export const loginValidate = rulesYup.omit(['confirm_password'])
export type TypeFormDatalogin = yup.InferType<typeof loginValidate>

export type TypeFormDataRegister = yup.InferType<typeof rulesYup>
