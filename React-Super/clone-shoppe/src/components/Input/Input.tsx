import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  className?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  register: UseFormRegister<any>
  name: string
  rule: RegisterOptions
  errorMessage?: string
  autoComplete?: string
}
export default function Input({
  className,
  type,
  placeholder,
  register,
  rule,
  errorMessage,
  autoComplete,
  name
}: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name, rule)}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500'
      />
      <div className='mt-1 min-h-[1.25rem] text-red-500'>{errorMessage}</div>
    </div>
  )
}
