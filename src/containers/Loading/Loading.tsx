import React from 'react'
import Box from '../../components/Box'
import LoadingIcon from '../../components/LoadingIcon'

const Loading: React.FC = () => (
  <Box full center column>
    <span>Loading...</span>
    <Box marginVertical={10}>
      <LoadingIcon />
    </Box>
  </Box>
)

export default Loading
