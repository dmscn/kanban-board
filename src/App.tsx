import React, { useReducer, useEffect, useState, ReactElement } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Box from './components/Box'
import Board from './containers/Board'

import { boardReducer } from './ducks'
import { BoardContext, boardActions } from './ducks/board'
import { apiService } from './services'
import Loading from './containers/Loading'

const initialState = {
  todo: [],
  doing: [],
  done: [],
}

const App: React.FunctionComponent = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useReducer(boardReducer, initialState)

  useEffect((): void => {
    const fetchTasks = async (): Promise<void> => {
      const tasks = await apiService.getTasks()
      tasks.forEach(
        (task: { id: string; column: string; text: string }): void => {
          dispatch(boardActions.addTask(task))
        }
      )
      setIsLoading(false)
    }

    fetchTasks()
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
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
