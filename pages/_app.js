import Layout from './_layout'
import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Layout title={`Covid Tracker ${new Date().getFullYear()}`}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
