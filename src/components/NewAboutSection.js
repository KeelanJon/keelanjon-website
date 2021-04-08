import React from "react"
import styled from "styled-components"

function About() {
  return (
    <Container id="AboutMe">
      <div>
        <h2>
          Designer, Developer and 3D Illustrator. Bringing your Digital World to
          Life
        </h2>
      </div>

      <div>
        <p>
          Fifth had Grass called rule light. Can’t under can’t. Cattle waters
          signs, dry creepeth winged all lights can’t, under to whales replenish
          whales replenish likeness above don’t land signs day wherein don’t
          yielding us over.
        </p>
        <br></br>
        <p>
          To wherein open man fish saw. Forth beginning a subdue whales. Male.
          Saying blessed whose, meat saw. Divided in lesser creeping open bring
          of made to. For, under sixth.
        </p>

        <a href="#MyWork">Discover my Work</a>
      </div>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;

  text-align: left;
  padding: 10% 0%;
  background: #0e0e16;
  color: #f5f5f5;

  line-height: 1.8;

  div {
    flex: 1;
    padding: 1rem;

    display: flex;
    flex-direction: column;
  }

  div:nth-of-type(2) {
    a {
      text-decoration: none;
      font-weight: 700;
      color: #f5f5f5;
      transition: 0.3s ease 0s;
      padding: 1rem 0;

      &:hover {
        padding-left: 1rem;
      }
    }
  }

  h2 {
    font-weight: 500;
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
    padding: 0;
    padding-top: 1rem;
  }

  p:nth-of-type(2) {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: 798px) {
    flex-direction: column;
  }
`
