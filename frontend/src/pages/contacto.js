import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
import Contacto from "../components/Contacto/Contacto"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

const contact = ({ data }) => {

  return (
    <Layout>
      <Seo
        title={data.page.meta_title}
        description={data.page.meta_description}
      />
      <section className={styles.contact}>
        <Title title="contacto"></Title>
        <Grid container>
          <Grid item xs={12} sm={6} >
            <Contacto />
            <div className={styles.text}>
            <p>
              Av. Nizuc Casa 14 SM 17 Mza2 Lt 29<br />
              Cancún, Quintana Roo, México 77505
            </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Container>
          <Image fluid={data.page.medios[0].archivo.childImageSharp.fluid} />
          </Container>
          </Grid>
        </Grid>
      </section>
      
    </Layout>
  )
}

export default contact

export const query = graphql`
  {
    page: strapiPagina(slug: { eq: "contacto" }) {
      titulo
      meta_title
      meta_description
      medios {
        titulo
        description
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
