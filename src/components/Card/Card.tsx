import React from 'react'
import styled from 'styled-components'

const cardColors = ['#fdd835', '#f44336', '#8bc34a', '#2196f3', '#9c27b0']

export interface CardProps {
  ref?: any
  color?: string
  dragging?: boolean
}

const Card: React.FC<CardProps> = styled.div<CardProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  background: ${props =>
    props.color || cardColors[Math.floor(Math.random() * cardColors.length)]};
  opacity: ${props => (props.dragging ? 0.5 : 1)};
  cursor: grab;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:active {
    cursor: grabbing;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`

export default Card
