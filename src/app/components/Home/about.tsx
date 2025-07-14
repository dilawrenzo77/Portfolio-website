import Image from "next/image";
import Profile from "@/app/assets/My_Photo.jpg";

export default function About() {
    return(<div id="bio" className="flex flex-col items-center justify-center w-full">
        <p className="text-xl lg:text-2xl tracking-widest font-semibold">Meet Me </p>
        <div className="w-full px-5 flex flex-col items-center justify-center gap-1">
            <Image src={Profile} width={150} height={150} className="custom-circle object-cover" alt="about us photo"/>
            <p className="text-sm w-full px-2 text-center"><span className="text-lg text-muted dark:text-[#e500a4]">&#123;</span>Passionate and self-driven Web Developer with hands-on experience building responsive, user-friendly websites using modern frameworks. Adept at translating ideas into functional, visually appealing digital experiences while continuously expanding my technical expertise. But my passion and drive doesn&apos;t stop at the frontend, It&apos;s diving deep into Web3, blockchain, and smart contract development, fueled by a fascination for decentralized tech and its potential to reshape the digital world. I live for the thrill of turning ideas into functional, impactful solutions, whether it&apos;s a sleek UI, a smart contract, or a tutorial that helps someone else fall in love with coding. Eager to join a forward-thinking team where I can grow, build, and marvel over the future of the web.<span className="text-lg text-muted dark:text-[#e500a4]">&#125;</span></p>
        </div>
    </div>)
};
