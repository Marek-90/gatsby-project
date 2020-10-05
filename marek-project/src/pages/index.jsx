import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <h1>hello Marek</h1>
    <Link to={"/marek"}>
      <button>Idź do Marka</button>
    </Link>
  </>
)

export default IndexPage
