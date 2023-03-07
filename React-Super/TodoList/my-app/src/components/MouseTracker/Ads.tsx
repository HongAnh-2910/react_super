import img from '../../images/123456.png'
// import { mouseTrackerHoc } from './MouseTracker'
interface Props {
  x: null | number
  y: null | number
}

export default function Ads({ x, y }: Props) {
  console.log('123')
  return (
    <div className='postion'>
      <img style={{ width: '500px', height: '400px' }} src={img} alt='img' />
      <ul className='postion_in'>
        <li>{x}</li>
        <li>{y}</li>
      </ul>
    </div>
  )
}

// export default mouseTrackerHoc(Ads)
