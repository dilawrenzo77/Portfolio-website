"use client";
import stackDetails from "@/lib/stack";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

               

export default function Stack() {
   if (typeof window !== 'undefined') {
        AOS.init();
    }

    return(<div className=" w-full flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold lg:text-2xl">Technical Stack</p>
        <div className="flex flex-wrap justify-center gap-4 px-2 mb-10">
            {stackDetails.map((stack, index) => {
                return(<div key={index} className="bg-accent/30 group backdrop-blur-sm px-1.5 py-1 rounded-lg flex flex-col items-center justify-center gap-2 relative">
                        <Image src={stack.symbol} width={40} height={90} alt="stack image" className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                        <div className="flex items-center justify-center absolute invisible group-hover:visible botton-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white dark:bg-black/70">
                            <p className="text-xs">{stack.stackName}</p>
                        </div>
                    </div>)
            })}
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center hover:scale-110 transition-transform duration-300 justify-center gap-4 py-1 px-4 rounded-full">
                <Image src="/Javascript--Streamline-Svg-Logos.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>Javascript</p>
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 gap-4 py-1 px-4 rounded-full">
                <Image src="/Solidity--Streamline-Svg-Logos.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>Solidity</p>
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 gap-4 py-1 px-4 rounded-full">
                <Image src="/php-logo-svgrepo-com.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>PHP</p>
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 gap-4 py-1 px-4 rounded-full">
                <Image src="/html-5-svgrepo-com.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>HTML</p>
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 gap-4 py-1 px-4 rounded-full">
                <Image src="/css-3-svgrepo-com.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>CSS</p>
            </div>
            <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 gap-4 py-1 px-4 rounded-full">
                <Image src="/sql-database-generic-svgrepo-com.svg" width={20} height={20} className="rounded-full" alt="language Image"/>
                <p>SQL</p>
            </div>
        </div>
    </div>)
};
