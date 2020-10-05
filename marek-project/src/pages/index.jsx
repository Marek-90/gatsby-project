import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"
import Header from "../components/Header"
import SubHeader from "../components/SubHeader"
import Navigation from "../components/Navigation"
import backgrodImages from "../images/jeep.jpg"

const GlobalStyke = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48vh 10vw;
  width: 100%;
  height: 100vh;
  background-image: url(${backgrodImages});
  background-size: cover;
`

const IndexPage = () => (
  <>
    <GlobalStyke />
    <StyledWrapper>
      <Header>OFF-ROAD</Header>
      <SubHeader>4 x 4</SubHeader>
      <Navigation />
    </StyledWrapper>
  </>
)

export default IndexPage
