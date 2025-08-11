import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import DecryptedText   from "../encryttext";
import Link from "next/link";




export default function Hero() {
    if (typeof window !== 'undefined') {
        AOS.init();
    }

    return(<div className="w-full px-4 gap-7">
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            <p className="text-lg text-center">Full-Stack Web/Ethereum Developer</p>
            <span className="text-md">Name: <span className="text-purple-700 dark:text-[#e500a4] text-xl">&#123;</span></span>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <DecryptedText text="Mbata" className="text-6xl"/>   
                <DecryptedText text="Lawrence" className="text-6xl"/>     
            </div> 
            <span className="text-purple-700 dark:text-[#e500a4] text-xl">&#125;</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                <p className="text-md">Skills:</p>
                <p className="text-xl text-center font-medium">[Next.js, React, Tailwind, Laravel, Solidity(Smart Contracts)]</p>
            </div>
            <div className="w-[80%]">
                <p className="text-md lg:text-lg text-center">I bridge Web2 and Web3, I thrive at building scalable web apps and gas-optimized smart contracts.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 lg:gap-6">
                <button className="relative px-6 py-1 font-semibold border-2 border-black dark:border-white overflow-hidden group rounded-full cursor-pointer">
                    <span className="absolute inset-0 bg-black dark:bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-400">Download CV</span>    
                </button>
                <div className="flex items-center justify-center gap-4">
                    <Link href="https://github.com/dilawrenzo77"><FaGithub  size={25} className="cursor-pointer hover:scale-120 transition-all duration-300"/></Link>
                    <Link href="https://linkedin.com/in/mbata-lawrence-5b46a71a3"><FaLinkedinIn size={25} className="cursor-pointer hover:scale-120 transition-all durtaion-300"/></Link>
                    <button className="px-2 py-1.5 rounded-full text-xs bg-muted/50 backdrop-blur-sm dark:bg-[#e500a4]/50 text-white ">mbatalawrence@gmail.com</button>
                </div>
            </div>
        </div>
    </div>)
};
