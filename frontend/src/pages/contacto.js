import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contacto"></Title>
        <article className={styles.text}>
          <p>
            Puede enviarme un mensaje que con gusto atenderé.
          </p>
          <p>
            Puede encontrarme en Twitter en <a href="#">@el_ade</a>.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default contact
