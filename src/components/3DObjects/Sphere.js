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
    >
      <img src={SphereImage} alt="A purple floaty orb, it's cool trust me" />
    </SphereContainer>
  )
}

export default Sphere

const hoverAnimation = keyframes`

  0%{
    transform: translateY(0%);
  }
  50%{
    transform: translateY(10%);
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

  animation: ${hoverAnimation} 4s infinite;

  img {
    height: ${props => props.height};
  }
`
