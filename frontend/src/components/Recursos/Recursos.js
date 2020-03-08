import React from 'react'
import Recurso from './Recurso'
import {graphql, useStaticQuery} from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'

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
    const {allStrapiRecurso:{nodes:recursos}} = useStaticQuery(query)
    return (
        <section className={styles.courses}>
            <Title title="recursos que" subtitle="domino" />
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
