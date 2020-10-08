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
`

const Events = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <Link to={"/"}>Powrót do strony głównej</Link>
      <h1>Informacje o imprezach</h1>
    </StyledWrapper>
  </>
)

export default Events
