import React from "react"
import { Link } from "gatsby"
import { IdentyContextProvider } from "react-netlify-identity-widget"

import "./layout.css"

const Layout = ({ children }) => (
  <IdentyContextProvider url="https://gsk-jamstack-intro.netlify.app">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentyContextProvider>
)

export default Layout
