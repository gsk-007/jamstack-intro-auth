import React from "react"
import { Link } from "gatsby"
import { IdentyContextProvider } from "react-netlify-identity-widget"

import "./layout.css"
import { IdentityContextProvider } from "react-netlify-identity"

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://gsk-jamstack-intro.netlify.app">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
)

export default Layout
