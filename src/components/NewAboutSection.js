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
          Web Design & Developer based near Cardiff, South Wales UK. I run a
          small web design business under the name KeelsDesign, where I work
          with local businesses across Wales to help grow their online presence.
        </p>
        <br></br>
        <p>
          In my spare time, I like to create 3D art, practice my coding skills,
          drink lots of coffee and getting lost in a good movie. I also enjoying
          going to the gym and creating educational content on my{" "}
          <a href="https://www.youtube.com/channel/UCsx6kQZt0y3Ie5ob_cwQ5cQ">
            YouTube channel
          </a>
        </p>

        <a href="#projects">Discover my Work</a>
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
