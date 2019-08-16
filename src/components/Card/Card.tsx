import React from 'react'
import styled from 'styled-components'

const cardColors = ['#fdd835', '#f44336', '#8bc34a', '#2196f3', '#9c27b0']

export interface CardProps {
  color?: string
}

const Card: React.FC<CardProps> = styled.div<CardProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  background: ${props =>
    props.color || cardColors[Math.floor(Math.random() * cardColors.length)]};
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export default Card
