import * as types from './types'

export const addTask = (task: any) => ({
  type: types.ADD_TASK,
  payload: { task },
})

export const removeTask = (id: any, column: any) => ({
  type: types.DELETE_TASK,
  payload: { id, column },
})

export const moveTask = (task: any, from: any, to: any) => ({
  type: types.MOVE_TASK,
  payload: { task, from, to },
})
