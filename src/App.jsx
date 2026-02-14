import asset from "./assets/asset"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import { useState } from "react"
import Statistics from "./component/Statistics"


function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home isOpen={isOpen} setIsOpen={setIsOpen} />
      <Statistics />
    </>
  )
}

export default App
