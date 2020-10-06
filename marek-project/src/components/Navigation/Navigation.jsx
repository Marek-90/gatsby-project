import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWraper = styled.ul`
  padding: 0;
  list-style: none;
  font-family: "Montserrat";
  color: white;
  font-weight: 700;
  display: flex;
`

const NavigationItem = styled.li`
  margin-right: 2vw;
  position: relative;

  ::after {
    position: absolute;
    top: 0;
    right: -8px;
    content: " ";
    display: block;
    height: 100%;
    width: 2px;
    background: white;
  }

  :last-child::after {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Navigation = () => (
  <NavigationWraper>
    <NavigationItem>
      <StyledLink to={"/terenowki/"}>Terenówki</StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={"/akcesoria/"}>Akcesoria</StyledLink>
    </NavigationItem>
    <NavigationItem>
      <StyledLink to={"/imprezy/"}>Imprezy</StyledLink>
    </NavigationItem>
  </NavigationWraper>
)

export default Navigation
