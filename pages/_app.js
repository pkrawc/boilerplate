import React from "react"
import { default as NextApp, Container } from "next/app"
import BaseStyles from "components/base-styles"

export default class App extends NextApp {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <BaseStyles />
        <Component />
      </Container>
    )
  }
}
