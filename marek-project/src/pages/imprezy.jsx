import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import backgrodImages from "../images/expedition.jpg"

const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgrodImages});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderEvents = styled.h1`
  display: block;
`

const Events = () => (
  <>
    <GlobalStyle />

    <Link to={"/"}>Powrót do strony głównej</Link>

    <StyledWrapper>
      <HeaderEvents>Informacje o imprezach</HeaderEvents>
    </StyledWrapper>
  </>
)

export default Events
