import Image from "next/image";
import Modal from "./modal";

//our modal imports
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


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

export default function ProjectCard({data}: {data : CardData}) {
    return(
    <Dialog>
        <DialogTrigger>
        <div className="bg-accent/30 backdrop-blur-sm w-[20rem] min-w-[10rem] px-2 py-1 flex flex-col items-start justify-center gap-1 rounded-lg shadow-neu dark:shadow-deu cursor-pointer">
        <p className="px-1.5 py-0.5 bg-accent rounded-lg text-[0.5rem] w-fit">{data.projectTitle}</p>
        <p className="text-sm sm:text-lg"><span>&#123;</span>{data.projectName}<span>&#125;</span></p>
        <p className="text-[0.5rem]">{data.projectDescription}</p>
        <div className="flex items-center justify-start gap-4 w-fit">
            {data.projectTools.map((tool,index) => <p key={index} className="text-[0.6rem] bg-accent rounded-xl px-2 py-0.5">{tool}</p>)}
        </div>
        <div className="h-35">
            <Image src={data.projectThumbnail} width={250} height={100} alt="our project Image" className="object-cover h-full rounded-lg"/>
        </div>
    </div>
        </DialogTrigger>
        <DialogContent><Modal data={data}/></DialogContent>
    </Dialog>
    )
};
