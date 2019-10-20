import tw from "tailwind.macro"
import React from "react"

const Wrapper = tw.div`
  flex items-center justify-center h-screen
`

const Main = tw.div`
  p-8 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-gray-800
`

export default () => (
  <Wrapper>
    <Main>
      <Heading>Hello, world!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Emotion Starter.</Text>
    </Main>
  </Wrapper>
)
