import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import * as Urql from "urql"

const client = Urql.createClient({
  url: "http://localhost:8080/query",
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Urql.Provider value={client}>
      <App />
    </Urql.Provider>
  </React.StrictMode>
)
