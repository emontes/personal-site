import React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import HomeBanner from "../components/Home/HomeBanner"
import Recursos from '../components/Home/RecursosRecientes'
import Desarrollos from '../components/Home/DesarrollosRecientes'
import { graphql } from "gatsby"
import Image from "gatsby-image"

const IndexPage = ( {data} ) => (
  <Layout>
    <Seo title="Desarrollador Front End"/>
    <HomeBanner></HomeBanner>
    <Recursos />
    <Desarrollos />
    <Image fluid={data.page.medios[0].archivo.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

export const query = graphql`
{
  page: strapiPagina(slug: {eq: "/"}) {
    titulo
    medios {
      titulo
      archivo {
        childImageSharp {
          fluid (quality: 90, maxWidth: 1366){
            src
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`