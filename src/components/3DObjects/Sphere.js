import React from "react"
import SphereImage from "../../images/sphere.png"
import styled, { keyframes } from "styled-components"
import Img from "gatsby-image"

//Sphere component takes a position prop to declare its location
function Sphere(props) {
  return (
    <SphereContainer
      top={props.top}
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      height={props.height}
      width={props.width}
    ></SphereContainer>
  )
}

export default Sphere

const hoverAnimation = keyframes`

  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(5%);
  }
  100%{
    transform: translateY(0%);
  }

`

const SphereContainer = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  width: ${props => props.width};
  height: ${props => props.height};

  animation: ${hoverAnimation} 4s infinite;

  filter: blur(150px);
  opacity: 0.75;
  background: linear-gradient(
    134.29deg,
    rgba(60, 150, 200, 0.5) -10.9%,
    rgba(88, 22, 230, 0.5) 65.48%
  );
  border-radius: 50%;
`
