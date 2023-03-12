import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import rules from 'src/utils/rules'

export default function Login() {
  interface FormType {
    email: string
    password: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormType>()
  const rule = rules()
  const onsubmit = handleSubmit((value) => {
    console.log(value)
  })
  return (
    <div>
      <div className='bg-ordens'>
        <div className='m-auto max-w-7xl p-3'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded-sm bg-white p-10' onSubmit={onsubmit} noValidate>
                <div className='text-2xl'>Đăng nhập</div>
                <div className='mt-8'>
                  <input
                    type='email'
                    placeholder='Email'
                    {...register('email', rule.email)}
                    className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  />
                  <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.email?.message}</div>
                </div>
                <div className='mt-2'>
                  <input
                    type='password'
                    placeholder='Mật khẩu'
                    autoComplete='on'
                    {...register('password', rule.password)}
                    className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  />
                  <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.password?.message}</div>
                </div>
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
