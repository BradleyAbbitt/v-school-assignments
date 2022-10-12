import React from "react"
import ReactDOM from "react-dom/client"
import "./style.scss"
import App from "./App"
import {ThemeContext, ThemeContextProvider} from "./themeContext"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  )