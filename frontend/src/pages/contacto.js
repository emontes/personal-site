import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
import Contacto from "../components/Contacto/Contacto"

const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contacto"></Title>
        <Contacto />
      </section>
    </Layout>
  )
}

export default contact
