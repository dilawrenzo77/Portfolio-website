import Hero from "./hero";
import Stack from "./stack";
import Projects from "./projects";
import Experience from "./experience";
import About from "./about";
import Contacts from "./contacts";




export default function Home() {
    return<>
     <div className="flex flex-col items-center justify-start gap-20 ">
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <About />
        <Contacts />
        <div className="flex items-center justify-center gap-0.5 text-[0.4rem] lg:text-md">&copy;mbata lawrence. All rights reserved</div>  
    </div>
    </>
};