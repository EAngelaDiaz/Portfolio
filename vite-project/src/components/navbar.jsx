import React, { useState } from "react"
import Menu from "./menu"

function Navbar() {

    const[isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <div className={["absolute", !isMenuOpen ? "w-[69px] p10 h-[47px]":"w-screen h-screen bg-[#2b2b29]"]}>
        <Menu handleMenu={() => setIsMenuOpen(!isMenuOpen)}></Menu>
    </div>
  )
}

export default Navbar