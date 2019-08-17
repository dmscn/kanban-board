import React, { useState, useContext } from 'react'
import { useDrop, DropTargetMonitor } from 'react-dnd'
import DraggableCard from '../DraggableCard'
import { BoardContext, boardActions } from '../../ducks/board'

export interface BoardColumnProps {
  title: string
  cards: any[]
}

type CardType = {
  type: string
  column: string
  position: number
  element: any
}

const BoardColumn: React.FC<BoardColumnProps> = (props: BoardColumnProps) => {
  const { dispatch } = useContext(BoardContext)
  const [, drag] = useDrop({
    accept: 'Card',
    drop: (card: CardType) => {
      if (card.column !== props.title) {
        dispatch(
          boardActions.moveTask(
            card,
            card.column.toLowerCase(),
            props.title.toLowerCase()
          )
        )
      }
    },
  })

  return (
    <div ref={drag}>
      <span>{props.title}</span>
      {props.cards &&
        props.cards.map((card: any, index: number) => (
          <DraggableCard
            key={`${props.title}${card.id}${Math.random()}`}
            column={props.title}
            position={index}
            card={card}
          >
            {card.text}
          </DraggableCard>
        ))}
    </div>
  )
}

export default BoardColumn
