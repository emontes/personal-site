import React from "react"
import Layout from "../components/layout"
import Desarrollos from "../components/Desarrollos/Desarrollos"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const desarrollos = ( {data} ) => {
  return (
    <Layout>
      <Desarrollos />
      <Image fluid={data.page.medios[0].archivo.childImageSharp.fluid} />
    </Layout>
  )
}

export default desarrollos

export const query = graphql`
{
  page: strapiPagina(slug: {eq: "desarrollos"}) {
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