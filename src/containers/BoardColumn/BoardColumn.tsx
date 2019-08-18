import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { BoardContext } from '../../ducks/board'
import DraggableCard from '../DraggableCard'
import Box from '../../components/Box'
import { apiService } from '../../services'

export interface BoardColumnProps {
  title: string
  cards: any[]
}

type Card = {
  type: string
  column: string
  position: string | number
  element: {
    id: string
    text: string
    column: string
  }
}

const BoardColumn: React.FC<BoardColumnProps> = (props: BoardColumnProps) => {
  const { dispatch } = useContext(BoardContext)
  const [, drag] = useDrop({
    accept: 'Card',
    drop: (card: Card) => {
      if (card.column !== props.title) {
        dispatch(card, card.column.toLowerCase(), props.title.toLowerCase())
        apiService.updateTaskColumn(card, props.title).catch(() => {
          dispatch(card, props.title.toLowerCase(), card.column.toLowerCase())
        })
      }
    },
  })

  return (
    <Box
      ref={drag}
      column
      bg="whitesmoke"
      border="gainsboro"
      borderRadius={3}
      padding={20}
      width={300}
    >
      <span>{props.title}</span>
      {props.cards &&
        props.cards.map((card: any, index: number) => (
          <Box
            marginVertical={15}
            key={`${props.title}-${card.id}__${Math.random()}`}
          >
            <DraggableCard column={props.title} position={index} card={card}>
              {card.text}
            </DraggableCard>
          </Box>
        ))}
    </Box>
  )
}

export default BoardColumn
