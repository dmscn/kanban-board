import React, { useContext } from 'react'
import { useDrop } from 'react-dnd'

import { BoardContext, boardActions } from '../../ducks/board'
import DraggableCard from '../DraggableCard'
import Box from '../../components/Box'
import { apiService } from '../../services'

export interface BoardColumnProps {
  title: string
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
  const { state, dispatch } = useContext(BoardContext)
  const cards: any = state[props.title.toLowerCase()]
  const [, drag] = useDrop({
    accept: 'Card',
    drop: async (card: any) => {
      if (card.column !== props.title) {
        const updatedTask = await apiService.updateTaskColumn(
          card.element,
          props.title.toLowerCase()
        )
        const action = boardActions.moveTask({
          task: updatedTask,
          from: card.column.toLowerCase(),
          to: props.title.toLowerCase(),
        })
        dispatch(action)
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
      {cards &&
        cards.map((card: any, index: number) => (
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
