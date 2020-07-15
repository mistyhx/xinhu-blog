import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Introduction from "../components/Introduction"
import Articles from "../components/Articles"
import SideBar from "../components/SideBar"

const IndexPage = () => (
  <Layout>
    <SEO title="Xin Hu Design" />
    <SideBar>
      <Introduction />
    </SideBar>
    <Articles />
  </Layout>
)

export default IndexPage
