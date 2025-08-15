import Modal2 from  "@/app/components/modal2"; 

//our modal imports
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";


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

export default function ProjectCard2({data}: {data: CardData}){
    return(
        <Dialog>
            <DialogTrigger>
        <div className="bg-black/30 backdrop-blur-sm w-[20rem] px-2 py-1 flex  flex-col items-center sm:items-start justify-center gap-3 rounded-lg cursor-pointer border-2 border-black/90 dark:border-white">
            <p className="px-1.5 py-0.5 bg-accent rounded-lg text-[0.5rem] w-fit">Ethereum</p>
            <p className="text-sm sm:text-lg lg:text-xl"><span>&#123;</span>{data.projectName}<span>&#125;</span></p>
            <p className="text-xs lg:text-md text-center sm:text-start">{data.projectDescription}</p>
            <div className="flex items-center justify-start gap-4 w-fit">
                {data.projectTools.map((tool,index) => <p key={index} className="text-[0.6rem] rounded-xl px-2 py-0.5">{tool}</p>)}
            </div>
        </div>
            </DialogTrigger>
            <DialogContent><Modal2 data={data}/></DialogContent>
        </Dialog>)
}