import React from 'react'
import Recurso from './Recurso'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../../css/recursos.module.css'
import Title from '../Title'
import { FormattedMessage } from "gatsby-plugin-intl"

const query = graphql`
{
    allStrapiRecurso(sort: {fields: used, order: DESC}) {
      nodes {
        id
        title
        url
        used(formatString: "YYYY")
        recurso_tipo {
            title
        }
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              #src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }


  
`

const Recursos = () => {
    const tranTitle = 
    <FormattedMessage 
      id="recursos.recursos.title" 
      defaultMessage="recursos Tecnológicos"
    />
    const tranSubtitle = <FormattedMessage 
      id="recursos.recursos.subtitle"
      defaultMessage="que domino"
    />
    const {allStrapiRecurso:{nodes:recursos}} = useStaticQuery(query)
    return (
        <section className={styles.recursos}>
            <Title title={tranTitle} subtitle={tranSubtitle} />
            <div className={styles.center}>
                {
                    recursos.map(item => {
                        return <Recurso key={item.id} {...item} />
                    })
                }
            </div>
        </section>
    )
}

export default Recursos
