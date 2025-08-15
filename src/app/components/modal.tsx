import Image from "next/image";
import Link from "next/link";


interface CardData {
    projectId: number;
    projectName: string;
    projectTitle: string;
    projectDescription: string;
    projectDetails: string;
    keyFeatures: string[];
    projectTools: string[];
    projectThumbnail: string;
    projectImages: string[];
    projectLink: string;
    projectGithub: string;
}

export default function Modal({data}: {
    data: CardData
}) {
    return(<div className="h-65 overflow-y-auto no-scrollbar">
            <p className="text-lg mb-2">{data.projectName}</p>
            <Image src={data.projectThumbnail} width={300} height={150} alt="our project Image" className="object-cover rounded-lg mb-2"/>
            <div className="flex items-center justify-center gap-2 w-fit mb-2">
                {data.projectTools.map((tool,index) => <p key={index} className="text-[0.5rem] capitalize underline ">{tool}</p>)}
            </div>
            <div className="flex flex-col items-start justify-center gap-4 mb-4">
                <p className="text-sm">{data.projectDescription}</p>
                <p className="text-xs">{data.projectDetails}</p>
                <div className="flex flex-col gap-1">
                    {data.keyFeatures.map((feature,index) => <p key={index} className="text-[0.6rem]">{feature}</p>)}
                </div>
            </div>
            <div className="flex items-center justify gap-6 bg-accent w-fit px-6 py-1">
                <Link href={data.projectLink}><p className="text-xs hover:text-muted hover:scale-105">Link</p></Link>
                <Link href={data.projectGithub}><p className="text-xs hover:text-muted hover:scale-105">GitHub</p></Link>
            </div>
            <p className="text-sm mb-2 font-bold">Project Images</p>
            <div className="flex flex-col justify-center items-center gap-2 sm:grid sm:grid-cols-2 invisible sm:visible">
                {data.projectImages.map((img,index) => <Image key={index} src={img} width={300} height={150} alt="our project Image" className="object-cover border-2 border-black/90 dark:border-white"/>)}
            </div>
</div>)


};
