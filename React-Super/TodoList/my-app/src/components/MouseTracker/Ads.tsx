import img from '../../images/123456.png'
interface Props {
  postion: { x: null | number; y: null | number }
}

function Ads({ postion }: Props) {
  return (
    <div className='postion'>
      <img style={{ width: '500px', height: '400px' }} src={img} alt='img' />
      <ul className='postion_in'>
        <li>{postion.x}</li>
        <li>{postion.y}</li>
      </ul>
    </div>
  )
}

export default Ads
