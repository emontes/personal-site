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
    <Seo />
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
          fluid {
            src
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`