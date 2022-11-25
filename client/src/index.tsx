import React from "react"
import ReactDOM from "react-dom/client"
import "./index.less"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom"
//引入状态管理的仓库
import { Provider } from "react-redux"
import store from "./store"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
reportWebVitals()
