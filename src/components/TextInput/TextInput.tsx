import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export interface TextInputProps
  extends StyledComponentProps<'input', any, {}, never> {}

const TextInput: React.FC<TextInputProps> = styled.input`
  box-sizing: border-box;
  outline: none;
  background-color: whitesmoke;
  padding: 10px;
  width: 250px;
  border: 1px solid transparent;
  border-radius: 3px;

  &:hover,
  &:active,
  &:focus {
    border-color: gainsboro;
  }
`

export default TextInput
