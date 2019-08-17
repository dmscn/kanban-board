import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { BoardContext, boardActions } from '../../ducks/board'
import DraggableCard from '../DraggableCard'
import Box from '../../components/Box'
import Task from '../../models/Task'

export interface BoardColumnProps {
  title: string
  cards: any[]
}

const BoardColumn: React.FC<BoardColumnProps> = (props: BoardColumnProps) => {
  const { dispatch } = useContext(BoardContext)
  const [, drag] = useDrop({
    accept: 'Card',
    drop: (card: Task) => {
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
            key={`${props.title}${card.id}${Math.random()}`}
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
