import Image from "next/image";
import Link from "next/link";


interface CardData {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectDetails: string;
    keyFeatures: string[];
    projectTools: string[];
    projectThumbnail: string;
    projectGitHub: string;
    transactionHash: string;
}

export default function Modal2({data}: {
    data: CardData
}) {
    return(<div className="h-65 overflow-y-auto no-scrollbar">
            <p className="text-lg mb-2 font-bold">{data.projectName}</p>
            <Image src={data.projectThumbnail} width={300} height={150} alt="our project Image" className="object-cover rounded-lg mb-2"/>
            <div className="flex items-center justify-center gap-5 w-fit mb-2">
                {data.projectTools.map((tool,index) => <p key={index} className="text-[0.5rem] font-semibold capitalize underline">{tool}</p>)}
            </div>
            <div className="flex flex-col items-start justify-center gap-4 mb-4">
                <p className="text-sm">{data.projectDescription}</p>
                <p className="text-sm">{data.projectDetails}</p>
                <div className="flex flex-col gap-1">
                    {data.keyFeatures.map((feature,index) => <p key={index} className="text-[0.6rem]">{feature}</p>)}
                </div>
            </div>
            <div className="flex items-center justify gap-6 bg-accent w-fit px-4 py-1 rounded-md ">
                <Link href={data.transactionHash}><p className="text-xs hover:text-muted hover:scale-105">Link</p></Link>
                <Link href={data.projectGitHub}><p className="text-xs hover:text-muted hover:scale-105">GitHub</p></Link>
            </div>
</div>)


};