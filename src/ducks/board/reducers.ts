import * as types from './types'

const addTask = (state: any, { task, column }: any) => {
  return { ...state, [column]: [task.element, ...state[column]] }
}

const deleteTask = (state: any, { task, column }: any) => {
  const arr = state[column].filter((e: any) => e.id != task.element.id)
  return { ...state, [column]: arr }
}

const moveTask = (state: any, { task, from, to }: any) => {
  const removed = deleteTask(state, { task, column: from })[from]
  const added = addTask(state, { task, column: to })[to]
  return { ...state, [from]: removed, [to]: added }
}

export default (state: any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case types.ADD_TASK:
      return addTask(state, action.payload)

    case types.DELETE_TASK:
      return deleteTask(state, action.payload)

    case types.MOVE_TASK:
      return moveTask(state, action.payload)

    default:
      return state
  }
}
