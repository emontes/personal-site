import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Recursos from '../components/Home/RecursosRecientes'
import Desarrollos from '../components/Home/DesarrollosRecientes'
const IndexPage = () => (
  <Layout>
    <HomeBanner></HomeBanner>
    <Recursos />
    <Desarrollos />
  </Layout>
)

export default IndexPage
