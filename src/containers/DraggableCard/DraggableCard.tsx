import React, { useRef, useState } from 'react'
import Card, { cardColors } from '../../components/Card'
import { useDrag } from 'react-dnd'
import { apiService } from '../../services'
import LoadingIcon from '../../components/LoadingIcon'

export interface DraggableCardProps {
  children: React.ReactNode
  position: number
  column: any
  card: any
  onRemove: (task: any) => void
}

const DraggableCard: React.FC<DraggableCardProps> = (
  props: DraggableCardProps
) => {
  const { children, card, onRemove } = props
  const [isDisabled, setIsDisabled] = useState(false)
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'Card',
      column: props.column,
      position: props.position,
      element: props.card,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const idNumbers = (card.id && card.id.match(/\d+/g)) || []
  const color = cardColors[+idNumbers.join().slice(-1) || 0]

  const handleDeleteButtonClick = () => {
    setIsDisabled(true)
    onRemove(card)
  }

  return (
    <Card ref={drag} dragging={isDragging} color={color} disabled={isDisabled}>
      {children}
      <button onClick={handleDeleteButtonClick}>&times;</button>
    </Card>
  )
}

export default DraggableCard
