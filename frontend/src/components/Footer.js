import React from "react"
import logo from "../images/white-logo.svg"
import logoSmall from "../images/white-logo-small.svg"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
import { AppContext } from "../context"
const Footer = () => {
  const { size } = React.useContext(AppContext)
  if (size > 992) {
    return (
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt="enrique montes logo"></img>
        </div>
        <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.image}
              </a>
            )
          })}
        </div>
        <div className={styles.info}>
          © {new Date().getFullYear()} Enrique Adelino Montes Araujo. Derechos Reservados. Hecho
          con
          <a href="https://www.gatsbyjs.org/" className={styles.link}>
            Gatsby
          </a>
        </div>
      </footer>
    )
  } else {
    return (
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={logoSmall} alt="enrique montes logo"></img>
        </div>
        <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.image}
              </a>
            )
          })}
        </div>
        <div className={styles.info}>
          © {new Date().getFullYear()} Enrique Adelino Montes Araujo. Derechos Reservados. Hecho
          con
          <a href="https://www.gatsbyjs.org/" className={styles.link}>
            Gatsby
          </a>
        </div>
      </footer>
    )
  }
  
}

export default Footer
