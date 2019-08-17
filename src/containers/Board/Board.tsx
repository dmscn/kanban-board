import React, { useContext } from 'react'

import Box from '../../components/Box'
import BoardColumn from '../BoardColumn'
import { BoardContext } from '../../ducks/board'

const Board: React.FC = () => {
  const { state } = useContext(BoardContext)

  return (
    <Box>
      <Box column margin={10}>
        <BoardColumn title="Todo" cards={state.todo} />
      </Box>
      <Box column margin={10}>
        <BoardColumn title="Doing" cards={state.doing} />
      </Box>
      <Box column margin={10}>
        <BoardColumn title="Done" cards={state.done} />
      </Box>
    </Box>
  )
}

export default Board
