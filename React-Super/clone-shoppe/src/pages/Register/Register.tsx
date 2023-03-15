import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { TypeFormDataRegister, rulesYup } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from 'src/components/Input'
import { useMutation } from 'react-query'
import { registerApi } from 'src/apis/auth.api'
import { omit } from 'lodash'

// interface FormType {
//   email: string
//   password: string
//   confirm_password: string
// }
type FormType = TypeFormDataRegister
export default function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormType>({
    resolver: yupResolver(rulesYup)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<TypeFormDataRegister, 'confirm_password'>) => registerApi(body)
  })
  const onsubmit = handleSubmit((value) => {
    const body = omit(value, ['confirm_password'])
    console.log(body)
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data)
      }
    })
  })
  // const rule = rules(getValues)
  // watch('password') lắng nghe onchange input làm render lại component => mặc định dùng react hook form k render khi nhập input
  return (
    <div>
      <div className='bg-ordens'>
        <div className='container_customer'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded-sm bg-white p-10' onSubmit={onsubmit} noValidate>
                <div className='text-2xl'>Đăng ký</div>
                <Input
                  name='email'
                  register={register}
                  autoComplete='on'
                  className='mt-8'
                  errorMessage={errors.email?.message}
                  type='email'
                  placeholder='Email'
                />
                <Input
                  name='password'
                  register={register}
                  autoComplete='on'
                  className='mt-2'
                  errorMessage={errors.password?.message}
                  type='password'
                  placeholder='Mật khẩu'
                />

                <Input
                  name='confirm_password'
                  register={register}
                  autoComplete='on'
                  className='mt-2'
                  errorMessage={errors.confirm_password?.message}
                  type='password'
                  placeholder='Nhập lại mật khẩu'
                />

                <button
                  type='submit'
                  className='btn btn-blue mt-2 w-full bg-ordens p-3 text-center text-sm text-white hover:bg-orange-600'
                >
                  Đăng ký
                </button>
                <div className='mt-8 text-sm'>
                  <div className='flex justify-center'>
                    <div className='text-slate-400'>Bạn đã có tài khoản?</div>
                    <Link to='/login' className='ml-1 text-ordens'>
                      Đăng nhập
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
