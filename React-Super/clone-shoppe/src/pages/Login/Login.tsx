import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import { TypeFormDatalogin, loginValidate } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Login() {
  // interface FormType {
  //   email: string
  //   password: string
  // }
  type FormType = TypeFormDatalogin
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>({
    resolver: yupResolver(loginValidate)
  })
  // const rule = rules()
  const onsubmitLogin = handleSubmit((value) => {
    console.log(value)
  })
  return (
    <div>
      <div className='bg-ordens'>
        <div className='container_customer'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded-sm bg-white p-10' onSubmit={onsubmitLogin} noValidate>
                <div className='text-2xl'>Đăng nhập</div>
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
                <button className='btn btn-blue mt-2 w-full bg-ordens p-3 text-center text-sm text-white hover:bg-orange-600'>
                  Đăng nhập
                </button>
                <div className='mt-8 text-sm'>
                  <div className='flex justify-center'>
                    <div className='text-slate-400'>Bạn đã có tài khoản?</div>
                    <Link to='/register' className='ml-1 text-ordens'>
                      Đăng ký
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
