import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const App = () => (
  <Layout>
    <h1>THis App Rules!</h1>
    <p>Login to find out why.</p>
    <Link to="/dashboard">Go to the dashboard</Link>
  </Layout>
)

export default App
