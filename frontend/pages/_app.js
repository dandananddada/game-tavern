import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import {NextUIProvider } from "@nextui-org/react";
import Layout from '../components/layout';


// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <NextUIProvider>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      {/* <GlobalContext.Provider value={global.attributes}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </GlobalContext.Provider> */}
    </NextUIProvider>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  // const globalRes = await fetchAPI("/global", {
  //   populate: {
  //     favicon: "*",
  //     defaultSeo: {
  //       populate: "*",
  //     },
  //   },
  // })
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: {} } }
}

export default MyApp
