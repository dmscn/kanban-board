import React from 'react'

import Box from '../../components/Box'
import Card from '../../components/Card'

const cards = [1, 2, 3, 4, 5]

const Board: React.FC = () => (
  <>
    <Box column margin={10}>
      {cards.map((card: number) => (
        <Box marginVertical={5}>
          <Card>Card {card}</Card>
        </Box>
      ))}
    </Box>
    <Box column margin={10}>
      {cards.map((card: number) => (
        <Box marginVertical={5}>
          <Card>Card {card}</Card>
        </Box>
      ))}
    </Box>
    <Box column margin={10}>
      {cards.map((card: number) => (
        <Box marginVertical={5}>
          <Card>Card {card}</Card>
        </Box>
      ))}
    </Box>
  </>
)

export default Board
