import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import rules from 'src/utils/rules'

interface FormType {
  email: string
  password: string
  confirm_password: string
}
export default function Register() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors }
  } = useForm<FormType>()
  const onsubmit = handleSubmit((value) => {
    console.log(value)
  })
  const rule = rules(getValues)
  // watch('password') lắng nghe onchange input làm render lại component => mặc định dùng react hook form k render khi nhập input
  return (
    <div>
      <div className='bg-ordens'>
        <div className='m-auto max-w-7xl p-4'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded-sm bg-white p-10' onSubmit={onsubmit} noValidate>
                <div className='text-2xl'>Đăng ký</div>
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
                <div className='mt-2'>
                  <input
                    type='password'
                    autoComplete='on'
                    {...register('confirm_password', rule.password_confirm)}
                    placeholder='Nhập lại mật khẩu'
                    className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
                  />
                  <div className='mt-1 min-h-[1.25rem] text-red-500'>{errors.confirm_password?.message}</div>
                </div>
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
