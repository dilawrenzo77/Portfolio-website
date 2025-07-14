import { v2 as cloudinary } from "cloudinary";



cloudinary.config({
		cloud_name: "di2hze8zk"
	})

//Our Images
const ecomm1 = cloudinary.url("v1_cwfo5b");
const ecomm2 = cloudinary.url('v6_zdukdv');
const ecomm3 = cloudinary.url('v5_ncgu3d');
const ecomm4 = cloudinary.url('v2_kuvt0s');
const ecomm5 = cloudinary.url('v9_uo32r6');
const ecomm6 = cloudinary.url('v4_l4wq6m');
const ecomm7 = cloudinary.url('v11_bstcv0');
const ecomm8 = cloudinary.url('v10_ion75z');
const ecomm9 = cloudinary.url('v13_hzc4fl');
const ecomm0 = cloudinary.url('v12_au0ggx');

//Binance
const b1 = cloudinary.url('b1_j0obog');
const b2 = cloudinary.url('b6_tl0fwf');
const b3 = cloudinary.url('b3_oowx6f');
const b4 = cloudinary.url('b4_jxmkx1');
const b5 = cloudinary.url('b2_wqnn4x');
const b6 = cloudinary.url('b5_szv6xb');
const b7 = cloudinary.url('b7_yxfksp');
const b8 = cloudinary.url('b10_udsffp');
const b9 = cloudinary.url('b8_h2ifqt');
const b0 = cloudinary.url('b9_gq9tfh');
const b11 = cloudinary.url('b11_jggj1t');
const b12 = cloudinary.url('b11_jggj1t');

//cologne
const c1 = cloudinary.url('vex8_uhfsrl');
const c2 = cloudinary.url('vex5_qyl6ow');
const c3 = cloudinary.url('vex12_oylfnr');
const c4 = cloudinary.url('vex6_bppdhb');
const c5 = cloudinary.url('vex13_bp5vsj');
const c6 = cloudinary.url('vex11_gqpgpt');
const c7 = cloudinary.url('vex7_usyemu');
const c8 = cloudinary.url('vex2_vay0i8');
const c9 = cloudinary.url('vex4_tcvasm');
const c0 = cloudinary.url('vex3_rqg5hl');
const c11 = cloudinary.url('vex0_gm4ozz');

//Apple
const app1 = cloudinary.url('pro1_i9pve0');
const app2 = cloudinary.url('pro3_qegm3k');
const app3 = cloudinary.url('pro5_lywfuj');
const app4 = cloudinary.url('pro7_o3voxw');
const app5 = cloudinary.url('pro8_yjhctx');
const app6 = cloudinary.url('pro2_pn3gkm');
const app7 = cloudinary.url('pro4_nctdcg');
const app8 = cloudinary.url('pro6_zjvk4m');


//eat
const eat1 = cloudinary.url('pic1_go2gsd');
const eat2 = cloudinary.url('pic2_nb1kyg');
const eat3 = cloudinary.url('pic4_s6eihg');
const eat4 = cloudinary.url('pic3_zw5deb');
const eat5 = cloudinary.url('pic5_wqcost');
const eat6 = cloudinary.url('pic6_adjjfe');



