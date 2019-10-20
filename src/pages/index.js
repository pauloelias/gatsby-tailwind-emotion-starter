import tw from "tailwind.macro"
import React from "react"

const logos = [
  {
    name: "gatsby",
    logo: require("../assets/gatsby.svg"),
  },
  {
    name: "tailwind",
    logo: require("../assets/tailwind.svg"),
  },
  {
    name: "emotion",
    logo: require("../assets/emotion.png"),
  },
]

const Wrapper = tw.div`
  flex items-center justify-center h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-gray-700
`

const Logos = tw.div`
  flex items-center justify-around mt-4 px-12
`

const Icon = tw.img`
  h-12
`

export default () => (
  <Wrapper>
    <Main>
      <Heading>Hello, world!</Heading>
      <Text>Welcome to the Gatsby Tailwind CSS + Emotion Starter.</Text>
      <Logos>
        {logos &&
          logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={`${name} Logo`} key={index} />
          ))}
      </Logos>
    </Main>
  </Wrapper>
)
