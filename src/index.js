import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"

// Wrap the rendering in a function:
const render = (Component) => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root")
  )
}

// Do this once
registerServiceWorker()

// Render once
render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    render(App)
  })
}
