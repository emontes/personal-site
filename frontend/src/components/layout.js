import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Language from "./Language"

const Layout = ({ children }) => {
  return (
    
    <main>
      <Navbar></Navbar>
      <Language />
      <Sidebar></Sidebar>
      {children}
      <Footer></Footer>
    </main>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
