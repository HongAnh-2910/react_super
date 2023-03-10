import { Link } from 'react-router-dom'
import ImagePay from '../ImagePay/ImagePay'

const paymentArray = [
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16',
    alt: 'anh 1'
  }
]

const paymentExpress = [
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16',
    alt: 'anh 1'
  },
  {
    link_img: 'https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06',
    alt: 'anh 1'
  }
]

export default function Footer() {
  return (
    <footer className='container-lg mx-auto bg-f5f5f5'>
      <div className='box_footer px-10'>
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5'>
          <div className='py-10'>
            <div className='text-xs font-semibold'>CH??M S??C KH??CH H??NG</div>
            <ul className='py-4 text-xs text-rbg_1'>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
            </ul>
          </div>
          <div className='py-10'>
            <div className='text-xs font-semibold uppercase'>V??? Shopee</div>
            <ul className='py-4 text-xs text-rbg_1'>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
              <li className='pb-3 hover:text-ordens'>
                <Link to='#'>Trung T??m Tr??? Gi??p</Link>
              </li>
            </ul>
          </div>
          <div className='py-10'>
            <div className='text-xs font-semibold uppercase'>Thanh to??n</div>
            <div className='grid grid-cols-3 gap-3 py-4'>
              {paymentArray.map((item, key) => (
                <div key={key} className='img_pay bg-white p-1 shadow-2xl'>
                  <ImagePay className='w-12' linkImg={item.link_img} alt={item.alt} />
                </div>
              ))}
            </div>
            <div className='text-xs font-semibold uppercase'>????n v??? v???n chuy???n</div>
            <div className='grid grid-cols-3 gap-3 py-4'>
              {paymentExpress.map((item, key) => (
                <div key={key} className='img_pay bg-white p-1 shadow-2xl'>
                  <ImagePay className='w-12' linkImg={item.link_img} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
          <div className='py-10 text-center'>
            <div className='text-xs font-semibold uppercase'>THEO D??I CH??NG T??I TR??N</div>
            <ul className='py-4 text-xs text-rbg_1'>
              <li className='flex items-center justify-center pb-3 hover:text-ordens'>
                <div className='img_icon pr-1'>
                  <ImagePay className='' linkImg='https://cf.shopee.vn/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
                </div>
                <Link to='#'>Facebook</Link>
              </li>
              <li className='flex items-center justify-center pb-3 hover:text-ordens'>
                <div className='img_icon pr-1'>
                  <ImagePay className='' linkImg='https://cf.shopee.vn/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
                </div>
                <Link to='#'>Facebook</Link>
              </li>
              <li className='flex items-center justify-center pb-3 hover:text-ordens'>
                <div className='img_icon pr-1'>
                  <ImagePay className='' linkImg='https://cf.shopee.vn/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
                </div>
                <Link to='#'>Facebook</Link>
              </li>
            </ul>
          </div>
          <div className='py-10'>
            <div className=' text-xs font-semibold uppercase'>T???I ???NG D???NG SHOPEE NGAY TH??I</div>
            <div className='grid grid-cols-2 gap-2 py-4'>
              <div className='qr'>
                <ImagePay className='' linkImg='https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472' alt='' />
              </div>
              <div className='qr'>
                <ImagePay className='' linkImg='https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
