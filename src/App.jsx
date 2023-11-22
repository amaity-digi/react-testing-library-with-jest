
import { useState } from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const nextColor = buttonColor === "red" ? "blue" : "red";

  return (
  <div>
    <h3>Hello world!</h3>
    <button className={buttonColor} onClick={() => setButtonColor(nextColor)}>Change to {nextColor}</button>
  </div>
  )
}

export default App
