import React from 'react'
import Desarrollo from '../Desarrollos/Desarrollo'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'

const query = graphql`

{
    allStrapiDesarrollo(sort: {fields: created, order: DESC}, limit:9) {
      nodes {
        id
        title
        text
        url
        created(formatString: "MMM, YYYY")
        portada {
          childImageSharp {
            fluid(maxWidth: 600) {
              #src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        recursos {
          title
          image {
            childImageSharp {
              fluid(maxHeight: 60) {
                src
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
  
`

const Desarrollos = () => {
    const {allStrapiDesarrollo:{nodes:desarrollos}} = useStaticQuery(query)
    return (
        <section className={styles.courses}>
            <Title title="últimos" subtitle="desarrollos" />
            <div className={styles.center}>
                {
                    desarrollos.map(item => {
                        return <Desarrollo key={item.id} {...item} />
                    })
                }
            </div>
            <Link to='/desarrollos' className="btn-primary">
                Más Desarrollos
            </Link>

            
        </section>
    )
}

export default Desarrollos
