import React from 'react'
import Modal, { ModalProps } from '../../components/Modal'
import TextInput from '../../components/TextInput'
import Box from '../../components/Box'

export interface CardModalProps extends ModalProps {
  card: any
  onSubmit: (card: any) => void
}

const CardModal: React.FC<CardModalProps> = (props: CardModalProps) => {
  const { card, onSubmit, children, ...rest } = props

  console.log({ rest })

  return (
    <Modal {...rest}>
      {Object.entries(card).map(([key, value]: any[]) => (
        <Box margin={10}>
          <label>{key}</label>
          <TextInput value={value} />
        </Box>
      ))}
    </Modal>
  )
}

export default CardModal
