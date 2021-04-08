import React from "react"
import styled, { keyframes } from "styled-components"

function SlideInText({ children }) {
  return (
    <div>
      <RevealedText>
        <span>
          <span>{children}</span>
        </span>
      </RevealedText>
    </div>
  )
}

export default SlideInText

const revealAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }

`

const RevealedText = styled.h2`
  
    span {
      display: block;
    } > span {
      overflow: hidden;
      transition-duration: 1s;
      transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
      &:nth-child(2) {
        transition-delay: .05s;
      }
      &:nth-child(3) {
        transition-delay: .1s;
      }
      > span {
        position: relative;
        ${"" /* transform: translateY(100%); */}
        transition: inherit;
        animation: ${revealAnimation};
        animation-duration: 0.9s;
        animation-timing-function: ease;
      }

`
