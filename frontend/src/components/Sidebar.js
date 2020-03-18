import React from "react"
import { AppContext } from "../context/context"
import styles from "../css/sidebar.module.css"
import { FaTimes } from "react-icons/fa"
import links from "../constants/Links"
import { useIntl, Link } from "gatsby-plugin-intl"
const Sidebar = () => {
  const intl = useIntl()
  const { isSidebarOpen, handleCloseSidebar, height } = React.useContext(
    AppContext
  )
  return (
    <div
      className={
        isSidebarOpen
          ? `${styles.sidebar}`
          : `${styles.sidebar} ${styles.closeSidebar} `
      }
    >
      <header
        className={
          height < 80
            ? `${styles.header}`
            : `${styles.header} ${styles.movingHeader}`
        }
      >
        <button onClick={handleCloseSidebar} className={styles.closeBtn}>
          close <FaTimes className={styles.closeIcon}></FaTimes>
        </button>
      </header>
      <section className={styles.linksContainer}>
        <div className={styles.links}>
          {links.map(item => {
            return (
              <Link
                key={item.id}
                to={item.url}
                className={styles.link}
                onClick={handleCloseSidebar}
              >
                {/* {item.text} */}
                {intl.formatMessage({id: item.id })}
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Sidebar
