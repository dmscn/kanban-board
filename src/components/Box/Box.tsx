import React from 'react'
import styled from 'styled-components'

export interface BoxProps {
  ref?: any
  full?: boolean
  width?: string | number
  height?: string | number
  column?: boolean
  center?: boolean
  justify?: string
  align?: string
  margin?: string | number
  marginVertical?: string | number
  marginHorizontal?: string | number
  padding?: string | number
  paddingVertical?: string | number
  paddingHorizontal?: string | number
  bg?: string
  border?: string
  borderRadius?: string | number
}

const Box: React.FC<BoxProps> = styled.div<BoxProps>`
  box-sizing: border-box;
  width: ${props =>
    (props.width && `${props.width}px`) || (props.full && '100%')};
  height: ${props =>
    (props.height && `${props.height}px`) || (props.full && '100%')};
  display: flex;
  flex: ${props => props.full && 1};
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.justify || (props.center && 'center')};
  align-items: ${props => props.align || (props.center && 'center')};
  margin-top: ${props => props.margin || props.marginVertical}px;
  margin-bottom: ${props => props.margin || props.marginVertical}px;
  margin-left: ${props => props.margin || props.marginHorizontal}px;
  margin-right: ${props => props.margin || props.marginHorizontal}px;
  padding-top: ${props => props.padding || props.paddingVertical}px;
  padding-bottom: ${props => props.padding || props.paddingVertical}px;
  padding-left: ${props => props.padding || props.paddingHorizontal}px;
  padding-right: ${props => props.padding || props.paddingHorizontal}px;
  background-color: ${props => props.bg};
  border: ${props => props.border && `1px solid ${props.border}`};
  border-radius: ${props => props.borderRadius}px;
`

export default Box
