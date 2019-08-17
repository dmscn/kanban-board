import React from 'react'
import styled, { StyledComponentProps } from 'styled-components'

export type LoadingIconProps = StyledComponentProps<'i', any, {}, never>

const StyledLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`

const BlockBase = styled.div`
  display: inline-block;
  position: absolute;
  left: 6px;
  width: 13px;
  background-color: dimgray;
  animation: loadingAnimation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  @keyframes loadingAnimation {
    0% {
      top: 6px;
      height: 51px;
    }
    50%,
    100% {
      top: 19px;
      height: 26px;
    }
  }
`

const Block1 = styled(BlockBase)`
  left: 6px;
  animation-delay: -0.24s;
`

const Block2 = styled(BlockBase)`
  left: 26px;
  animation-delay: -0.12s;
`

const Block3 = styled(BlockBase)`
  left: 45px;
  animation-delay: 0;
`

const LoadingIcon: React.FC = () => (
  <StyledLoading>
    <Block1 /> <Block2 /> <Block3 />
  </StyledLoading>
)

export default LoadingIcon
