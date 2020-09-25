import tw from "twin.macro"
import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-xl text-gray-700
`

export default function Custom404() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Page Not Found" />
        <Main>
          <Heading>Oops!</Heading>
          <Text>We can't find the page that you are looking for.</Text>
        </Main>
      </Wrapper>
    </Layout>
  )
}
