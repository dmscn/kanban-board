import React, { useReducer, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Box from './components/Box'
import Board from './containers/Board'

import { boardReducer } from './ducks'
import { BoardContext, boardActions } from './ducks/board'
import { apiService } from './services'
import Loading from './containers/Loading'
import Task from './models/Card'

const initialState = {
  todo: [],
  doing: [],
  done: [],
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [state, dispatch] = useReducer(boardReducer, initialState)

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await apiService.getTasks()
      tasks.forEach((task: { id: string; column: string; text: string }) => {
        dispatch(
          boardActions.addTask(new Task(task.text, task.id), task.column)
        )
      })
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
