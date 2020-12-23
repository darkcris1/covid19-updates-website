import { Container } from 'react-bootstrap'
import SEO from '../components/SEO'
import NavBar from '../components/Navbar'
import Footer from '../components/sections/Footer'

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} description="Current covid updates worldwide ">
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/journal/bootstrap.min.css"
        />
      </SEO>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
