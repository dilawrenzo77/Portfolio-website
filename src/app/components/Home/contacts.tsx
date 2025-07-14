"use client"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Contacts() {
    if (typeof window !== 'undefined') {
        AOS.init();
    }

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
    emailjs
      .sendForm('service_pmry32l', 'template_l5rxawq', form.current, {
        publicKey: 'BcV2u37w46kEzaQSB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          (e.target as HTMLFormElement).reset();
          alert("Your email has been seen to me!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
  }
    return(<div id="contacts" className= "w-[80%] px-2 py-3 flex flex-col items-center justify-center gap-5 mx-auto">
        <p className="text-xl font-semibold lg:text-2xl traking-widest">Reach Out</p>
        <div className="flex flex-col md:flex-row items-start justify-center grow gap-4 ">
            <div 
            data-aos="fade-right" 
            data-aos-duration="1000" 
            data-aos-easing="ease" 
            data-aos-once="true" 
            data-aos-delay="100"
            className="flex flex-col items-center md:items-start justify-center gap-4">
            <p className="text-sm text-center md:text-start">I would love to hear for you, weather it be feedback, ideas, criticism, jobs or just to say Hello</p>
            <div className="flex flex-col items-start justify-center gap-4">
                <div className="flex items-center justify-center gap-10">
                    <Image src="/Google-Gmail--Streamline-Svg-Logos.svg" width={30} height={30} alt="" className=""/>
                    <p className="text-xs font-semibold">mbatalawrence@gmail.com</p>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <Image src="/phone-svgrepo-com.svg" width={20} height={20} alt="" className=""/>
                    <p className="text-xs font-semibold">+234 7062864478</p>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <Image src="/location-pin-svgrepo-com.svg" width={20} height={20} alt="" className=""/>
                    <p className="text-xs font-semibold">Abuja, Nigeria</p>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <Image src="/linkedin-svgrepo-com.svg" width={20} height={20} alt="" className=""/>
                    <p className="text-xs font-semibold">www.linkedin.com/in/mbata-lawrence-5b46a71a3</p>
                </div>
                <div className="flex items-center justify-between gap-10">
                    <Image src="/whatsapp-svgrepo-com.svg" width={20} height={20} alt="" className=""/>
                    <p className="text-xs font-semibold">+234 7062864478</p>
                </div>
            </div>
        </div>
        <div 
        data-aos="zoom-in" 
        data-aos-duration="1000" 
        data-aos-easing="ease" 
        data-aos-once="true" 
        data-aos-delay="150"
        className="bg-black/30 backdrop-blur-sm py-6 px-2 rounded-lg flex items-center  mx-auto">
            <form ref={form} onSubmit={sendEmail}>
                <div className="w-full flex flex-col items-start justify-center gap-2">
                    <label>Name</label>
                    <input type="text" name="name" className="border-2 rounded-sm focus:outline-0"/>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                    <label>Email</label>
                    <input type="text" name="email" className="border-2 rounded-sm focus:outline-0"/>
                </div>
                <div className="flex flex-col items-start justify-center gap-2">
                    <label>Message</label>
                    <textarea name="message" className="border-2 rounded-sm focus:outline-0"></textarea>
                </div>
                <button type="submit" value="send" className="relative px-6 py-0.5 mt-5 font-semibold border-2 border-black dark:border-white overflow-hidden group rounded-full cursor-pointer">
                    <span className="absolute inset-0 bg-black dark:bg-white translate-x-[-100%] group-hover:translate-x-0 rounded-full transition-transform duration-400"></span>
                    <span className="relative z-10 group-hover:text-white dark:group-hover:text-black transition-colors duration-400">Send</span>    
                </button>
            </form>
        </div>
        </div>
    </div>)
};
