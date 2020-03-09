import React from 'react'
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"
import logo from '../../images/eama-logo.png'

const Desarrollo = ({ title, text, url, created, portada, recursos}) => {
    const mainImage = portada
        ? portada.childImageSharp.fluid
        : logo
    // const recursoImage = recursos[0].image.childImageSharp.fluid
    const recursoImage = recursos 
        ? recursos[0].image.childImageSharp.fluid.src
        : logo

    return (
        <article className={styles.course}>
            <div className={styles.imgContainer}>
                <Image fluid={mainImage} alt={title} className={styles.img} />
                <a 
                  href={url}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Ver
                </a>
            </div>
            <div className={styles.footer}>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <p>{created}</p>
                    {text}
                </div>
                {/* <Image fluid={recursoImage} style={{height: "60px"}}/> */}
                <img src={recursoImage} alt={recursos[0].title} />
            </div>
        </article>
    )
}

export default Desarrollo
