import React from 'react'
import styled from 'styled-components'

export const cardColors = [
  '#e0e0e0',
  '#fdd835',
  '#f44336',
  '#8bc34a',
  '#2196f3',
  '#9c27b0',
  '#f06292',
  '#ffa726',
  '#a1887f',
  '#90a4ae',
]

export interface CardProps {
  ref?: any
  color?: string
  dragging?: boolean
  disabled?: boolean
}

const Card: React.FC<CardProps> = styled.div<CardProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  background: ${props => props.color};
  opacity: ${props => (props.dragging || props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'grab')};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:active {
    cursor: grabbing;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }
`

export default Card
