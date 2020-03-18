import React from "react"
import Layout from "../components/layout"
import Recursos from "../components/Recursos/Recursos"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const recursos = ( {data} ) => {
  return (
    <Layout>
        <Recursos />
        <Image fluid={data.page.medios[0].archivo.childImageSharp.fluid} />
    </Layout>
  )
}

export default recursos

export const query = graphql`
{
  page: strapiPagina(slug: {eq: "recursos"}) {
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