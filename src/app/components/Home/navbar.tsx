"use client";
import { WiDayLightWind } from "react-icons/wi";
import { MdOutlineNightlightRound } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Mobile from "../mobile";


export default function Navbar() {
    const [isDark, setIsDark] = useState(false);

    return(
        <nav className="invisible sm:visible mt-1 lg:mt-3 xl:mt-4 ">
            <div className="flex items-start justify-center gap-4 w-fit mx-auto px-8 md:gap-5 lg:gap-7 xl:gap-8 py-1 rounded-full">
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={800}>
                    <span className="scroll-container hover-scroll">
                        <span className="scroll-text text-sm font-semibold sm:text-md lg:text-lg xl:text-xl hover:text-muted cursor-pointer" data-text="Projects">Projects</span>
                    </span>
                </Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={800}>
                    <span className="scroll-container hover-scroll">
                        <span className="scroll-text text-sm font-semibold sm:text-md lg:text-lg xl:text-xl hover:text-muted cursor-pointer" data-text="Experience">Experience</span>
                    </span>
                </Link>
                <Link activeClass="active" to="bio" spy={true} smooth={true} offset={-50} duration={800}>
                    <span className="scroll-container hover-scroll">
                        <span className="scroll-text text-sm font-semibold sm:text-md lg:text-lg xl:text-xl hover:text-muted cursor-pointer" data-text="Bio">Bio</span>
                    </span>
                </Link>
                <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-50} duration={800}>
                    <span className="scroll-container hover-scroll">
                        <span className="scroll-text text-sm font-semibold sm:text-md lg:text-lg xl:text-xl hover:text-muted cursor-pointer" data-text="Contacts">Contacts</span>
                    </span>
                </Link>
                <button className="bg-black dark:bg-white px-3.5 lg:px-4.5 lg:py-1 py-0.5 rounded-full cursor-pointer" 
                    onClick={() => {
                        setIsDark(!isDark);
                        document.documentElement.classList.toggle("dark");
                    }}
                >
                    {(isDark) ? <WiDayLightWind size={15} className="text-black"/> : <MdOutlineNightlightRound size={15} className="text-white"/>}
                </button>
            </div>
            <div className="visible sm:invisible w-full flex items-center justify-center mt-[-12] mb-4">
                <Sheet >
                    <SheetTrigger><RxHamburgerMenu size={30} className="visible sm:invisible "/></SheetTrigger>
                    <SheetContent>
                        <Mobile />
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
};
