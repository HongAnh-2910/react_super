import React from 'react'
import SiderbarLeft from './SiderbarLeft'

function ProductSearch({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Danh sách sản phẩm</h3>
      <div className='main' style={{ display: 'flex' }}>
        <div className='sidebarLeft' style={{ width: '200px', background: 'red', height: '100vh' }}>
          <SiderbarLeft />
        </div>
        <div className='siderRight' style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </>
  )
}

export default ProductSearch
