import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export default function ModalConfirm({
  show,
  hideModal,
  product,
  handleDelete
}: {
  show: boolean | number
  hideModal: () => void
  product: { id: number; name: string; content: string } | undefined
  handleDelete: () => void
}) {
  return (
    <Modal show={!!show} onHide={hideModal} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{product?.content}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={hideModal}>
          Close
        </Button>
        <Button variant='primary' onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
