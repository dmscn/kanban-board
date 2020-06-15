import React, { useState, ReactElement } from 'react'
import Card, { cardColors } from '../../components/Card'
import { useDrag } from 'react-dnd'

export interface DraggableCardProps {
  children: React.ReactNode
  position: number
  column: any
  card: any
  onRemove: (task: any) => void
}

const DraggableCard: React.FunctionComponent<DraggableCardProps> = (
  props: DraggableCardProps
): ReactElement => {
  const { children, card, onRemove } = props
  const [isDisabled, setIsDisabled] = useState(false)
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: 'Card',
      column: props.column,
      position: props.position,
      element: props.card,
    },
    collect: (monitor: any): any => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const idNumbers = (card.id && card.id.match(/\d+/g)) || []
  const color = cardColors[+idNumbers.join().slice(-1) || 0]

  const handleDeleteButtonClick = (): void => {
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
