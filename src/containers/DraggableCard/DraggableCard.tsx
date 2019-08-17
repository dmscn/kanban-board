import React, { useRef } from 'react'
import Card from '../../components/Card'
import { useDrag } from 'react-dnd'

export interface DraggableCardProps {
  children: React.ReactNode
  position: number
  column: any
  card: any
}

const DraggableCard: React.FC<DraggableCardProps> = (
  props: DraggableCardProps
) => {
  const { children } = props
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

  return (
    <Card ref={drag} dragging={isDragging}>
      {children}
    </Card>
  )
}

export default DraggableCard
