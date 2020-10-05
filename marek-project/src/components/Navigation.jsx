import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

const NavigationWraper = styled.ul`
  padding: 0;
  list-style: none;
  font-family: "Montserrat";
  color: white;
  font-weight: 700;
  display: flex;
`

const Navigation = () => (
  <NavigationWraper>
    <li>Terenówki</li>
    <li>Akcesoria</li>
    <li>Imprezy</li>
  </NavigationWraper>
)

export default Navigation
