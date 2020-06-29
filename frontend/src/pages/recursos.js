import React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'
import Recursos from "../components/Recursos/Recursos"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const recursos = ( {data} ) => {
  return (
    <Layout>
        <Seo 
          title="Recursos Tecnológicos" 
          description="Las frameworks que uso actualmente para mis desarrollos web son Gatsby y React, pero dominio una gran variedad de Manejadores de Contenido, Bibliotecas, utilerías..."
        />
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