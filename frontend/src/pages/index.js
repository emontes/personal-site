import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Recursos from '../components/Home/RecursosRecientes'
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Recursos />
  </Layout>
)

export default IndexPage
