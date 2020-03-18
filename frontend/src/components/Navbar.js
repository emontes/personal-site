import React from "react"
//import { Link } from "gatsby"
import logo from "../images/logo.svg"
import logoSmall from "../images/logo-small.svg"
import styles from "../css/navbar.module.css"
import links from "../constants/Links"
import icons from "../constants/SocialLinks"
import { FaAlignRight } from "react-icons/fa"
import { AppContext } from "../context"
import { useIntl, Link } from "gatsby-plugin-intl"

const Navbar = (  ) => {
  const intl = useIntl()
  const { size, handleOpenSidebar, height } = React.useContext(AppContext)
  
  if (size > 992) {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.center}>
          <Link to="/">
            <img src={logo} alt="Enrique Montes logo"></img>
          </Link>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>
                    {intl.formatMessage({id: link.id })}
                    {/* <FormattedMessage id={link.id} /> */}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a key={icon.id} href={icon.url} className={styles.navIcon}>
                  {icon.image}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
        <div className={styles.header}>
          <img src={logoSmall} alt="Enrique Montes logo"></img>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
            menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    )
  }
}

export default Navbar
