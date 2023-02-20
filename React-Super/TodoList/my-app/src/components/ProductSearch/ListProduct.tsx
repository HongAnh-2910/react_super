import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import ModalConfirm from './ModalConfirm'
import { createPortal } from 'react-dom'

const listProduct = [
  {
    id: 1,
    name: 'Sản phẩm 1',
    content: 'Chi tiết sản phẩm 1'
  },
  {
    id: 2,
    name: 'Sản phẩm 2',
    content: 'Chi tiết sản phẩm 1'
  },
  {
    id: 3,
    name: 'Sản phẩm 3',
    content: 'Chi tiết sản phẩm 1'
  },
  {
    id: 4,
    name: 'Sản phẩm 4',
    content: 'Chi tiết sản phẩm 1'
  }
]

interface TypeProduct {
  id: number
  name: string
  content: string
}

export default function ListProduct() {
  const [show, setShow] = useState<number | boolean>(false)
  const [product, setProduct] = useState<TypeProduct | undefined>(undefined)
  const [products, setPoducts] = useState<TypeProduct[]>([])
  const handleShowModal = (id: number) => {
    setShow(id)
    let product = products.find((x) => x.id === id)
    setProduct(product)
  }
  const hideModal = () => {
    setShow(false)
  }

  const handleDelete = () => {
    setPoducts((prev) => {
      return prev.filter((x) => x.id !== show)
    })
    hideModal()
  }
  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(listProduct)
      }, 1000)
    }).then((res: any) => {
      setPoducts(res)
    })
  }, [])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Nội dung sản phẩm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item?.name}</td>
              <td>{item?.content}</td>
              <td>
                <div className='div'>
                  <button className='btn btn-danger' onClick={() => handleShowModal(item.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {createPortal(
        <ModalConfirm show={show} hideModal={hideModal} product={product} handleDelete={handleDelete} />,
        document.getElementById('root') as HTMLElement
      )}
    </div>
  )
}
