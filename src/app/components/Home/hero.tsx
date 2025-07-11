import { SiEthereum } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Spline from '@splinetool/react-spline/next';
import DecryptedText   from "../encryttext";
import Link from "next/link";




export default function Hero() {
    if (typeof window !== 'undefined') {
        AOS.init();
    }

    return(<div className="relative flex flex-col sm:flex-row items-center sm:items-start justify-between w-full px-4 gap-7">
        <Spline className="absolute top-0 left-0 w-fit h-full z-[-1]" scene="https://prod.spline.design/WaXaaN589lZQeoIY/scene.splinecode" />
        <div className="absolute w-[18rem] h-18 bottom-0 right-0 bg-white dark:bg-[#1c1c22] text-white dark:text-[#1c1c22] transition-colors duration-500">Hide the logo</div>
        <div className="flex flex-col items-center sm:items-start justify-between gap-3">
            <p className="text-xs">Full-Stack web/ethereum Developer</p>
            <span className="text-sm">name: <span className="text-purple-700 dark:text-[#e500a4] text-lg">&#123;</span></span>
            <DecryptedText text="Mbata" className="text-2xl sm:text-4xl"/>   
            <DecryptedText text="Lawrence" className="text-2xl sm:text-4xl"/>  
            <span className="text-purple-700 dark:text-[#e500a4] text-lg">&#125;</span>
            <div className="w-[80%]">
                <p className="text-xs text-center sm:text-start">I bridge Web2 and Web3, I thrive at building scalable web apps and gas-optimized smart contracts.</p>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <button className="relative px-6 py-1 font-semibold border-2 border-black dark:border-white overflow-hidden group rounded-full cursor-pointer">
                    <span className="absolute inset-0 bg-black dark:bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-400">Download CV</span>    
                </button>
                <div className="flex items-center justify-center gap-4">
                    <Link href="https://github.com/dilawrenzo77"><FaGithub  size={20} className="cursor-pointer hover:scale-120 transition-all duration-300"/></Link>
                    <Link href="https://linkedin.com/in/mbata-lawrence-5b46a71a3"><FaLinkedinIn size={20} className="cursor-pointer hover:scale-120 transition-all durtaion-300"/></Link>
                    <button className="px-2 py-1.5 rounded-full text-[0.5rem] bg-muted/50 backdrop-blur-sm dark:bg-[#e500a4]/50 text-white ">mbatalawrence@gmail.com</button>
                </div>
            </div>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-duration="1000" 
        data-aos-easing="ease" 
        data-aos-once="true" 
        data-aos-delay="150"
        className="flex flex-col items-center justify-center gap-3 bg-black/30 backdrop-blur-sm my-auto px-2 py-1 rounded-sm">
            <p  className="text-lg">What I Do</p>
            <div className="flex flex-col items-center justify-center gap-1">
                <FaLaptopCode size={20}/>
                <p className="text-xs text-center">FrontEnd</p>
                <p className="text-[0.5rem] text-center">Build stunning and responsive web Pages</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                < MdOutlineSettingsSuggest size={20} />
                <p className="text-xs text-center">Backend</p>
                <p className="text-[0.5rem] text-center">Build and maintain server logic and Infrastructure</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <SiEthereum size={20} />
                <p className="text-xs text-center">Ethereum development</p>
                <p className="text-[0.5rem] text-center">build dApps, smart contracts, and protocols on the Ethereum blockchain</p>
            </div>
        </div>
    </div>)
};
