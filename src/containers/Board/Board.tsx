import React, { useContext, useRef, FormEvent } from 'react'

import { BoardContext, boardActions } from '../../ducks/board'

import Box from '../../components/Box'
import BoardColumn from '../BoardColumn'
import TextInput from '../../components/TextInput'
import { apiService } from '../../services'

const Board: React.FC = () => {
  const { state, dispatch } = useContext(BoardContext)
  const inputRef = useRef(null)

  const createTask = async (event: FormEvent) => {
    event.preventDefault()
    const createdTask = await apiService.createTask({
      // @ts-ignore
      text: inputRef.current.value,
      column: 'todo',
    })
    // @ts-ignore
    inputRef.current.value = ''
    createdTask && dispatch(boardActions.addTask(createdTask))
  }

  return (
    <Box column>
      <Box justify="flex-end" padding={10}>
        <form onSubmit={createTask}>
          <TextInput ref={inputRef} placeholder="Nova task..." />
        </form>
      </Box>
      <Box>
        <Box column margin={10}>
          <BoardColumn title="Todo" />
        </Box>
        <Box column margin={10}>
          <BoardColumn title="Doing" />
        </Box>
        <Box column margin={10}>
          <BoardColumn title="Done" />
        </Box>
      </Box>
    </Box>
  )
}

export default Board
