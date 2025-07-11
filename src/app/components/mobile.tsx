"use client"
import { Link } from "react-scroll";
import { WiDayLightWind } from "react-icons/wi";
import { MdOutlineNightlightRound } from "react-icons/md";
import { useState } from "react";




export default function Mobile() {
    const [isDark, setIsDark] = useState(false);


    return(
        <div className=" flex flex-col items-start justify-center gap-5 py-10 px-4 h-full">
            <div>
                <button className="bg-black dark:bg-white px-3.5 py-0.5 rounded-full " 
                    onClick={() => {
                        setIsDark(!isDark);
                        document.documentElement.classList.toggle("dark");
                    }}
                >
                    {(isDark) ? <WiDayLightWind size={15} className="text-black"/> : <MdOutlineNightlightRound size={15} className="text-white"/>}
                </button>
            </div>
            <div className="flex flex-col items-start justify-start h-full gap-10">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold hover:text-muted">Projects</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold  hover:text-muted">Experience</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold hover:text-muted">Bio</span>
            </Link>
             <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                <span className="text-lg font-bold x hover:text-muted">Contacts</span>
            </Link>
            </div>
        </div>
    )
};