const web2Projects = [
    {
	projectId:  1, 
	projectName: "E-commerce website",
	projectTitle: "Full-Stack",
	projectDescription: "This is a full-stack e-commerce website.",
    projectDetails: 
        "This project is comprises of a visually appealing frontend and a small scale backend end for data functionality. This project fully utilizes the performance, routing, route handlers(to handle the backend) and context api provided by next.js",
    keyFeatures: ["Cart Functionality: The app has a cart functionality, ability to add products to cart, increase the amount of products, remove the product, calculate the amount of the total products in the cart etc.", "Responsive Design: The project is made suitable for various devices, from mobile to extra-large screens."],
	projectTools: ["Next.js", "Tailwind", "Postgres"],
	projectThumbnail: `${ecomm1}`,
	projectImages: [`${ecomm2}`,`${ecomm3}`, `${ecomm4}`, `${ecomm5}`,`${ecomm6}`,`${ecomm7}`,`${ecomm8}`,`${ecomm9}`,`${ecomm0}`],
	projectLink: "https://full-stack-e-commerce-website-blue.vercel.app/",
	projectGithub: "https://github.com/dilawrenzo77/Full-stack-e-commerce-website"
   },
   {
	projectId:  2, 
	projectName: "Binance Landing Page Clone",
	projectTitle: "FrontEnd",
	projectDescription: "A close clone of the Binance Finanace Front Page",
    projectDetails: "This project is a simple responsive frontpage close clone of the BINANCE landing page, built using Nextjs. The goal of this project was to closely replicate the design and layout of binance's official website while focusing on designing, clean code, and modern FrontEnd practices. This is a purely frontend project, meaning no backend functionality is included.",
    keyFeatures: ["Proper Structure: This clone carefully and precisely replicates the struture of the binance frontpage","Responsive Design: The project is made suitable for various devices, from mobile to extra-large screens.","Dark mode: Page consist of the dark mode feature that changes dynamically by toogling."],
	projectTools: ["Next.js", "Tailwind"],
	projectThumbnail: `${b1}`,
	projectImages: [`${b1}`, `${b2}`,`${b3}`,`${b4}`,`${b5}`,`${b6}`,`${b7}`,`${b8}`,`${b9}`,`${b0}`,`${b11}`,`${b12}`],
	projectLink: "https://binanceclonelawrence.netlify.app",
	projectGithub: "https://github.com/dilawrenzo77/Binance-Landing-page-Clone"
   },
   {
	projectId:  3, 
	projectName: "Cologne Company's Landing Page",
	projectTitle: "FrontEnd",
	projectDescription: "This is the Landing page of a Cologne company",
    projectDetails: "This is a frontEnd project of a modern day landing page for a fictional cologne company created with Nextjs and tailwind-CSS. It is a clean,user friendly, responsive and modern day designed landing page.",
    keyFeatures: ["Modern UI: This landing page has a well struttured and clean UI","Responsive design: designed to be responsive taking into consideration various device sizes"],
	projectTools: ["Next.js", "Tailwind"],
	projectThumbnail: `${c2}`,
	projectImages: [`${c1}`, `${c3}`, `${c4}`, `${c5}`, `${c6}`, `${c7}`, `${c8}`, `${c9}`, `${c0}`, `${c11}`],
	projectLink: "https://colognelanding.netlify.app",
	projectGithub: "https://github.com/dilawrenzo77/LandingPage-for-a-Cologne-company"
   },
   {
	projectId:  4, 
	projectName: "Apple.com Landing Page clone",
	projectTitle: "FrontEnd",
	projectDescription: "apple.com landing page clone",
    projectDetails: "This project is a simple non-responsive frontend clone of the Apple.com landing page, built using React. The goal of this project was to replicate the design and layout of Apple's official website while focusing on designing, clean code, and modern React practices. This is a purely frontend project, meaning no backend functionality is included.",
    keyFeatures: ["Clean UI: The project precisely replicated the apple landing page UI"],
	projectTools: ["React","CSS"],
	projectThumbnail: `${app1}`,
	projectImages: [`${app1}`,`${app2}`,`${app3}`,`${app4}`,`${app5}`,`${app6}`,`${app7}`,`${app8}`],
	projectLink: "https://lappclone.netlify.app",
	projectGithub: "https://github.com/dilawrenzo77/apple-landing-page-clone-React"
   },
   {
	projectId:  5, 
	projectName: "Restaurant Landing Page",
	projectTitle: "FrontEnd",
	projectDescription: "A modern restaurant's Landing Page",
    projectDetails: "This is a personal project of a modern day restaurant landing page. It is a sleek,user friendly, responsive and modern day designed landing page.",
	projectTools: ["React", "CSS"],
    keyFeatures: ["Responsive design: designed to be responsive taking into consideration various device sizes"],
	projectThumbnail: `${eat1}`,
	projectImages: [`${eat1}`,`${eat2}`,`${eat3}`,`${eat4}`,`${eat5}`,`${eat6}`],
	projectLink: "https://restaurantlanding7.netlify.app",
	projectGithub: "https://github.com/dilawrenzo77/Modern-day-restaurant-Landing-page"
   }
];
export default web2Projects;