import React from 'react'
import ReactModal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

ReactModal.setAppElement('#root')

export interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => (
  <ReactModal style={customStyles} {...props}>
    {props.children}
  </ReactModal>
)

export default Modal
