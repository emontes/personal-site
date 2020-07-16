import React from 'react'
import Desarrollo from '../Desarrollos/Desarrollo'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from '../../css/courses.module.css'
import Title from '../Title'
import { FormattedMessage } from "react-intl"

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
    const tranTitle = <FormattedMessage 
      id="home.Desarrollos.titlte"
      defaultMessage="Últimos"
    />
    const tranSubtitle = <FormattedMessage 
      id="home.Desarrollos.subtitlte"
      defaultMessage="Desarrollos"
    />
    return (
        <section className={styles.courses}>
            <Title title={tranTitle} subtitle={tranSubtitle} />
            <div className={styles.center}>
                {
                    desarrollos.map(item => {
                        return <Desarrollo key={item.id} {...item} />
                    })
                }
            </div>
            <Link to='/desarrollos' className="btn-primary">
                <FormattedMessage 
                  id="home.DesarrollosRecientes.mas-desarrollos"
                  defaultMessage="Ver más desarrollos"
                />
                
            </Link>

            
        </section>
    )
}

export default Desarrollos
