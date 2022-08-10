import * as React from "react"
import "./App.css"
import { useFindTodosQuery } from "./generated/graphql"

function App() {
  const [result, reexecuteQuery] = useFindTodosQuery()
  const { data, fetching, error } = result
  if (fetching) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>error</p>
  }

  return (
    <div>
      {data?.todos.map((v, i) => (
        <p key={i}>{v.text}</p>
      ))}
    </div>
  )
}

export default App
