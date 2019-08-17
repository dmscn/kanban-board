import Card from '../models/Card'

export const BASE_URL = 'https://us-central1-generic-db2c3.cloudfunctions.net'

export const getTasks = async () => {
  console.info(`Fetching tasks from server...`)
  try {
    const response = await fetch(`${BASE_URL}/getTasks`)
    console.info(`Response from server: `, response)
    return await response.json()
  } catch (err) {
    throw new Error(err.message)
  }
}

export const createTask = async (task: { text: string; column: string }) => {
  console.info(`Creating new task on the server...`)
  try {
    const response = await fetch(`${BASE_URL}/addTask`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    })
    console.info(`Response from server:`, response)
    return await response.json()
  } catch (err) {
    throw new Error(err.message)
  }
}

export const updateTaskColumn = async (card: Card, to: string) => {
  console.info(`Updating task column on server...`)

  const task = {
    ...card.element,
    column: to.toLocaleLowerCase(),
  }

  try {
    const response = await fetch(`${BASE_URL}/updateTask`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    })
    console.info(`Response from server:`, response)
    return await response.json()
  } catch (err) {
    throw new Error(err.message)
  }
}
