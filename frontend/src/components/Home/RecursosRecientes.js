import React from 'react'
import Recurso from '../Recursos/Recurso'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'

const query = graphql`
{
    allStrapiRecurso(sort: {fields: used, order: DESC}, limit:6) {
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
            <Title title="recursos" subtitle="tecnológicos" />
            <div className={styles.center}>
                {
                    recursos.map(item => {
                        return <Recurso key={item.id} {...item} />
                    })
                }
            </div>
            <Link to='/recursos' className="btn-primary">
                Recursos que uso (o he Usado)
            </Link>
        </section>
    )
}

export default Recursos
