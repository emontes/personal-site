import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
const NotFoundPage = () => (
  <Layout>
    <header className={styles.error}>
      <Banner title="oops! un callejón sin salida">
        <Link to="/" className="btn-white">
          regresar al home
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
