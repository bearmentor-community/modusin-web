import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { BrowserRouter as Router } from "react-router-dom"

// -----------------------------------------------------------------------------

import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { createLogger } from "redux-logger"
import thunk from "redux-thunk"

// -----------------------------------------------------------------------------

import reducers from "./redux/reducers"
import { fetchAllPosts } from "./redux/actions"

// -----------------------------------------------------------------------------

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

// -----------------------------------------------------------------------------

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/index.css"
// import "./styles/debug.css"

// -----------------------------------------------------------------------------

const middleware = [thunk]

if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger())
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

store.dispatch(fetchAllPosts())

// -----------------------------------------------------------------------------

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  )
}

// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
