import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import rules from 'src/utils/rules'
import Input from 'src/components/Input'

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
        <div className='container_customer'>
          <div className='grid grid-cols-1 lg:grid-cols-5'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='rounded-sm bg-white p-10' onSubmit={onsubmit} noValidate>
                <div className='text-2xl'>Đăng ký</div>
                <Input
                  name='email'
                  register={register}
                  rule={rule.email}
                  autoComplete='on'
                  className='mt-8'
                  errorMessage={errors.email?.message}
                  type='email'
                  placeholder='Email'
                />
                <Input
                  name='password'
                  register={register}
                  rule={rule.password}
                  autoComplete='on'
                  className='mt-2'
                  errorMessage={errors.password?.message}
                  type='password'
                  placeholder='Mật khẩu'
                />

                <Input
                  name='confirm_password'
                  register={register}
                  rule={rule.password_confirm}
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
