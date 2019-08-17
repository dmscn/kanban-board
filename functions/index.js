const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const admin = require('firebase-admin')

admin.initializeApp()
const database = admin.database().ref('/tasks')

const getItemsFromDatabase = res => {
  let tasks = []
  return database.on(
    'value',
    snapshot => {
      snapshot.forEach(task => {
        tasks.push({
          id: task.key,
          ...task.val(),
        })
      })
      res.status(200).json(tasks)
    },
    error => {
      res.status(error.code).json({
        message: `Something went wrong: ${error.message}`,
      })
    }
  )
}

const getSingleItemFromDatabase = (id, res) => {
  return database.on(
    'value',
    snapshot => {
      snapshot.forEach(task => {
        if (task.id === id)
          res.status(200).json({ id: task.key, ...task.val() })
      })
    },
    error => {
      res.status(error.code).json({
        message: `Something went wrong: ${error.message}`,
      })
    }
  )
}

exports.getTasks = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'GET') {
      return res.status(401).json({ message: 'Not allowed' })
    }
    getItemsFromDatabase(res)
  })
})

exports.addTask = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(401).json({ message: 'Not allowed' })
    }
    console.log(req.body)
    const task = req.body.task
    console.log({ task })
    database.push(task)
    getItemsFromDatabase(res)
  })
})

exports.updateTask = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'PATCH') {
      return res.status(401).json({ message: 'Not allowed' })
    }
    console.log(req.body)
    const task = req.body.task
    const ref = database.child(task.id)
    delete task.id
    ref.set(task)
    getSingleItemFromDatabase(task.id, res)
  })
})

exports.deleteTask = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== 'DELETE') {
      return res.status(401).json({ message: 'Not allowed' })
    }
    const id = req.query.id
    database.child(id).remove()
    getItemsFromDatabase(res)
  })
})
