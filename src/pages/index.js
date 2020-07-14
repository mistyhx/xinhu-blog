import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/Introduction"
import Articles from "../components/Articles"
import SideBar from "../components/SideBar"

const IndexPage = () => (
  <Layout>
    <SEO title="xinhudesign" />
    <SideBar>
      <Introduction />
    </SideBar>
    <Articles />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
