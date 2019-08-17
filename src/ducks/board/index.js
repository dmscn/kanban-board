import React from 'react'
import reducer from './reducers'
import * as boardActions from './actions'

export const BoardContext = React.createContext()

export { boardActions }

export default reducer
