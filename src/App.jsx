import asset from "./assets/asset"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import { useState } from "react"
import Statistics from "./component/Statistics"
import UrlShortener from "./component/UrlShortener"
import FooterOne from "./component/FooterOne"
import FooterTwo from "./component/FooterTwo"


function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home isOpen={isOpen} setIsOpen={setIsOpen} />
      <UrlShortener />
      <Statistics />
      <FooterOne />
      <FooterTwo />
    </>
  )
}

export default App
