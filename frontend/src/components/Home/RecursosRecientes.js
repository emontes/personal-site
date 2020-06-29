import React from 'react'
import Recurso from '../Recursos/Recurso'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../css/courses.module.css'
import styles2 from '../../css/recursos.module.css'
import Title from '../Title'
import { FormattedMessage } from "react-intl"

const query = graphql`
{
    allStrapiRecurso(sort: {fields: used, order: DESC}, limit:12) {
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
            fluid(maxHeight: 200) {
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
    const tranTitle = <FormattedMessage 
      id="home.Recursos.titlte"
      defaultMessage="Últimas Tecnologías"
    />
    const tranSubtitle = <FormattedMessage 
      id="home.Recursos.subtitlte"
      defaultMessage="que domino"
    />
    return (
        <section className={styles2.recursos}>
            <Title title={tranTitle} subtitle={tranSubtitle} />


            <div className={styles2.center}>
                {
                    recursos.map(item => {
                        return <Recurso key={item.id} {...item} />
                    })
                }
            </div>
            <Link to='/recursos' className="btn-primary">
              <FormattedMessage 
                id="home.RecursosRecientes.ver-los-recursos"
                defaultMessage="Ver Los Recursos que uso (o he Usado)"
              />
                
            </Link>
        </section>
    )
}

export default Recursos
