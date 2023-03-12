interface Props {
  linkImg: string
  alt?: string
  className?: string
}
export default function ImagePay({ linkImg, alt, className }: Props) {
  return (
    <>
      <img className={className} src={linkImg} alt={alt} />
    </>
  )
}
