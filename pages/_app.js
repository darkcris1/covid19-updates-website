import Layout from './_layout'
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <Layout title={`Covid Tracker ${new Date().getFullYear()}`}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
