import React from 'react'
import styles from "../../css/single-course.module.css"
import Image from "gatsby-image"

const Desarrollo = ({ title, url, created, image, recursos}) => {
    const mainImage = image.childImageSharp.fluid
    // const recursoImage = recursos[0].image.childImageSharp.fluid
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
                </div>
            </div>
        </article>
    )
}

export default Desarrollo
