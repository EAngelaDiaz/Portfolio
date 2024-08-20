import React from "react";
import developer from '../assets/developer.png';
import header from '../assets/header.png';

function Home() {
  
  return (
    <div className="h-screen w-screen overflow-hidden">
        <img
        alt="header"
        src={header}
        className="md:hidden w-screen"
        ></img>
        <div className="md:h-20 min-[700px]:hidden bg-[#2b2b29]"></div>
        <img
        alt="developer"
        src={developer}
        className="absolute left-[70%] top-[160px] md:left-[20%] md:static"
        ></img>
        <div className="absolute md:text-[40px] md:left-[0] md:w-screen p-6 md:static left-[20%] top-[50%] w-[619px] h-[250px] text-black text-[64px] font-normal">
            <p>Hi! Im Name Estrella a software developer</p>
        </div>
     
    </div>
  )
}

export default Home