import React from "react"
import { GlobalStyles } from "twin.macro"

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
