import React from "react"
import styled, { keyframes } from "styled-components"

function BackgroundCircle(props) {
  return (
    <Circle
      primary={true}
      top={props.top}
      left={props.left}
      right={props.right}
      width={props.width}
      height={props.height}
    ></Circle>
  )
}

export default BackgroundCircle

const Circle = styled.div`
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};

  overflow: hidden;
  z-index: 0;

  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};

  background: #131419;
  filter: invert(${props => (props.primary ? "0" : "1")});
  filter: drop-shadow(0 0 2.5rem rgba(0, 0, 0, 0.3));
  transition: 4s ease 0s;

  animation: CirclePulse 6s infinite;

  @keyframes CirclePulse {
    0% {
      width: 50vw;
      height: 50vw;
    }
    50% {
      width: 60vw;
      height: 60vw;
    }
    100% {
      width: 50vw;
      height: 50vw;
    }
  }

  @media screen and (min-width: 1920px) {
    @keyframes CirclePulse {
      0% {
        width: 20vw;
        height: 20vw;
      }
      50% {
        width: 25vw;
        height: 25vw;
      }
      100% {
        width: 20vw;
        height: 20vw;
      }
    }
  }

  @media screen and (max-width: 764px) {
  }

  &:hover {
    background: #4d13ef;
  }
`
