import React from "react"
import styles from "../../css/single-recurso.module.css"
import Image from "gatsby-image"

const Recurso = ({ title, url, used, image, recurso_tipo }) => {
  const mainImage = image.childImageSharp.fluid
  const tipo = recurso_tipo ? recurso_tipo.title : ""
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
          ver
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>
            {tipo}, {used}
          </p>
        </div>

        
      </div>
    </article>
  )
}

export default Recurso
