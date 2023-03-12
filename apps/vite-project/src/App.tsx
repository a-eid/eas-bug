import React, { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import { round } from "utils"

function App() {
  return <div>{round(1.2222, 2)}</div>
}

export default App
