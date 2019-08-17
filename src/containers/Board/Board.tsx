import React, { useContext, useRef, FormEvent } from 'react'

import { BoardContext, boardActions } from '../../ducks/board'
import Task from '../../models/Task'

import Box from '../../components/Box'
import BoardColumn from '../BoardColumn'
import TextInput from '../../components/TextInput'

const Board: React.FC = () => {
  const { state, dispatch } = useContext(BoardContext)
  const inputRef = useRef(null)

  const createTask = (event: FormEvent) => {
    event.preventDefault()
    // @ts-ignore
    const task = new Task(inputRef.current.value)
    // @ts-ignore
    inputRef.current.value = ''
    dispatch(boardActions.addTask(task, task.column))
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
          <BoardColumn title="Todo" cards={state.todo} />
        </Box>
        <Box column margin={10}>
          <BoardColumn title="Doing" cards={state.doing} />
        </Box>
        <Box column margin={10}>
          <BoardColumn title="Done" cards={state.done} />
        </Box>
      </Box>
    </Box>
  )
}

export default Board
