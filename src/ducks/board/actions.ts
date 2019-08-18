import * as types from './types'

export const addTask = (task: any) => ({
  type: types.ADD_TASK,
  payload: { task },
})

export const removeTask = (task: any) => ({
  type: types.DELETE_TASK,
  payload: { task, column: task.column },
})

export const moveTask = (payload: { task: any; from: any; to: any }) => ({
  type: types.MOVE_TASK,
  payload,
})
