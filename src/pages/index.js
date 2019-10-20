import styled from "@emotion/styled"
import tw from "tailwind.macro"
import React from "react"

// Adding the TW `container` class errors out, even when including TW via PostCSS
const Wrapper = styled.div`
  ${tw`p-64 bg-gray-200`}
`

export default () => <Wrapper>Hello world!</Wrapper>
