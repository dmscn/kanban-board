import React, { useReducer } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Box from './components/Box'
import Board from './containers/Board'
import { boardReducer } from './ducks'
import { BoardContext } from './ducks/board'

const cards = [
  { text: 'Todo 1', id: '1' },
  { text: 'Todo 2', id: '2' },
  { text: 'Todo 3', id: '3' },
  { text: 'Todo 4', id: '4' },
  { text: 'Todo 5', id: '5' },
]

const initialState = {
  todo: [...cards],
  doing: [...cards],
  done: [...cards],
}

const App: React.FC = () => {
  const [state, dispatch] = useReducer(boardReducer, initialState)

  return (
    <Box full center>
      <DndProvider backend={HTML5Backend}>
        <BoardContext.Provider value={{ state, dispatch }}>
          <Board />
        </BoardContext.Provider>
      </DndProvider>
    </Box>
  )
}

export default App
